import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';
import { Post } from '@/interfaces/posts';
import { getPosts } from '@/services/posts';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming.',
};

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <main>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name='description' content={metadata.description?.toString()} />
      </Head>

      <Header />

      {posts ? <Posts posts={posts} /> : 'Carregando Posts'}
    </main>
  );
}
