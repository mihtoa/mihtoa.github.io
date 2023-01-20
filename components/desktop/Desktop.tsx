import styles from './Desktop.module.css'

type Props = {
  children?: JSX.Element
};

export default function Desktop({ children }: Props) {
  const onDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.dataTransfer.dropEffect = 'move'
  }

  return (
    <div className={styles.desktop} onDragOver={onDragOver}>{children && (children)}</div>
  );
}
