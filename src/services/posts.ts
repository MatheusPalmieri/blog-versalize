import { Post } from '@/interfaces/posts';
import api from './api';

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get('/posts');

  return data.sort(() => Math.random() - 0.5);
}

export async function getPostsByUser(id: number): Promise<Post[]> {
  const { data } = await api.get(`/posts?userId=${id.toString()}`);

  return data;
}
