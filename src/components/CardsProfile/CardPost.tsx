'use client';

import styles from './style.module.css';
import { GrAchievement } from 'react-icons/gr';
import { GiAchievement } from 'react-icons/gi';
import { RiMedal2Line } from 'react-icons/ri';
import { FaMedal, FaRegStar } from 'react-icons/fa';
import { IoDiamondSharp } from 'react-icons/io5';
import { TiHeartOutline } from 'react-icons/ti';
import { useRouter } from 'next/navigation';
import { Post } from '@/interfaces/posts';

interface CardPostProps {
  post: Post;
}

const Icon = () => {
  const icons = [
    GrAchievement,
    GiAchievement,
    RiMedal2Line,
    FaRegStar,
    FaMedal,
    IoDiamondSharp,
    TiHeartOutline,
  ];
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)];

  return <RandomIcon />;
};

export const CardPost = ({ post }: CardPostProps) => {
  const router = useRouter();

  return (
    <div className={styles.card_post}>
      <div className={styles.profile}>
        <div className={styles.icon}>
          <Icon />
        </div>

        <p>Post #00{post.id.toString().padStart(2)}</p>
      </div>

      <div
        className={styles.container}
        onClick={() => router.push(`/${post.id}`)}
      >
        <h4 className={styles.title}>{post.title}</h4>
        <p className={styles.body}>{post.body}</p>
      </div>
    </div>
  );
};
