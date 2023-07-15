import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmployeeComponent from "../components/EmployeeComponent";

const Employee = () => {
  return (
    <div>
      <Header></Header>
      <EmployeeComponent></EmployeeComponent>
      <Footer></Footer>
    </div>
  );
};

export default Employee;
