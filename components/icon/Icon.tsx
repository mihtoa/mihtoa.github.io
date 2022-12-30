import styles from './Icon.module.css'

import Image from 'next/image'

type Props = {
  icon: string
  title: string
};

export default function Icon({ icon, title }: Props) {
  return (
    <button draggable="true">
      <figure className={styles.figure}>
        <Image className={styles.image} src={icon} width="50" height="51" alt="My Computer" />
        <figcaption className={styles.figcaption}>{title}</figcaption>
      </figure>
    </button>
  );
}
