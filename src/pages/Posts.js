import { useFetchPosts } from '../hooks/posts';
import Preloader from '../components/Preloader';
import Post from '../components/Post';

const Posts = (props) => {
  const { data, isLoading } = useFetchPosts();

  if (isLoading) {
    return (
      <Preloader />
    );
  }

  return (
    <div className="postscontainer mx-auto p-8">
      <h2 className="posts__title text-4xl font-extrabold mb-8">Posts</h2>
      <section
        className="posts__grid
        grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        { data?.map(({ id, title, body }) => (
          <Post
            key= { id }
            id={ id }
            title={ title }
            body={ body }
          />
        )) }
      </section>
    </div>
  );
};

export default Posts;
