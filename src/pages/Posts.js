import { useFetchPosts } from '../hooks/posts';
import Preloader from '../components/Preloader';
import Post from '../components/Post';

const Posts = (props) => {
  const { data = [], isLoading } = useFetchPosts();

  return (
    <div className="posts container mx-auto p-8">
      <div className="posts__title-container flex items-center mb-8">
        <h2 className="posts__title text-4xl font-extrabold">Posts</h2>
        {isLoading && <Preloader className="ml-6" />}
      </div>
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
