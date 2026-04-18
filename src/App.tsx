// import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import { HomeComponent } from './components/Home/HomeComponent';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { AboutComponent } from './components/AboutComponent';
import { ItemModuleComponent } from './components/Items/ItemModuleComponent';
import { PrintComponent } from './components/Items/PrintComponent';
import { NewItemForm } from './components/Items/NewItemForm';
import { initialItems } from './data/InitialItems';
import { initialBinss } from './data/initialBins';
import { initialCribs } from './data/initialCribs';
import { initialEmps } from './data/initiahEmps';
import Hero from './components/Home/Hero/Hero';
import Bins from './components/Bins/Bins';
import AddBin from './components/Bins/AddBin/AddBin';
import { BinModel } from  './models/BinsModel'; 
import { ItemModel } from './models/ItemModel'; 
import RestockBin from './components/Restock/RestockBin/RestockBin';
import EditBin from './components/Bins/EditBin/EditBin';
import { DepartmentModel } from './models/DepartmentModel';
import { initialDepartments } from './data/initialDepartments';
import Departments from './components/Departments/Departments';
import Employees from './components/Employees/Employees';
import AddDepartment from './components/Departments/AddDepartment/AddDepartment';
import EditDepartment from './components/Departments/EditDepartment/EditDepartment';


export const App = () => {
  const isDemoMode = true;

  const [emps, setEmps] = useState<EmpModel[]>([]);
  const [depts, setDepts] = useState<DepartmentModel[]>([]);
  const [items, setItems] = useState<ItemModel[]>([]);
  const [bins, setBins] = useState<BinModel[]>([]);
  const [cribs, setCribs] = useState<CribModel[]>([]);
  
  const [binNumber, setBinNumber] = useState<string>("");
  const [deptNumber, setDeptNumber] = useState<string>("");
  const [empBadgeNumber, setEmpBadgeNumber] = useState<string>("");
  
  const [itemCode, setItemCode] = useState<string | undefined>(undefined);
  const [managerBadgeNo, setManagerBadgeNo] = useState<string | undefined >(undefined);
  const [deptCode, setDeptCode] = useState<string>("");

  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [selectedManager, setSelectedManager] = useState<EmpModel | null>(null);
  const [selectedDept, setSelectedDept] = useState<DepartmentModel | null>(null);
  
  const [searchResult, setSearchResult] = useState<ItemModel[]>([]); 

  const [cribNumber, setCribNumber] = useState<string>("");
  const [min, setMin] = useState<number>(5);
  const [qty, setQty] = useState<number>(0);

  const [deptName, setDeptName] = useState<string>("");

  const [isBinActive, setIsBinActive] = useState<boolean>(false);
  const [isDeptActive, setIsDeptActive] = useState<boolean>(false);
  const [isEmpActive, setIsEmpActive] = useState<boolean>(false);
  const [isCribActive, setIsCribActive] = useState<boolean>(false);
  
  const [isLookupItemOpen, setIsLookupItemOpen] = useState<boolean>(false);  
  const [isLookupEmpOpen, setIsLookupEmpOpen] = useState<boolean>(false);  
  
 
  const [stockQty, setStockQty] = useState<number>(0);

  useEffect(() => {
    initDemoData();
  }, []);

  const navigate = useNavigate() ;

  const initDemoData = () => {
    setEmps(initialEmps);
    setDepts(initialDepartments);
    setItems( initialItems);
    setBins( initialBinss );
    setCribs( initialCribs );
  }

  const resetBin = () => {
    setBinNumber("");
    setCribNumber("");
    setItemCode("");
    setSelectedItem(null);
    setMin(0);
    setQty(0);
    setIsBinActive(false); 
  }
  const resetDept = () => {
    setDeptNumber("");
    setDeptName("");
    setManagerBadgeNo("");
    setSelectedManager(null);
    setIsDeptActive(false); 
  }
  const resetEmp = () => {
    setEmpBadgeNumber("");
    setDeptCode("");
    setSelectedDept(null);
    setIsEmpActive(false); 
  }

  const setItemActive = ( itemCode: string | undefined) => {
    if (!itemCode) return;

    setItems(
      prev =>  prev.map(item => 
        item.code === itemCode ? {...item, active: true} : item
      )
    );
  }

  const handleAddBin = () => {
    
    if (!binNumber || binNumber.trim() === '' ) {
      alert( "Bin Code is required");
      return;
    }  
    if ( bins.find( (b) => b.binCode.toLowerCase() === binNumber.trim().toLowerCase() ) )  {
      alert( "Bin code must be unique" );
      return;
    }    
    const cribCode = cribs.length > 0 ? cribs[0].cribCode : "";
    const newBin = new BinModel(
      binNumber, 
      cribCode,     
      0,
      min,
      false,
      itemCode,
    );
    setBins( prev => [...prev, newBin] );
    setItemActive(itemCode);
    resetBin();
    navigate('/bins', { state: { message: 'Bin saved' } });
  }
 const handleAddDept = () => {
    
    if (!deptNumber || deptNumber.trim() === '' ) {
      alert( "Department Code is required");
      return;
    }  
    if ( depts.find( (dept) => dept.deptCode.toLowerCase() === deptNumber.trim().toLowerCase() ) )  {
      alert( "Department code must be unique" );
      return;
    }    
    const newDept = new DepartmentModel(
      deptNumber,
      deptName,
      isDeptActive,       
    );
    setDepts( prev => [...prev, newDept] );
    resetDept();
    navigate('/depts', { state: { message: 'Department saved' } });
  }

  const cancelBin  = () => {
    resetBin();
    navigate('/bins', { state: { message: "Operation cancelled" }});

  }
  const cancelDept  = () => {
    resetDept();
    navigate('/depts', { state: { message: "Operation cancelled" }});
  }
  const cancelEmp  = () => {
    resetEmp();
    navigate('/emps', { state: { message: "Operation cancelled" }});
  }


  const handleEditBin = () => {
    if (!binNumber) return;

    const updatedBin = new BinModel(
        binNumber,
        cribNumber,        
        qty,
        min,        
        isBinActive,
        itemCode,
    );
    
    setBins( prev => 
      prev.map( bin =>
        bin.binCode === binNumber
        ? updatedBin
        : bin
      )
    );
    
    if (selectedItem && !selectedItem.active ) {
      setItems( prev =>
        prev.map( item => 
          item.code === itemCode 
            ? { ...item, active: true }
            : item
        )
      )
    }
    resetBin();
    navigate('/bins', { state: { message: 'Bin saved' } })

  }
  const handleEditDept = () => {
    if (!deptNumber) return;

    const updatedDept = new DepartmentModel(
      deptNumber,
      deptName,
      isDeptActive,
    );
    setDepts( prev =>
      prev.map( dept =>
        dept.deptCode === deptNumber
        ? updatedDept
        : dept
      )
    );
    resetDept();
    navigate('/depts', { state: {message: 'Department saved'}})
  }

  const handleDeleteBin = () => {
    if (!binNumber) return;
  
    setBins( prev => 
      prev.filter( bin => bin.binCode !== binNumber ) 
    );
    resetBin();
    navigate('/bins', { state: { message: `Bin: ${binNumber} deleted` } })
  }
  const handleDeleteDept = () => {
    if (!deptNumber) return;

    setDepts(prev =>
      prev.filter(dept => dept.deptCode !== deptNumber)
    );
    resetDept();
    navigate('/depts', { state: { message: `Department: ${deptNumber} deleted`}});
  }

const PrintWrapper = () => {

  const { itemCode } = useParams<{ itemCode: string }>();

  if (!itemCode) {
    return <div>Item Code not found.</div>; // In case  itemCode is undefined
  }

  return <PrintComponent barcode={itemCode} items={items}/>;
};


  return (
   
    <div>
      {/* <Router>       */}
        <MyNavbar />

        <div className='container mt-3'>
          <Routes>
            <Route path="/" 
              element={<Hero  
                  items={items} setItems={setItems} cribs={cribs} />} 
            />
            <Route path="/about" 
              element={<AboutComponent />} 
            />
            <Route path="/items" 
              element={<ItemModuleComponent 
                items={items} setItems={setItems} />} 
            />
            <Route path="/bins" 
              element={<Bins 
                cribs={cribs} items={items} bins={bins} setBins={setBins} binNumber={binNumber} selectedItem={selectedItem}/>} 
            />
            <Route path="/bins/add" 
              element={<AddBin 
                        items={items}         
                        itemCode={itemCode} 
                        setItemCode={setItemCode}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        setBinNumber={setBinNumber}
                        handleAddBin={handleAddBin}
                        isLookupItemOpen={isLookupItemOpen}
                        setIsLookupItemOpen={setIsLookupItemOpen}
                        cancelAddBin={cancelBin}
                        setMin={setMin}                
              />} 
            />  
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
                        isBinActive={isBinActive}
                        setIsBinActive={setIsBinActive}
                        handleEditBin={handleEditBin}
                        handleDeleteBin={handleDeleteBin}
                        isLookupItemOpen={isLookupItemOpen}
                        setIsLookupItemOpen={setIsLookupItemOpen}
                        cancelEditBin={cancelBin}
              />} 
            />  
            <Route path="/depts" 
              element={<Departments 
                depts={depts} setDepts={setDepts} deptNumber={deptNumber} />} 
            />                     
            <Route path="/depts/add" 
              element={<AddDepartment 
                        setDeptNumber={setDeptNumber}
                        setDeptName={setDeptName}
                        handleAddDept={handleAddDept}
                        cancelAddDept={cancelDept}   
              />}
            /> 
            <Route path="/depts/:deptCode/edit" 
              element={<EditDepartment 
                        depts={depts}
                        deptNumber={deptNumber}
                        setDeptNumber={setDeptNumber}
                        deptName={deptName}
                        setDeptName={setDeptName}
                        isDeptActive={isDeptActive}
                        setIsDeptActive={setIsDeptActive}
                        handleEditDept={handleEditDept}
                        handleDeleteDept={handleDeleteDept}
                        cancelEditDept={cancelDept}
             />}
            /> 

            <Route path="/emps" 
              element={<Employees 
                emps={emps} setEmps={setEmps} depts={depts} />} 
            />
 
            <Route path="/print/:itemCode" element={<PrintWrapper />} />
            
            <Route 
              path="/bins/restock" 
              element={<RestockBin  bins={bins} items={items} stockQty={stockQty} setStockQty={setStockQty} /> } />
            
          </Routes>
        </div>
      {/* </Router> */}
    </div>
  );
}



