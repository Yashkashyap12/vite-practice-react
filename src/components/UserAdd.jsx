import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserAdd = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");

  const handleName = (eve) => {
    setName(eve.target.value);
  };

  const handlePlace = (eve) => {
    setPlace(eve.target.value);
  };

  const handleImage = (eve) => {
    setImage(eve.target.value);
  };

  const createUser = async () => {
    const url = "http://localhost:3000/user";
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({ name, place , image}),
    });
    response = await response.json();
    if (response) {
      alert("Added User");
    }

    console.log(name, place);
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-sm border border-gray-400">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New User
        </h1>

        <input
          onChange={handleName}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
        />

        <input
          onChange={handlePlace}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Place"
        />

        <input
          onChange={handleImage}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Image Url"
        />

        <button
          onClick={createUser}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add User
        </button>
        <div className="mt-2 text-center">
          <NavLink to="/api" className="text-blue-800 text-center mt-2">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
