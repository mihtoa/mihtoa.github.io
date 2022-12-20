import styles from "../../styles/systemBar.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function SystemBar() {
  return (
    <div className="system-bar"></div>
  )
}
