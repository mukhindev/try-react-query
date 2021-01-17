import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCreatePost } from '../hooks/posts';
import Preloader from '../components/Preloader';

const PostNew = () => {
  const formRef = useRef(null);

  const [isValid, setIsValid] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { setPost, isLoading, isSuccess } = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost({ title, body });
  };

  const handleValid = (e) => {
    const validationMap = Array
      .from(formRef.current.elements)
      .map((el) => el.validity.valid);
    setIsValid(validationMap.every((el) => el));
  };

  const formElement = (
    <form
      className="grid gap-4 mb-8"
      onSubmit={handleSubmit}
      onChange={handleValid}
      ref={formRef}
      noValidate
    >
      <input
        className={[
          'post-new-title',
          'h-10',
          'w-full',
          'px-4',
          'border',
          'border-gray-300',
          'focus:border-blue-700',
          'rounded-md',
          'text-gray-700',
          'bg-white',
          'focus:outline-none',
          'focus:ring-4',
          'focus:ring-blue-300',
          'transition',
        ].join(' ')}
        placeholder="Title"
        required
        onChange={ (e) => setTitle(e.target.value) }
      />
      <textarea
        className={[
          'post-new-title',
          'h-10',
          'w-full',
          'h-64',
          'px-4',
          'py-2',
          'border',
          'border-gray-300',
          'focus:border-blue-700',
          'rounded-md',
          'text-gray-700',
          'bg-white',
          'focus:outline-none',
          'focus:ring-4',
          'focus:ring-blue-300',
          'transition',
        ].join(' ')}
        placeholder="Body"
        required
        onChange={ (e) => setBody(e.target.value) }
      />
      <button
        disabled={ !isValid }
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
          'disabled:bg-gray-300',
          'disabled:pointer-events-none',
          'focus:outline-none',
        ].join(' ')}
        to="/posts/new"
      >
        Submit
      </button>
    </form>
  );

  const successElement = (
    <div
      className="bg-yellow-300 rounded-md shadow-xl p-4 mb-8"
    >
      К сожалению, тестовый REST API JSONPlaceholder на самом деле
      не добавляет ресурс на сервер, а лишь возвращает ответ.
      Если вы это видите, сервер ответил — всё в порядке.
      Поверим на слово =)
    </div>
  );

  return (
    <div className="post-new container mx-auto p-8">
      <div className="post-new__title-container flex items-center mb-8">
        <h2 className="post-new__title text-4xl font-extrabold">New post</h2>
        {isLoading && <Preloader className="ml-6" />}
      </div>
      <section
        className="post-new__section"
      >
        {!isSuccess
          ? formElement
          : successElement
        }
        <Link className="text-blue-700 mt-8" to="/posts">← Назад</Link>
      </section>
    </div>
  );
};

export default PostNew;
