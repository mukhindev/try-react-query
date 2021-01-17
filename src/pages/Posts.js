import { Link } from 'react-router-dom';
import { useFetchPosts } from '../hooks/posts';
import Preloader from '../components/Preloader';
import Post from '../components/Post';

const Posts = () => {
  const { data = [], isLoading } = useFetchPosts();

  return (
    <div className="posts container mx-auto p-8">
      <div className="posts__title-container flex items-center mb-8">
        <h2 className="posts__title text-4xl font-extrabold">Posts</h2>
        {isLoading && <Preloader className="ml-6" />}
        <Link
          className={[
            'posts__button-new-post',
            'text-white',
            'hover:bg-blue-700',
            'bg-blue-500',
            'rounded-md',
            'shadow-xl',
            'px-4',
            'py-2',
            'transition',
            'ml-auto',
          ].join(' ')}
          to="/posts/new"
        >
          + New post
        </Link>
      </div>
      <section
        className="posts__grid
        grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        { data.map(({ id, title, body }) => (
          <Link
            className="flex"
            to={`/posts/${id}`}
            key={ id }
          >
            <Post
              id={ id }
              title={ title }
              body={ body }
            />
          </Link>
        )) }
      </section>
    </div>
  );
};

export default Posts;
