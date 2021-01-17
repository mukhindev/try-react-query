import { Link, useParams } from 'react-router-dom';
import { useFetchPostById } from '../hooks/posts';
import Preloader from '../components/Preloader';
import Post from '../components/Post';

const PostById = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchPostById(id);

  return (
    <div className="post-id container mx-auto p-8">
      <div className="post-id__title-container flex items-center mb-8">
        <h2 className="post-id__title text-4xl font-extrabold">Post by ID {id}</h2>
        {isLoading && <Preloader className="ml-6" />}
      </div>
      <section
        className="post-id__section"
      >
        <Post
          className="mb-8"
          id={ id }
          title={ data?.title }
          body={ data?.body }
        />
        <Link className="text-blue-700 mt-8" to="/posts">← Назад</Link>
      </section>
    </div>
  );
};

export default PostById;
