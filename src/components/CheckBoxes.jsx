import React, { useState } from "react";

const CheckBoxes = () => {
  const [select, setSelect] = useState([]);
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('kanpur');

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleGender = (eve) => {
    setGender(eve.target.value)
  }

  const handleSelect = (event) => {
    setSelect(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSelect([...select, event.target.value]);
    } else {
      setSelect([...select.filter((item) => item !== event.target.value)]);
    }
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Checkbox Practice</h1>
        <h1 className="text-2xl mt-5 text-center text-gray-700">Select Practice</h1>
        <div className="justify-center items-center flex mt-5 gap-6 text-xl">
          <input onChange={handleSelect} type="checkbox" id="c#" value="c#" className="accent-blue-600 scale-125" />
          <label htmlFor="c#" className="text-gray-600">C#</label>
          <input
            onChange={handleSelect}
            type="checkbox"
            id="react"
            value="react"
            className="accent-blue-600 scale-125"
          />
          <label htmlFor="react" className="text-gray-600">React</label>
          <input onChange={handleSelect} type="checkbox" id="next" value="next" className="accent-blue-600 scale-125" />
          <label htmlFor="next" className="text-gray-600">Next</label>
        </div>
        <h2 className="text-lg text-center mt-4 text-blue-700 font-medium">{select.toString()}</h2>
      </div>

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Radio Button Handle Practice
        </h1>
        <div className="justify-center items-center flex mt-5 gap-6 text-xl">
          <input onChange={handleGender} checked={gender === "male"} type="radio" id="male" name="gender" value="male" className="accent-pink-500 scale-125" />
          <label htmlFor="male" className="text-gray-600">Male</label>
          <input onChange={handleGender} checked={gender === "female"} type="radio" id="female" name="gender" value="female" className="accent-pink-500 scale-125" />
          <label htmlFor="female" className="text-gray-600">Female</label>
        </div>
        <h2 className="text-xl mt-4 text-center text-pink-600 font-medium">Selected Gender : {gender}</h2>
      </div>

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Select Dropdown Handle Practice
        </h1>
        <div className="justify-center items-center flex mt-5 gap-2 text-xl">
          <select onChange={handleCity} defaultValue={"cnb"} className="border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Kanpur">Kanpur</option>
          </select>
        </div>
        <h2 className="text-center text-lg mt-5 text-green-600 font-medium">Selected City : {city}</h2>
      </div>
    </>
  );
};

export default CheckBoxes;
