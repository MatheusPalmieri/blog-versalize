'use client';

import { User } from '@/interfaces/users';
import styles from './style.module.css';
import { Avatar } from './Avatar';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const { id, name, username } = user;

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar userId={id} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.username}>@{username}</p>
      </div>
    </div>
  );
};
