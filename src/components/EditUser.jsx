import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:3000/user/" + id;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setImage(response.image);
    setName(response.name);
    setPlace(response.place);
  };

  const handleEdit = async()=>{
    let response = await fetch(url,{
        method:"PUT",
        body:JSON.stringify({name,place,image})
    });
    response = await response.json();
    if(response){
        alert("Edit Succefully")
        navigate("/api")
    }
    console.log(name,place,url)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-400">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Edit User Details
      </h2>

      <div className="flex flex-col gap-4">
        <input
        onChange={(eve)=>setName(event.target.value)}
          type="text"
          value={name}
          placeholder="User Name"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
        onChange={(eve)=>setPlace(event.target.value)}
          type="text"
          value={place}
          placeholder="Place"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
        onChange={(eve)=>setImage(event.target.value)}
          type="text"
          value={image}
          placeholder="Iamge"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button onClick={handleEdit}  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400">
          <NavLink to={"/api"}>Back</NavLink>
        </button>
      </div>
    </div>
  );
};

export default EditUser;
