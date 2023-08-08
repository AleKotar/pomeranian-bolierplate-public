import { Button } from '../Button/button';

export const SelectButtons = (props) => {
  const { options } = props;
  return (
    <div>
      {options.map((element) => (
        <Button key={element.value} isActive={element.isActive}>
          {element.label}
        </Button>
      ))}
    </div>
  );
};
