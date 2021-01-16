import { useFetchPosts } from '../../hooks/posts';
import Preloader from '../../components/Preloader/Preloader';
import Post from '../../components/Post/Post';

const Posts = (props) => {
  const { data, isLoading } = useFetchPosts();

  if (isLoading) {
    return (
      <Preloader />
    );
  }

  return (
    <div className="">
      <h2>Posts</h2>
      { data?.map(({ id, title, body }) => (
        <Post
          key= { id }
          id={ id }
          title={ title }
          body={ body }
        />
      )) }
    </div>
  );
};

export default Posts;
