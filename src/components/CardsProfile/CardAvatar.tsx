'use client';

import styles from './style.module.css';
import { Avatar } from '../Avatar/Avatar';

interface CardProps {
  id: number;
  name: string;
  username: string;
}

export const CardAvatar = ({ id, name, username }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.circle}>
        <Avatar userId={id} />
      </div>

      <div className={styles.text}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.username}>@{username}</h3>
      </div>
    </div>
  );
};
