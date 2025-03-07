import './styles.css';
import background from './14-blue-light-leak.jpg';
import logo from './Original_Adidas_logo.svg.png';
import logoSvg from './Unreal_idle.svg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function Exercise() {
  return (
    <div>
      <img src={background} alt="Background"></img>
      <img src={logo} alt="Logo"></img>
      <img src={logoSvg} alt="Logo"></img>
      <RoundImage src={background} size="150px" />
      <RoundImage src={background} size="300px" />
    </div>
  );
}
