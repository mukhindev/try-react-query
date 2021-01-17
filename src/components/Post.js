const Post = (props) => {
  const {
    id,
    title,
    body,
    className = '',
  } = props;

  const mix = !!className ? ` ${className}` : '';

  return (
    <div
      className={[
        'post',
        'hover:bg-gray-50',
        'bg-white',
        'rounded-md',
        'shadow-xl',
        'p-4',
        'transition',
        mix,
      ].join(' ')}
    >
      <h3
        className="post__title
        text-xl text-blue-700 mb-4 uppercase"
      >
        { title }
      </h3>
      <p
        className="post__body"
      >
        { body }
        </p>
    </div>
  );
};

export default Post;
