import { User } from '@/interfaces/users';
import api from './api';

export async function getUser(id: string | number): Promise<User> {
  const { data } = await api.get(`/users/${String(id)}`);
  return data;
}
