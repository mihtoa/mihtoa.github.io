import Head from 'next/head'
import Image from 'next/image'
import SystemBar from '../components/systemBar'
import Window from '../components/window'

const iconStyle: React.CSSProperties = {
  width: "80px",
  color: "white",
}

const imgStyle: React.CSSProperties = {
  margin: "0 auto",
  pointerEvents: "none"
}

export default function Home() {
  function dragstartHandler (event: React.DragEvent<HTMLButtonElement>) {
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <>
      <Head>
        <title>Windows 95</title>
        <meta name="description" content="Windows 95" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Window>
          <button onDragStart={dragstartHandler} draggable="true">
            <figure style={iconStyle}>
              <Image style={imgStyle} src="/images/icons/my-computer.png" width="50" height="51" alt="My Computer" />
              <figcaption>My Computer</figcaption>
            </figure>
          </button>
        </Window>
        <SystemBar />
      </main>
    </>
  )
}
