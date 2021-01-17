import { useQuery } from 'react-query';

const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  } catch (error) {
    throw Error;
  }
};

const fetchPostById = async (postId) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return res.json();
  } catch (error) {
    throw Error;
  }
};

export const useFetchPosts = () => {
  const { data, isLoading } = useQuery('posts', fetchPosts);
  return { data, isLoading };
};

export const useFetchPostById = (postId) => {
  const { data, isLoading } = useQuery(['posts', postId], () => fetchPostById(postId));
  return { data, isLoading };
};
