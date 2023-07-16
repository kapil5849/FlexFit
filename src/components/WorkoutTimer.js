import React, { useState, useEffect } from 'react';

// Workout Timer Component
const WorkoutTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (isActive) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const getAmPm = () => {
    const hours = currentTime.getHours();
    return hours >= 12 ? 'PM' : 'AM';
  };

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2>Workout Timer</h2>
      <div style={{ marginBottom: '10px' }}>
        <p>
          {formatTime(currentTime.getHours())}:{formatTime(currentTime.getMinutes())}:{formatTime(currentTime.getSeconds())} {getAmPm()}
        </p>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <p>Seconds: {seconds}</p>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={handleStartStop}
          style={{
            padding: '8px 16px',
            backgroundColor: isActive ? '#DC3545' : '#007BFF',
            color: '#FFF',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6C757D',
            color: '#FFF',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <WorkoutTimer />
    </div>
  );
}
