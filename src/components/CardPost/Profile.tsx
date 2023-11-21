'use client';

import { User } from '@/interfaces/users';
import styles from './style.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useRouter } from 'next/navigation';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const router = useRouter();
  const { id, name, username } = user;

  return (
    <div
      className={styles.profile}
      onClick={() => router.push(`/perfil/${id}?utm_source=feed`)}
    >
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
