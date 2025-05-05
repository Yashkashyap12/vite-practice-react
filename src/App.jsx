import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Props from "./components/Props";
import Condition from "./components/Condition";
import MuiModal from "./components/MuiModal";
import FormTable from "./components/FormTable"
import CheckBoxes from "./components/CheckBoxes";
import DigitalClock from "./components/DigitalClock";

const data = {
  title:"Coming from props",
  name:"Yash",
  age:12,
}

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
      </Routes>
    </>
  );
};

export default App;
