import { Post } from '@/interfaces/posts';
import { CardPost } from '../CardPost';

interface PostsProps {
  posts: Post[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
};
