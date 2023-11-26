import { Comment } from '@/interfaces/comments';
import api from './api';

export async function getComments(id: string | number): Promise<Comment[]> {
  const { data } = await api.get(`/posts/${String(id)}/comments`);
  return data;
}
