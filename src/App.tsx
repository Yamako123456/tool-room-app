import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { AboutComponent } from './components/AboutComponent';
import { ItemModuleComponent } from './components/ItemModuleComponent';
import { PrintComponent } from './components/PrintComponent';
import { NewItemForm } from './components/NewItemForm';
import { initialItems } from './data/InitialItems';
import { initialCribs } from './data/initialCribs';
import { initialEmps } from './data/initiahEmps';
import Hero from './components/Hero/Hero';


export const App = () => {
  
  const [emps, setEmps] = useState<EmpModel[]>(initialEmps);
  const [items, setItems] = useState<ItemModel[]>(initialItems);
  const [cribs, setCribs] = useState<CribModel[]>(initialCribs);
  
  return (

    <div>
      
      
      <Router>
        
        <MyNavbar />

        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<Hero items={items} setItems={setItems} cribs={cribs} />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/items" element={<ItemModuleComponent items={items} setItems={setItems} />} />
            <Route path="/print/:itemCode" element={<PrintWrapper />} />

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



