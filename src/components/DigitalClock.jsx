import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Digital Clock</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium text-gray-700">Select Color:</label>
        <select
          onChange={handleChange}
          className="p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="gray">Gray</option>
        </select>
      </div>

      <div
        className="text-6xl font-mono font-semibold p-6 rounded-lg shadow-lg"
        style={{ color: color, backgroundColor: 'white' }}
      >
        {time}
      </div>
    </div>
  );
};

export default DigitalClock;
