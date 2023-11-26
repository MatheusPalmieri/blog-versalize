'use client';

import { useRouter } from 'next/navigation';
import styles from './style.module.css';

interface TextProps {
  id?: number;
  title: string;
  body: string;
}

export const Text = ({ id, title, body }: TextProps) => {
  const router = useRouter();

  return (
    <div
      className={styles.content}
      style={{ cursor: id ? 'pointer' : 'text' }}
      onClick={(e) => {
        if (!id) return null;
        e.stopPropagation();
        router.push(`/${String(id)}`);
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>

      {id && (
        <p id='details' className={styles.details}>
          Clique para ver mais detalhes.
        </p>
      )}
    </div>
  );
};
