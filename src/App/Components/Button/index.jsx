import './styles.css';

const props = {
  text: 'Start',
};

const Button = ({ text }) => {
  <button className="btn-default">{props.text}</button>;
};

export default Button;
