import React from 'react';
import styles from './InputPercentage.module.css';

type Props = {
  value: number;
  onChange: (n: number) => void;
};

// Very simple number input for learners
export default function InputPercentage({ value, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="percentage-input">Input Percentage:</label>
      <input
        id="percentage-input"
        className={styles.input}
        type="number"
        min={0}
        max={100}
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value || 0);
          if (Number.isNaN(n)) return;
          onChange(Math.max(0, Math.min(100, Math.floor(n))));
        }}
      />
    </div>
  );
}
