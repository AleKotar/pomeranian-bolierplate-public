import './styles.css';

export const Menu = ({ label, children }) => {
  return (
    <div className="mg-menu">
      <h3>{label}</h3>
      {children}
    </div>
  );
};
