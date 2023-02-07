import { Button } from 'react95';

import styles from './Close.module.css';

export function Close() {
  return (
    <div className={styles.close}>
      <Button disabled>&times;</Button>
    </div>
  );
}
