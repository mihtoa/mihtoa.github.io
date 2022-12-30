import Head from 'next/head'
import { Button, Frame, GroupBox, Window, WindowHeader, WindowContent, TextInput, Toolbar } from 'react95'

import SystemBar from 'components/systemBar'
import Desktop from 'components/desktop'
import Icon from 'components/icon'

import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Milene Toazza | Frontend Developer</title>
        <meta name="description" content="Milene Toazza | Frontend Developer" />
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
            defaultValue={`Milene Toazza\nFrontend Developer from Brazil since 2018\nSoftware Engineer student (2020 - 2024)\n\nText here!`}
            fullWidth
          />
          <Frame className={styles.frame} variant="well">
            <small>This page is in development, feel free to send me suggestions!</small>
          </Frame>
        </Window>
        <Window shadow={false} className={styles.window}>
          <WindowHeader active={false}>
            <span>Social</span>
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
                <li>
                  <a target="_blank" href="https://github.com/mihtoa" rel="noreferrer">GitHub</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/mihtoa/" rel="noreferrer">LinkedIn</a>
                </li>
              </ul>
            </GroupBox>
          </WindowContent>
        </Window>
        <SystemBar />
      </main>
    </>
  )
}
