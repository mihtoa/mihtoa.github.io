import styles from './Desktop.module.css'

type Props = {
  children?: JSX.Element
};

export default function Desktop({ children }: Props) {
  return (
    <div className={styles.desktop}>{children && (children)}</div>
  );
}
