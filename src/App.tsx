import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useLocation, useParams } from 'react-router-dom';
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ItemModuleComponent} from './components/ItemModuleComponent';
import {SupplierModuleComponent} from './components/SupplierModuleComponent';
import { PrintComponent } from './components/PrintComponent';
import { NewItemForm } from './components/NewItemForm';



export const App = () => {
  return (

    <div>
      <Router>

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>Toolroom Management System</Link>
          
         
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#contents">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='contents'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  {/* <Link to="/" className='nav-link '>Home</Link> */}
                  <NavLink to="/" className={
                   ({ isActive }) => "nav-link" + (isActive ? " active" : "")
                  }>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  {/* <Link to="/items" className='nav-link'>Items</Link> */}
                  <NavLink to="/items" className={
                   ({ isActive }) => "nav-link" + (isActive ? " active" : "")
                  }>
                    Items
                  </NavLink>
                </li>
                <li className='nav-item'>
                  {/* <Link to="/suppliers" className='nav-link'>Suppliers</Link> */}
                  <NavLink to="/suppliers" className={
                   ({ isActive }) => "nav-link" + (isActive ? " active" : "")
                  }>
                    Suppliers
                  </NavLink>
                </li>
                <li className='nav-item'>
                  {/* <Link to="/about" className='nav-link'>About</Link> */}
                  <NavLink to="/about" className={
                   ({ isActive }) => "nav-link" + (isActive ? " active" : "")
                  }>
                    About
                  </NavLink>
                </li>
              </ul>
            </div>           

          </div>
        </nav>
      
        <div className='container mt-3'>
          <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/items" element={<ItemModuleComponent />} />
              <Route path="/suppliers" element={<SupplierModuleComponent />} />
              <Route path="/print/:itemCode" element={<PrintWrapper/>} />
            
          </Routes>
        </div>
      </Router>

      
    </div>
  );
}
const PrintWrapper = () => {

  const { itemCode } = useParams<{ itemCode: string }>();
  
  if (!itemCode) {
    return <div>Item Code not found.</div>; // In case  itemCode is undefined
  }

  return <PrintComponent barcode={itemCode} />;
};



