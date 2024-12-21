import axiosInstance from '@/api/axiosInstance';
import API_ENDPOINTS from '@/config/apis';
import { User } from '@/types';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const createUser = async (userData: Record<string, string | number>): Promise<User[]> => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.USERS, userData);
    return response.data;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
};
