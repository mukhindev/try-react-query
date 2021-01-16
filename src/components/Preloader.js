import './Preloader.css';

const Preloader = ({ className = '' }) => {
  const mix = !!className ? ` ${className}` : '';

  return (
    <div className={'preloader w-5 h-5 text-blue-500' + mix} />
  );
};

export default Preloader;
