import React, { useState } from 'react';

const Condition = () => {
  const [display, setDisplay] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = () => {
    setDisplay(!display);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Conditional Practice</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md text-center mb-10">
        <button
          onClick={handleChange}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Change Name
        </button>
        <div className="mt-4 text-2xl font-semibold text-gray-700">
          {display ? "Raadhe Raadhe" : "Hari Bol !"}
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md text-center">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={handleIncrement}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Decrement
          </button>
        </div>
        <h2 className="text-2xl text-gray-800">Value: {value}</h2>
      </div>
    </div>
  );
};

export default Condition;
