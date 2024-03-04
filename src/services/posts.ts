import { Post } from '@/interfaces/posts';
import api from './api';

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get('/posts');
  return data;
}

export async function getPost(id: string | number): Promise<Post> {
  const { data } = await api.get(`/posts/${String(id)}`);
  return data;
}

export async function getPostsByUser(id: string | number): Promise<Post[]> {
  const { data } = await api.get(`/posts?userId=${String(id)}`);
  return data;
}
