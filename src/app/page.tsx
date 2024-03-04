import { CardsLazy } from '@/components/CardsLazy';
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
  const loadedPosts = <Posts posts={posts.sort(() => Math.random() - 0.5)} />;

  return (
    <main>
      <Header />

      <CardsLazy posts={loadedPosts} />
    </main>
  );
}
