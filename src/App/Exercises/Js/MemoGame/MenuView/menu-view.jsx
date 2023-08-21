import { Menu } from '../Menu/menu';
import { SelectButtons } from '../SelectButtons/select-buttons.jsx';
import { Button } from '../Button/button';
export const MenuView = ({ setIsGameStarted, setBoardSize, setTime }) => {
  const handleStartClick = () => {
    setIsGameStarted(true);
    setTime(60);
  };

  return (
    <div>
      <Menu label="Liczba Elementów">
        <SelectButtons
          setValue={setBoardSize}
          options={[
            { value: 1, label: '9 elementow', isActive: true },
            { value: 2, label: '16 elementow', isActive: false },
            { value: 3, label: '20 elementow', isActive: false },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={handleStartClick}>start</Button>
      </Menu>
    </div>
  );
};
