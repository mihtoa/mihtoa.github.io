import { useRef, useEffect } from 'react';
import Head from 'next/head';
import {
  Button,
  Frame,
  GroupBox,
  Window,
  WindowHeader,
  WindowContent,
  TextInput,
  Toolbar,
} from 'react95';

import { Profile } from 'data';

import { Close, Desktop, Icon, SystemBar } from 'components';

import styles from './Home.module.css';

export default function Home() {
  const title = Profile.name + ' | ' + Profile.role;

  const TextInputRef: React.MutableRefObject<HTMLTextAreaElement | null> =
    useRef(null);

  useEffect(() => {
    TextInputRef.current?.focus();
    TextInputRef.current?.setSelectionRange(
      TextInputRef.current?.value.length,
      TextInputRef.current?.value.length
    );
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Desktop>
          <div>
            <Icon icon="/images/my-computer.png" title="My Computer" />
            <Icon icon="/images/recycle-bin.png" title="Recycle Bin" />
          </div>
        </Desktop>
        <Window shadow={false} className={styles.notepad}>
          <WindowHeader>
            <span>Resume - Notepad</span>
            <Close />
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm" disabled>
              File
            </Button>
            <Button variant="menu" size="sm" disabled>
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <TextInput
            multiline
            rows={6}
            defaultValue={`${Profile.name}\n${Profile.description}\n\nText here! `}
            fullWidth
            ref={TextInputRef}
          />
          <Frame className={styles.frame} variant="well">
            <small>
              This page is in development, feel free to send me suggestions.
            </small>
          </Frame>
        </Window>
        {!!Profile?.social && (
          <Window shadow={false} className={styles.window}>
            <WindowHeader active={false}>
              <span>Social</span>
              <Close />
            </WindowHeader>
            <Toolbar>
              <Button variant="menu" size="sm" disabled>
                File
              </Button>
              <Button variant="menu" size="sm" disabled>
                Edit
              </Button>
              <Button variant="menu" size="sm" disabled>
                Save
              </Button>
            </Toolbar>
            <WindowContent>
              <GroupBox label="Social">
                <ul>
                  {Profile?.social?.map((social) => (
                    <li key={social.title}>
                      <a
                        target={social.target}
                        href={social.url}
                        rel="noreferrer"
                      >
                        {social.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </GroupBox>
            </WindowContent>
          </Window>
        )}
        <SystemBar />
      </main>
    </>
  );
}
