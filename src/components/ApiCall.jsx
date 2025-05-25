import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const ApiCall = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:3000/user";

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      let response = await fetch(url);
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result) {
        alert("Record Deleted");
        getUserData();
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-center mt-6 text-gray-800">
        API Calling In ReactJS
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 px-10">
        {!loading ? (
          userData.map((user) => (
            <div
              key={user.id}
              className="relative border grid grid-cols-2 gap-5 border-gray-300 shadow-lg rounded-xl p-5 w-full max-w-sm bg-white"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={
                    user.image ||
                    "https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-15.webp"
                  }
                  alt={user.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>

              <ul className="space-y-2 text-gray-700 text-lg">
                <li>
                  <span className="font-semibold text-blue-600">Id:</span>{" "}
                  {user?.id}
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Name:</span>{" "}
                  {user?.name}
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Place:</span>{" "}
                  {user?.place}
                </li>
              </ul>
              <div className="flex items-center justify-around gap-10 z-30 rounded">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded"
                >
                  <MdDelete className="cursor-pointer" size={24} />
                </button>
                <button className="text-blue-500 hover:text-blue-700 p-1 rounded">
                  <IoMdEye className="cursor-pointer" size={24} />
                </button>
                <button className="text-purple-500 hover:text-purple-700 p-1 rounded">
                  <MdEdit className="cursor-pointer" size={24} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <Skeleton
            variant="rectangular"
            width={350}
            height={120}
            className="rounded-lg"
          />
        )}
      </div>

      <div className="text-center space-x-4 mt-10">
        <NavLink
          to="/adduser"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add User
        </NavLink>
        <NavLink
          to="/"
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Go Back
        </NavLink>
      </div>
    </>
  );
};

export default ApiCall;
