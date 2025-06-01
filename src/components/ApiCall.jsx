import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const ApiCall = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

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

  const handleOpen = (imageurl) => {
    setImage(imageurl);
    setOpen(true);
  };

  const EditUser = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 text-gray-800">
        API Calling in ReactJS
      </h1>

      <div className="mt-12 flex flex-wrap justify-center gap-8 px-6">
        {!loading ? (
          userData.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-5 w-full max-w-sm transition hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={
                    user.image ||
                    "https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-15.webp"
                  }
                  alt={user.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              <ul className="text-gray-700 text-base space-y-1 mb-4">
                <li>
                  <span className="font-semibold text-blue-600">ID:</span>{" "}
                  {user.id}
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Name:</span>{" "}
                  {user.name}
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Place:</span>{" "}
                  {user.place}
                </li>
              </ul>

              <div className="flex justify-between">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-600 hover:bg-red-100 p-2 rounded-full transition"
                  title="Delete"
                >
                  <MdDelete size={22} />
                </button>
                <button
                  onClick={() => handleOpen(user.image)}
                  className="text-blue-600 hover:bg-blue-100 p-2 rounded-full transition"
                  title="View"
                >
                  <IoMdEye size={22} />
                </button>
                <button
                  onClick={() => EditUser(user.id)}
                  className="text-yellow-600 hover:bg-yellow-100 p-2 rounded-full transition"
                  title="Edit"
                >
                  <MdEdit size={22} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <Skeleton
            variant="rectangular"
            width={350}
            height={180}
            className="rounded-lg"
          />
        )}
      </div>

      <div className="text-center space-x-4 mt-12">
        <NavLink
          to="/adduser"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add User
        </NavLink>
        <NavLink
          to="/"
          className="inline-block bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Go Back
        </NavLink>
      </div>

      {open && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white border p-6 rounded-xl shadow-xl max-w-sm">
            <img
              src={
                image ||
                "https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-15.webp"
              }
              alt="Preview"
              className="rounded-lg max-h-[60vh] object-cover"
            />
            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-1 border rounded text-red-600 hover:text-white hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApiCall;
