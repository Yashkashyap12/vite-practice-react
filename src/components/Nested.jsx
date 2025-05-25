import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nested = () => {
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-2xl mb-5">Nested Routes</h1>
        <NavLink to="/">
          <h2 className="underline text-blue-900 cursor-pointer mb-2">
            Go Back to Home
          </h2>
        </NavLink>
        <div className="space-x-5 text-blue-500">
          <NavLink to="student">Student</NavLink>
          <NavLink to="department">Department</NavLink>
          <NavLink to="detail">Detail</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Nested;
