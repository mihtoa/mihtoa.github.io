import { Button } from 'react95'
import Image from 'next/image'

import styles from './systemBar.module.css'

export default function SystemBar() {
  return (
    <div className={styles['system-bar']}>
      <Button>
        <Image className={styles.image} src="/images/icons/start.svg" width="28" height="22" alt="Start" />
        <span>Start</span>
      </Button>
    </div>
  )
}
