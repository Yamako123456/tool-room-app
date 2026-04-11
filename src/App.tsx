// import './App.css';

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
  
  const [itemCode, setItemCode] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [searchResult, setSearchResult] = useState<ItemModel[]>([]); 
  const [binNumber, setBinNumber] = useState<string>("");
  const [cribNumber, setCribNumber] = useState<string>("");
  const [min, setMin] = useState<number>(5);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(0);
  // const [newBin, setNewBin] = useState<BinModel | null>(null);

  const [isLookupOpen, setIsLookupOpen] = useState<boolean>(false);  
  const [stockQty, setStockQty] = useState<number>(0);

  const navigate = useNavigate() ;

  const resetAddBin = () => {
    setBinNumber("");
    setCribNumber("");
    setItemCode("");
    setSelectedItem(null);
    setMin(0);
    setQty(0);
    setIsActive(false); 
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

    const cribCode = cribs.length > 0 ? cribs[0].cribCode : "";
   
    const newBin = new BinModel(
      binNumber, 
      cribCode,
      itemCode,
      0,
      min,
      false,
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
    if (!binNumber) return;

    const updatedBin = new BinModel(
        binNumber,
        cribNumber,
        itemCode,
        qty,
        min,        
        isActive,
    );
    
    setBins( prev => 
      prev.map( bin =>
        bin.binCode === binNumber
        ? updatedBin
        : bin
      )
    );
    resetAddBin();
    navigate('/bins', { state: { message: 'Bin saved' } })

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
            <Route path="/bins/:binCode/edit" 
              element={<EditBin 
                  items={items}
                  bins={bins}
                  setBinNumber={setBinNumber}
                  setCribNumber={setCribNumber}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  itemCode={itemCode}
                  setItemCode={setItemCode}
                  setQty={setQty}
                  min={min}
                  setMin={setMin}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  handleEditBin={handleEditBin}
                  isLookupOpen={isLookupOpen}
                  setIsLookupOpen={setIsLookupOpen}
                  cancelAddBin={cancelAddBin}
              />} 
            />
            <Route path="/print/:itemCode" element={<PrintWrapper />} />
            <Route path="/bins/add" 
              element={<AddBin 
                        items={items}         
                        itemCode={itemCode} 
                        setItemCode={setItemCode}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        setBinNumber={setBinNumber}
                        handleAddBin={handleAddBin}
                        isLookupOpen={isLookupOpen}
                        setIsLookupOpen={setIsLookupOpen}
                        cancelAddBin={cancelAddBin}
                        setMin={setMin}                
              />} 
            />
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



