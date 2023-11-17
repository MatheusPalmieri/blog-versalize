import { Post } from '@/interfaces/posts';
import { CardPost } from '../CardPost';
import styles from './style.module.css';

interface PostsProps {
  posts: Post[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <div className={`container ${styles.container_posts}`}>
      {posts.map((post: Post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
};
