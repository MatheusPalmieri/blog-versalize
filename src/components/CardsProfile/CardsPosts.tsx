import { Post } from '@/interfaces/posts';
import { CardPost } from './CardPost';
import styles from './style.module.css';

interface CardsPostsProps {
  posts: Post[];
}

export const CardsPosts = ({ posts }: CardsPostsProps) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
};
