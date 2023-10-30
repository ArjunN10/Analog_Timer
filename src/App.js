import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getRotationDegrees = (time, isHour) => {
    const totalDegrees = isHour ? 360 : 360 / 60;
    const current = isHour ? time.getHours() : time.getMinutes();
    const degrees = (current % (isHour ? 12 : 60)) * totalDegrees;
    return degrees;
  };

  const hourDegrees = getRotationDegrees(time, true);
  const minuteDegrees = getRotationDegrees(time, false);
  const secondDegrees = getRotationDegrees(time, false);

  return (
    <div className="App">

      <h3 className='title'>ANALOG CLOCK</h3>
      <div className="clock">

        <div className="number one">1</div>
        <div className="number two">2</div>
        <div className="number three">3</div>
        <div className="number four">4</div>
        <div className="number five">5</div>
        <div className="number six">6</div>
        <div className="number seven">7</div>
        <div className="number eight">8</div>
        <div className="number nine">9</div>
        <div className="number ten">10</div>
        <div className="number eleven">11</div>
        <div className="number twelve">12</div>

        <div className="hand hour" style={{ transform: `rotate(${hourDegrees}deg)` }} />
        <div className="hand minute" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
        <div className="hand second" style={{ transform: `rotate(${secondDegrees}deg)` }} />
        <div className="center" />
      </div>
    </div>
  );
};

export default App;
