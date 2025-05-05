import React from "react";

const Props = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Props Passing Practice</h1>
      
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Title: {data.title}</h2>
        <h2 className="text-xl font-medium text-gray-600 mt-4">Name: {data.name}</h2>
        <h2 className="text-xl font-medium text-gray-600 mt-4">Age: {data.age}</h2>
      </div>
    </div>
  );
};

export default Props;
