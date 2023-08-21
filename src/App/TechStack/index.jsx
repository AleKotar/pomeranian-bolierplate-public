import './styles.css';
import { TechStackElement } from '../Components/TechStackElement';
import HtmlIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/html.svg';
import CssIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/css.svg';
import TypeScrtiptIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/ts.svg';
import JsIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/js.svg';
import ReactIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/react.svg';
import GitHubIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/githuub.svg';
import BitBucketIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/bitbucket.svg';
import JestIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/jest.svg';
import FireBaseIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/firebase.svg';
import ReduxIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/redux.png';
import GitIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/git.svg';
import VsCodeIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/vscode-alt 1.png';
import DiscordIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/discord-icon-svgrepo-com 3.png';
import JiraIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/jira 1.png';
import RoadMineIcon from '/root/projects/pomeranian-bolierplate-public/src/App/Images/tech-stack/redmine.png';

export function TechStack() {
  const TechStackInfo = [
    {
      id: 1,
      title: 'html',
      src: HtmlIcon,
    },
    {
      id: 2,
      title: 'css',
      src: CssIcon,
    },
    {
      id: 3,
      title: 'typescript',
      src: TypeScrtiptIcon,
    },
    {
      id: 4,
      title: 'javascript',
      src: JsIcon,
    },
    {
      id: 5,
      title: 'react',
      src: ReactIcon,
    },
    {
      id: 6,
      title: 'github',
      src: GitHubIcon,
    },
    {
      id: 7,
      title: 'bitbucket',
      src: BitBucketIcon,
    },
    {
      id: 8,
      title: 'jest',
      src: JestIcon,
    },
    {
      id: 9,
      title: 'firebase',
      src: FireBaseIcon,
    },
    {
      id: 10,
      title: 'redux',
      src: ReduxIcon,
    },
    {
      id: 11,
      title: 'git',
      src: GitIcon,
    },
    {
      id: 12,
      title: 'vscode',
      src: VsCodeIcon,
    },
    {
      id: 13,
      title: 'discord',
      src: DiscordIcon,
    },
    {
      id: 14,
      title: 'jira',
      src: JiraIcon,
    },
    {
      id: 15,
      title: 'readmine',
      src: RoadMineIcon,
    },
  ];
  return (
    <div className="tech-stack-whole">
      <h2>Tech Stack</h2>
      <h3>
        Poniżej znajdziesz tech-stack oraz narzędzia, których nauczyłem się
        podczas kursu
      </h3>
      <p></p>
      <div className="tech-stack-grid">
        {TechStackInfo.map((info) => {
          return <TechStackElement title={info.title} src={info.src} />;
        })}
      </div>
    </div>
  );
}
