import './button.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-mg ${isActive ? 'btn-mg-active' : ''}`}
    >
      {children}
    </button>
  );
};
