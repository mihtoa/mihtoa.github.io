import { Button, GroupBox, Window, WindowHeader, WindowContent, Toolbar } from 'react95'
import Head from 'next/head'
import SystemBar from '../components/systemBar'
import Desktop from '../components/desktop'
import Icon from '../components/icon'

import styles from './index.module.css'

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
            <Icon icon="/images/icons/my-computer.png" title="My Computer" />
          </div>
        </Desktop>
        <Window shadow={false} className={styles.window}>
          <WindowHeader>
            <span>resume.exe</span>
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
            <h1>Milene Toazza</h1>
            <br />
            <p>Frontend Developer from Brazil since 2018</p>
            <p>Software Engineer student (2020 - 2024)</p>
            <br />
            <GroupBox label='Social'>
              <ul>
                <li>
                  <a href="https://github.com/mihtoa"> My GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mihtoa/">My LinkedIn</a>
                </li>
              </ul>
            </GroupBox>
            <br />
            <small>This page is in development, feel free to send me suggestions!</small>
          </WindowContent>
        </Window>
        <SystemBar />
      </main>
    </>
  )
}
