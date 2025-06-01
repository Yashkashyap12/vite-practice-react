import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Props from "./components/Props";
import Condition from "./components/Condition";
import MuiModal from "./components/MuiModal";
import FormTable from "./components/FormTable";
import CheckBoxes from "./components/CheckBoxes";
import DigitalClock from "./components/DigitalClock";
import Nested from "./components/Nested";
import Student from "./components/Student";
import Department from "./components/Department";
import Detail from "./components/Detail";
import FormValid from "./components/FormValid";
import ApiCall from "./components/ApiCall";
import UserAdd from "./components/UserAdd";
import EditUser from "./components/EditUser";
import AxiosCall from "./components/axios/AxiosCall";
import NotFoundPage from "./components/NotFoundPage";

const data = {
  title: "Coming from props",
  name: "Yash",
  age: 12,
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<Props data={data} />} />
        <Route path="/conditional" element={<Condition />} />
        <Route path="/modal" element={<MuiModal />} />
        <Route path="/table" element={<FormTable />} />
        <Route path="/checkbox" element={<CheckBoxes />} />
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/form" element={<FormValid />} />
        <Route path="/axios" element={<AxiosCall />} />
        <Route path="/nested" element={<Nested />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/api" element={<ApiCall />} />
        <Route path="/adduser" element={<UserAdd />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
