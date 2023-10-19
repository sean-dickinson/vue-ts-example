import { apiClient, responseBody } from './baseClient';

interface Post {
  userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getPostsForUser(userId: number) {
  return apiClient
    .get<Post[]>(`users/${userId}/posts`)
    .then(responseBody);
} 
