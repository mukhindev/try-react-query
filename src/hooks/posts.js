import { useQuery } from 'react-query';

const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  } catch (error) {
    throw Error;
  }
};

export const useFetchPosts = () => {
  const { data, isLoading } = useQuery('posts', fetchPosts);
  return { data, isLoading };
};
