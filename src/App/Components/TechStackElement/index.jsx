import './styles.css';

export const TechStackElement = (prop) => {
  return (
    <div className="tech-stack-element-whole">
      <img className="tech-stack-element-logo" src={prop.src} alt="logo" />
      <h2 className="tech-stack-element-title">{prop.title}</h2>
    </div>
  );
};
