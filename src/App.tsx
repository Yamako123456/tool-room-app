import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ItemModuleComponent} from './components/ItemModuleComponent';

export const App = () => {
  return (

    <div>
      <Router>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>Toolroom Management System</Link>
          </div>
          <button className='navbar-toggler' type='button'
                data-bs-toggle='collapse'
                data-bs-target='#contents'>
            <span className='navbar-toggler-icon'></span>  
          </button>
          <div className='collapse navbar-collapse' id='contents'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/items" className='nav-link'>Items</Link>
              </li>
              <li className='nav-item'>
                <Link to="/about" className='nav-link'>About</Link>
              </li>
            </ul>
          </div>
        </nav>
      
        <div className='container mt-3'>
          <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/items" element={<ItemModuleComponent />} />
          </Routes>
        </div>
      </Router>

      
    </div>
  );
}

