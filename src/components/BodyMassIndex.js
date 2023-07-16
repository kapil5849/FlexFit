import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    // Convert weight from pounds to kilograms
    const weightInKg = parseFloat(weight) / 2.20462;

    // Convert height from inches to meters
    const heightInMeters = parseFloat(height) / 39.3701;

    // Calculate BMI
    const bmiResult = weightInKg / Math.pow(heightInMeters, 2);

    // Update the state with the calculated BMI
    setBmi(bmiResult.toFixed(2));
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
      <h2>BMI Calculator</h2>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Weight (in pounds):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{
            padding: '5px',
            width: '100px',
            border: '2px solid #999',
            borderRadius: '4px',
            fontWeight: 'bold',
            outline: 'none',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Height (in inches):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{
            padding: '5px',
            width: '100px',
            border: '2px solid #999',
            borderRadius: '4px',
            fontWeight: 'bold',
            outline: 'none',
          }}
        />
      </div>
      <button
        onClick={calculateBmi}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Calculate BMI
      </button>
      {bmi && (
        <p
          style={{
            marginTop: '10px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Your BMI: {bmi}
        </p>
      )}
    </div>
  );
};

export default BmiCalculator;
