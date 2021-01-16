import './Preloader.css';

const Preloader = ({ className = '' }) => {
  const mix = !!className ? ` ${className}` : '';

  return (
    <div className={'preloader w-8 h-8 border-4 text-blue-500' + mix} />
  );
};

export default Preloader;
