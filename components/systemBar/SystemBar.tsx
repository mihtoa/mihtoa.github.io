import { Button } from 'react95'
import Image from 'next/image'

import styles from './SystemBar.module.css'

export default function SystemBar() {
  return (
    <div className={styles['system-bar']}>
      <Button>
        <Image className={styles.image} src="/images/start.svg" width="24" height="19" alt="Start" />
        <span>Start</span>
      </Button>
    </div>
  )
}
