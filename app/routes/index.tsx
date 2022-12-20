import Window from "~/components/window";
import SystemBar, { links as SystemBarLinks } from "~/components/systemBar";

import styles from "../../styles/window.css";

import myComputerIcon from "../../images/icons/my-computer.png";

export function links() {
  return [
    ...SystemBarLinks(),
    { rel: "stylesheet", href: styles }
  ];
}

function dragstartHandler (event: React.DragEvent<HTMLButtonElement>) {
  event.dataTransfer.effectAllowed = "move";
}

const iconStyle: React.CSSProperties = {
  width: "80px",
  color: "white",
}

const imgStyle: React.CSSProperties = {
  margin: "0 auto",
  pointerEvents: "none"
}

export default function Index() {
  return (
    <>
      <Window>
        <button onDragStart={dragstartHandler} draggable="true">
          <figure style={iconStyle}>
            <img style={imgStyle} src={myComputerIcon} width="50px" alt="My Computer" />
            <figcaption>My Computer</figcaption>
          </figure>
        </button>
      </Window>
      <SystemBar />
    </>
  );
}
