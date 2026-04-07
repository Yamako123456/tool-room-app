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
import { initialBinss } from './data/initialBins';
import { initialCribs } from './data/initialCribs';
import { initialEmps } from './data/initiahEmps';
import Hero from './components/Hero/Hero';
import Bins from './components/Bins/Bins';
import AddBin from './components/Bins/AddBin/AddBin';
import { BinModel } from './models/BinsModel'; 

export const App = () => {

  const [emps, setEmps] = useState<EmpModel[]>(initialEmps);
  const [items, setItems] = useState<ItemModel[]>(initialItems);
  const [bins, setBins] = useState<BinModel[]>(initialBinss);
  const [cribs, setCribs] = useState<CribModel[]>(initialCribs);
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [searchResult, setSearchResult] = useState<ItemModel[]>([]); 
  const [binNumber, setBinNumber] = useState<string>("");
  const [isLookupOpen, setIsLookupOpen] = useState<boolean>(false);

  const handleAddBin = () => {
 
    const cribCode = cribs.length > 0 ? cribs[0].cribCode : "001";
    const itemCode = selectedItem?.code;
    const newBin = new BinModel(
      binNumber, 
      cribCode,
      itemCode,
      0,
    );
 
    console.log('newBin', newBin);
    setBins( prev => [...prev, newBin] );
  }

  return (

    <div>
      <Router>      
        <MyNavbar />

        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<Hero items={items} setItems={setItems} cribs={cribs} />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/items" element={<ItemModuleComponent items={items} setItems={setItems} />} />
            <Route path="/bins" element={<Bins cribs={cribs} items={items} bins={bins} setBins={setBins} binNumber={binNumber} selectedItem={selectedItem}/>} />
            
            <Route path="/print/:itemCode" element={<PrintWrapper />} />
            <Route path="/bins/add" element={<AddBin items={items} bins={bins} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setBinNumber={setBinNumber} handleAddBin={handleAddBin} isLookupOpen={isLookupOpen} setIsLookupOpen={setIsLookupOpen}  />} />

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



