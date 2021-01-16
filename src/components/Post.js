const Post = ({ id, title, body }) => (
  <div
    className="post
    bg-white rounded-md shadow-xl p-4"
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

export default Post;