import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const calculateCalories = () => {
    // Perform API call or calculation to get estimated calorie burn based on exercise and duration
    // For simplicity, let's assume a fixed calorie burn per minute for each exercise
    const calorieBurnPerMinute = {
      running: 10,
      cycling: 8,
      swimming: 12,
    };

    // Check if the selected exercise is valid
    if (exercise && calorieBurnPerMinute.hasOwnProperty(exercise)) {
      // Calculate estimated calorie burn based on duration
      const calorieBurn = calorieBurnPerMinute[exercise] * parseFloat(duration);
      setCalories(calorieBurn.toFixed(2));
    } else {
      // Invalid exercise selected, clear the calories state
      setCalories('');
    }
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
      <h2>Calorie Calculator</h2>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Exercise:</label>
        <select
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          style={{
            padding: '5px',
            width: '150px',
            border: '1px solid #000',
            fontWeight: 'bold',
          }}
        >
          <option value="">Select exercise</option>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="swimming">Swimming</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Duration (minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{
            padding: '5px',
            width: '100px',
            border: '1px solid #000',
            fontWeight: 'bold',
          }}
        />
      </div>
      <button
        onClick={calculateCalories}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Calculate Calories
      </button>
      {calories && (
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
          Estimated Calorie Burn: {calories} calories
        </p>
      )}
    </div>
  );
};

export default CalorieCalculator;
