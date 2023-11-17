import { User } from '@/interfaces/users';
import api from './api';

export default async function getUser(id: number): Promise<User> {
  const { data } = await api.get(`/users/${id.toString()}`);
  return data;
}
