import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import './NavBar.css';
import Product from "../Product/Product";
import Stock from "../Stock/Stock";
import Customer from "../Customer/Customer";
import Suppliers from "../Customer/Suppliers";
import Employee from "../Employee/Employee";
import Pos from "../Point-of-sale/Pos";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Login from "../Start/Login";
import SignUp from "../Start/SignUp";



const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Dashboard />
                </div>
              </div>
            </>
          }
        />
        <Route path="/products"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Product />
                </div>
              </div>
            </>
          }
        />
         <Route path="/customers"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>                

                  <Customer />
                </div>
              </div>
            </>
          }
        />
        <Route path="/suppliers"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Suppliers />
                </div>
              </div>
            </>
          }
        />
                   <Route path="/stock"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Stock />
                </div>
              </div>
            </>
          }
        /> 
           <Route path="/employee"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Employee />
                </div>
              </div>
            </>
          }
        />  

        <Route path="/point of sale"
          element={
            <>
              <Navbar toggle={toggle} />
              <div className="wrapper">
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'shifted' : ''}`}>
                  <Pos />
                </div>
              </div>
            </>
          }
        />  

      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
