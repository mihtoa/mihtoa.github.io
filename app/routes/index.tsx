import Window from "~/components/window";
import SystemBar, { links as SystemBarLinks } from "~/components/systemBar";

import styles from "../../styles/window.css";

export function links() {
  return [
    ...SystemBarLinks(),
    { rel: "stylesheet", href: styles }
  ];
}

export default function Index() {
  return (
    <>
      <Window>
        <h1>Index</h1>
      </Window>
      <SystemBar />
    </>
  );
}
