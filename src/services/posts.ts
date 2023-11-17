import { Post } from '@/interfaces/posts';
import api from './api';

export default async function getPosts(): Promise<Post[]> {
  const { data } = await api.get('/posts');

  return data.sort(() => Math.random() - 0.5);
}
