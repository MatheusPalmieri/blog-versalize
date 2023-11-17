import { Comment } from '@/interfaces/comments';
import api from './api';

export default async function getComments(id: number): Promise<Comment[]> {
  const { data } = await api.get(`/posts/${id.toString()}/comments`);
  return data;
}
