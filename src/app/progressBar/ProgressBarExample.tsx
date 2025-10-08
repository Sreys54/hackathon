import React, { useState } from 'react';
import InputPercentage from './InputPercentage';
import styles from './ProgressBarExample.module.css';

export default function ProgressBarExample() {
  const [percent, setPercent] = useState(10);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress bar</h1>

      <div className={styles.track} aria-hidden>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>

      <div style={{ marginTop: 12 }}>
        <InputPercentage value={percent} onChange={(n) => setPercent(n)} />
      </div>

      <div style={{ marginTop: 8, fontSize: 16 }}>Current: {percent}%</div>
    </div>
  );
}
