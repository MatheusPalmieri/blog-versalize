'use client';

import { useRouter } from 'next/navigation';
import styles from './style.module.css';

export const Logo = () => {
  const router = useRouter();

  return (
    <h1
      className={styles.title}
      onClick={(e) => {
        e.stopPropagation();
        router.push('/');
      }}
    >
      D'am
      <span className={styles.b}>b</span>
      <span className={styles.r}>r</span>z
    </h1>
  );
};
