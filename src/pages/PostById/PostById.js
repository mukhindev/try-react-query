import { useParams } from 'react-router-dom';

const PostById = (props) => {
  const { id } = useParams();

  return (
    <div className="">
      <h2>Post ID: { id }</h2>
    </div>
  );
};

export default PostById;
