import { useEffect, useState } from 'react';
import './styles.css';

export const Exercise = () => {
  const [hours, setHours] = useState['--'];
  const [minutes, setMinutes] = useState['--'];
  const [seconds, setSeconds] = useState['--'];

  function formatTime(time) {
    const formatedTime = time < 10 ? '0' + time : time;

    return formatedTime;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = formatTime(currentDate.getHours());
      const currentMinute = formatTime(currentDate.getMinutes());
      const currentSecond = formatTime(currentDate.getSeconds());
      setHours(currentHour);
      setMinutes(currentMinute);
      setSeconds(currentSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date();
  // const hours = currentDate.getHours();
  // const minutes = currentDate.getMinutes();
  // const seconds = current.getSeconds();

  return (
    <div>
      <p>
        Current time: {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};
