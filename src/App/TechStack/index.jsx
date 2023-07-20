import './styles.css';
import { TechStackElement } from '../Components/TechStackElement';

export function TechStack() {
  const TechStackInfo = [
    {
      id: 1,
      title: 'html',
      src: require('/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/html.svg'),
    },
    {
      id: 2,
      title: 'html',
      src: '../Images/tech-stack/html.svg',
    },
    {
      id: 3,
      title: 'html',
      src: '../Images/tech-stack/html.svg',
    },
    {
      id: 4,
      title: 'html',
      src: '../Images/tech-stack/html.svg',
    },
  ];
  return (
    <div className="wrapper">
      <h2>Tech Stack</h2>
      <p></p>
      <div className="grid">
        {TechStackInfo.map((info) => {
          return <TechStackElement title={info.title} src={info.src} />;
        })}
      </div>
    </div>
  );
}
