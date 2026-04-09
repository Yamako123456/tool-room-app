import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams, useNavigate } from 'react-router-dom';

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
import RestockBin from './components/Bins/RestockBin/RestockBin';
import EditBin from './components/Bins/EditBin/EditBin';


export const App = () => {

  const [emps, setEmps] = useState<EmpModel[]>(initialEmps);
  const [items, setItems] = useState<ItemModel[]>(initialItems);
  const [bins, setBins] = useState<BinModel[]>(initialBinss);
  const [cribs, setCribs] = useState<CribModel[]>(initialCribs);
  
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [searchResult, setSearchResult] = useState<ItemModel[]>([]); 
  const [binNumber, setBinNumber] = useState<string>("");
  const [newBin, setNewBin] = useState<BinModel | null>(null);
  const [min, setMin] = useState<number>(5);
  const [isLookupOpen, setIsLookupOpen] = useState<boolean>(false);  
  const [stockQty, setStockQty] = useState<number>(0);

  const navigate = useNavigate() ;

  const resetAddBin = () => {
    setBinNumber("");
    setSelectedItem(null);
  }
  const handleAddBin = () => {
    if (!binNumber || binNumber.trim() === '' ) {
      alert( "Bin Number is required");
      return;
    }
    
    if ( bins.find( (b) => b.binCode.toLowerCase() === binNumber.trim().toLocaleLowerCase() ) )  {
      alert( "Bin Number must be unique" );
      return;
    }
    
    if (!selectedItem ) {
      alert( "Assigning item is required");
      return;
    }
    
    const cribCode = cribs !== null && cribs.length > 0 ? cribs[0].cribCode : "001";
    const itemCode = selectedItem?.code;

    const newBin = new BinModel(
      binNumber, 
      cribCode,
      itemCode,
      0,
      min,
    );
 
    setBins( prev => [...prev, newBin] );
    resetAddBin();
    navigate('/bins', { state: { message: 'Bin saved' } });
  }

  const cancelAddBin  = () => {
    resetAddBin();
    navigate('/bins', { state: { message: "Operation cancelled" }});

  }

  const handleEditBin = () => {

  }

  return (

    <div>
      {/* <Router>       */}
        <MyNavbar />

        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<Hero items={items} setItems={setItems} cribs={cribs} />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/items" element={<ItemModuleComponent items={items} setItems={setItems} />} />
            <Route path="/bins" element={<Bins cribs={cribs} items={items} bins={bins} setBins={setBins} binNumber={binNumber} selectedItem={selectedItem}/>} />
            <Route path="/bins/:id/edit" 
              element={<EditBin 
                items={items} 
                bins={bins} 
                cribs={cribs}
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem} 
                setBinNumber={setBinNumber} 
                handleAddBin={handleAddBin} 
                isLookupOpen={isLookupOpen} 
                setIsLookupOpen={setIsLookupOpen}  
                cancelAddBin={cancelAddBin}
              />} 
            />
            <Route path="/print/:itemCode" element={<PrintWrapper />} />
            <Route path="/bins/add" 
              element={<AddBin 
                items={items} 
                bins={bins} 
                cribs={cribs}
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem} 
                
                setBinNumber={setBinNumber} 
                handleAddBin={handleAddBin} 
                isLookupOpen={isLookupOpen} 
                setIsLookupOpen={setIsLookupOpen}  
                cancelAddBin={cancelAddBin}
                min={min}
                setMin={setMin}
            />} />
            <Route 
              path="/bins/restock" 
              element={<RestockBin  bins={bins} items={items} stockQty={stockQty} setStockQty={setStockQty} /> } />

          </Routes>
        </div>
      {/* </Router> */}
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



