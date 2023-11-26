import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';
import { Post } from '@/interfaces/posts';
import { getPosts } from '@/services/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming.',
};

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <main>
      <Header />

      <Posts posts={posts} />
    </main>
  );
}
