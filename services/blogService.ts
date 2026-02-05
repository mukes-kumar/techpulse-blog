
import { ApiResponse } from '../types';

const API_URL = 'https://sample-api-black.vercel.app/api/v1/blogs';

export const fetchBlogs = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};
