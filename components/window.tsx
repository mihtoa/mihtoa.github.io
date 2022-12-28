import styles from './window.module.css';

type Props = {
  children?: JSX.Element
};

export default function Window({ children }: Props) {
  return (
    <div className={styles.window}>{children && (children)}</div>
  );
}
