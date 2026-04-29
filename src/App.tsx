// import './App.css';

import React, { useState, useEffect, SyntheticEvent } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import { HomeComponent } from './components/Home/HomeComponent';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { AboutComponent } from './components/AboutComponent';
import { ItemModuleComponent } from './components/Items/ItemModuleComponent';
import { PrintComponent } from './components/Items/PrintComponent';
import { NewItemForm } from './components/Items/NewItemForm';
import { initialBinss } from './data/initialBins';
import { initialCribs } from './data/initialCribs';
import { initialEmps } from './data/initiahEmps';
import Hero from './components/Home/Hero/Hero';
import Bins from './components/Bins/Bins';
import AddBin from './components/Bins/AddBin/AddBin';
import { BinModel } from  './models/BinsModel'; 
import { ItemModel } from './models/ItemModel'; 
import { DepartmentModel } from './models/DepartmentModel';
import { EmpModel}         from './models/EmpModel';
import RestockBin from './components/Restock/RestockBin/RestockBin';
import EditBin from './components/Bins/EditBin/EditBin';
import { initialDepartments } from './data/initialDepartments';
import Departments from './components/Departments/Departments';
import Employees from './components/Employees/Employees';
import AddDepartment from './components/Departments/AddDepartment/AddDepartment';
import EditDepartment from './components/Departments/EditDepartment/EditDepartment';
import AddEmployee from './components/Employees/AddEmployee/AddEmployee';
import EditEmployee from './components/Employees/EditEmployee/EditEmployee';
import Items from './components/Items/Items';
import AddItem from './components/Items/AddItem/AddItem';
import EditItem from './components/Items/EditItem/EditItem';
import { initialSuppliers } from './data/initialSuppliers';
import { initialItems } from './data/initialItems';
import { searchProductByUPC } from './api';

// -------------------
import { BarcodeSpiderLookupResponse, ItemAttributes, Store } from './data/product';
import Suppliers from './components/Suppliers/Suppliers';
import AddSupplier from './components/Suppliers/AddSupplier/AddSupplier';

// ------------------



export const App = () => {
  const isDemoMode = true;

  type itenTypes = "EXPENDABLE" | "DURABLE";

  const [emps, setEmps] = useState<EmpModel[]>([]);
  const [depts, setDepts] = useState<DepartmentModel[]>([]);
  const [items, setItems] = useState<ItemModel[]>([]);
  const [bins, setBins] = useState<BinModel[]>([]);
  const [cribs, setCribs] = useState<CribModel[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierModel[]>([]);
  
  const [binNumber, setBinNumber] = useState<string>("");
  const [deptNumber, setDeptNumber] = useState<string>("");
  const [empBadgeNumber, setEmpBadgeNumber] = useState<string>("");
  const [supplierNumber, setSupplierNumber] = useState<string>("");
  const [itemNumber, setItemNumber] = useState<string>("");
  
  const [binItemCode, setBinItemCode] = useState<string | undefined>(undefined);
  const [binCribCode, setBinCribCode] = useState<string>("");
  const [empDeptCode, setEmpDeptCode] = useState<string | undefined>(undefined);
  const [itemSupCode, setItemSupCode] = useState<string | undefined>(undefined);

  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [selectedDept, setSelectedDept] = useState<DepartmentModel | null>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierModel | null>(null);
  
  const [searchResult, setSearchResult] = useState<ItemModel[]>([]); 

  const [min, setMin] = useState<number>(5);
  const [qty, setQty] = useState<number>(0);

  const [deptName, setDeptName] = useState<string>("");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isSupervisor, setIsSupervisor] = useState<boolean>(false);
  const [isStocker, setIsStocker] = useState<boolean>(false);

  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierEmail, setSupplierEmail] = useState<string>("");
  const [supplierAddr1, setSupplierAddr1] = useState<string>("");
  const [supplierAddr2, setSupplierAddr2] = useState<string>("");
  const [supplierCity, setSupplierCity] = useState<string>("");
  const [supplierState, setSupplierState] = useState<string>("");
  const [supplierZip, setSupplierZip] = useState<string>("");
  const [supplierCountry, setSupplierCountry] = useState<string>("");
  const [supplierCurrency, setSupplierCurrency] = useState<string>("");
  const [supplierContact, setSupplierContact] = useState<string>("");
  const [supplierPhone, setSupplierPhone] = useState<string>("");
  const [supplierFax, setSupplierFax] = useState<string>("");
  const [supplierIsGrinder, setSupplierIsGrinder] = useState<boolean>(false);
  const [supplierIsCalibrator, setSupplierIsCalibrator] = useState<boolean>(false);
  const [supplierServiceFee, setSupplierServiceFee] = useState<number>(0.0);

  const [itemDescription, setItemDescription] = useState<string>("");
  const [itemImage, setItemImage] = useState<string>("");
  const [itemType, setItemType] = useState<itenTypes>("EXPENDABLE");
  const [itemUnitPrice, setItemUnitPrice] = useState<number>(0.0);
  const [itemIssueCost, setItemIssueCost] = useState<number>(0.0);
  const [uom, setUom] = useState<string>("qty");
  const [packQty, setPackQty] = useState<number>(1);
  const [mfg, setMfg] = useState<string>("");
  const [mfgItem, setMfgItem] = useState<string>("");
  const [leadTime, setLeadTime] = useState<number>(1);
  const [orderQty, setOrderQty] = useState<number>(1);
  const [itemDateCreated, setItemDateCreated] = useState<Date>( new Date("2024-01-01"));

const [isBinActive, setIsBinActive] = useState<boolean>(false);
const [isDeptActive, setIsDeptActive] = useState<boolean>(false);
const [isEmpActive, setIsEmpActive] = useState<boolean>(false);
const [isCribActive, setIsCribActive] = useState<boolean>(false);
const [isSupActive, setIsSupActive] = useState<boolean>(false);
const [isItemActive, setIsItemActive] = useState<boolean>(false);
const [itemIsDisabled, setItemIsDisabled] = useState<boolean>(false);

  const [isLookupItemOpen, setIsLookupItemOpen] = useState<boolean>(false);  
  const [isLookupEmpOpen, setIsLookupEmpOpen] = useState<boolean>(false);  
  const [isLookupDeptOpen, setIsLookupDeptOpen] = useState<boolean>(false);  
  const [isLookupSupOpen, setIsLookupSupOpen] = useState<boolean>(false);  

  // const [isShowEntryForm, setIsShowEntryForm] = useState(false);
  
  const [stockQty, setStockQty] = useState<number>(0);

  const [lookupUPC, setLookupUPC] = useState<string>("");

  type productResponse = {
       code: number,   //200
       status: string,  //"OK"
       message: string,  //"Data returned"
}
  
  const [lookupUPCResult, setLookupUPCResult] = useState<BarcodeSpiderLookupResponse | null>(null);
  const [apiServerError, setApiServerError] = useState<string>("");

  useEffect(() => {
    initDemoData();
  }, []);

  const navigate = useNavigate() ;

  // --------------Load Initial demo data ---------------------------

  const initDemoData = () => {
    setEmps(initialEmps);
    setDepts(initialDepartments);
    setItems( initialItems);
    setBins( initialBinss );
    setCribs( initialCribs );
    setSuppliers( initialSuppliers );
  }

  // -------------- Reset States ---------------------------
  const resetBin = () => {
    setBinNumber("");
    setBinCribCode("");
    setBinItemCode("");
    setSelectedItem(null);
    setMin(0);
    setQty(0);
    setIsBinActive(false); 
  }

  const resetDept = () => {
    setDeptNumber("");
    setDeptName("");
    setIsDeptActive(false); 
  }

  const resetEmp = () => {
    setEmpBadgeNumber("");
    setEmpDeptCode(undefined);
    setSelectedDept(null);
    setFirstName("");
    setLastName("");
    setIsSupervisor(false);
    setIsStocker( false);
    setIsEmpActive(false); 
  }

  const resetSupplier = () => {
    setItemSupCode("");
    setSupplierName("");
    setSupplierName("");
    setSupplierEmail("");
    setSupplierAddr1("");
    setSupplierAddr2("");
    setSupplierCity("");
    setSupplierState("");
    setSupplierZip("");
    setSupplierCountry("");
    setSupplierCurrency("");
    setSupplierContact("");
    setSupplierPhone("");
    setSupplierFax("");
    setSupplierIsGrinder(false);
    setSupplierIsCalibrator(false);
    setSupplierServiceFee(0.0);
  }

  const resetItem = () => {
    setItemNumber("")
    setItemSupCode(undefined);
    setSelectedSupplier(null);
        
    setItemDescription("");
    setItemImage("");
    setItemType("EXPENDABLE");
    setItemUnitPrice(0.0);
    setItemIssueCost(0.0);
    setUom("qty");
    setPackQty(1);
    setMfg("");
    setMfgItem("");
    setLeadTime(1);
    setOrderQty(1);
    setItemDateCreated( new Date("2024-01-01"));

    setLookupUPC("");
  }

  // -------------- Activate ---------------------------
  const activateItem = ( itemCode: string | undefined) => {
    if (!itemCode) return;

    setItems(
      prev =>  prev.map(item => 
        item.code === itemCode ? {...item, active: true} : item
      )
    );
  }

  const activateDept = ( deptCode: string | undefined) => {
    if (!deptCode) return;

    setDepts(
      prev => prev.map(dept => 
        dept.deptCode === deptCode ? {...dept, active: true} : dept
      )
    );
  }

// -------------- Add operations---------------------------
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
      binItemCode,
    );
    setBins( prev => [...prev, newBin] );
    activateItem(binItemCode);
    resetBin();
    navigate('/bins', { state: { message: 'Bin saved' } });
  }

  const handleAddDept = () => {
    if (!deptNumber|| deptNumber.trim() === '' ) {
      alert( "Department Code is required");
      return;
    }  
    if ( depts.find( (dept) => dept.deptCode.toUpperCase() === deptNumber.trim().toUpperCase() ) )  {
      alert( "Department code must be unique" );
      return;
    }    
    const newDept = new DepartmentModel(
      deptNumber.trimEnd().toUpperCase(),
      deptName,
      false,       
    );
    setDepts( prev => [...prev, newDept] );
    resetDept();
    navigate('/depts', { state: { message: 'Department saved' } });
  }

  const handleAddEmp = () => {
    
    if (!empBadgeNumber || empBadgeNumber.trim() === '' ) {
      alert( "Employee Badge # is required");
      return;
    }  
    if ( emps.find( emp => emp.badgeNo.toLowerCase() === deptNumber.trim().toLowerCase() ) )  {
      alert( "Employee Badge # must be unique" );
      return;
    }    
    const newEmp = new EmpModel(
      empBadgeNumber,
      firstName,
      lastName,
      true,       
      isSupervisor,
      isStocker,
      empDeptCode,
    );
    setEmps( prev => [...prev, newEmp] );
    resetEmp();
    activateDept(empDeptCode);
    navigate('/emps', { state: { message: 'Employee saved' } });
  }

  const handleAddItem = () => {
    
    if (!itemNumber || itemNumber.trim() === '' ) {
      alert( "Item Code is required");
      return;
    }  
    if ( items.find( (item) => item.code.toLowerCase() === itemNumber.trim().toLowerCase() ) )  {
      alert( "Item code must be unique" );
      return;
    }    
    const newItem = new ItemModel(
        itemNumber, 
        itemDescription,
        itemImage,
        itemType,
        itemUnitPrice,
        itemIssueCost,
        uom,
        packQty,
        itemSupCode ?? "",
        mfg,
        mfgItem,
        leadTime,
        orderQty,
        itemDateCreated,
        false,
        false,

        // ----Obsolete---------
        "",
        false,
        "",
        "",
        "",
        undefined,
        ""
    );
    setItems( prev => [...prev, newItem ]);
    activateItem(binItemCode);
    resetItem();
    navigate('/items', { state: { message: 'Item saved' } });
  }

  const handleAddSupplier = () => {
    if (!supplierNumber.trim() || deptNumber.trim() === '' ) {
      alert( "Supplier Code is required");
      return;
    }  
    if ( suppliers.find( (sup) => sup.supCode.toLowerCase() === supplierNumber.trim().toLowerCase() ) )  {
      alert( "Supplier code must be unique" );
      return;
    }    
    const newSupplier = new SupplierModel(
      supplierNumber.trim(),
      supplierName,
      supplierEmail,
      supplierPhone,
      supplierFax,
      supplierAddr1,
      supplierAddr2,
      supplierCity,
      supplierState, 
      supplierZip,
      supplierCountry,
      supplierCurrency,
      supplierContact,
      false,
      false,
      0.0,
      "",
    );
    setSuppliers( prev => [...prev, newSupplier] );
    resetSupplier();
    navigate('/suppliers', { state: { message: 'Supplier saved' } });
  }

  // -------------- Cancel button handlers ---------------------------
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

  const cancelItem = () => {
    resetItem();
    navigate('/items', {state: {message: "Operation canceled"}});
  }

  const cancelSupplier = () => {
    resetSupplier();
    navigate('/suppliers', {state: {message: "Operation canceled"}});
  }

  
// -------------- Edit operations ---------------------------
  const handleEditBin = () => {
    if (!binNumber) return;

    const updatedBin = new BinModel(
        binNumber,
        binCribCode,        
        qty,
        min,        
        isBinActive,
        binItemCode,
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
          item.code === binItemCode 
            ? { ...item, active: true }
            : item
        )
      )
    }
    resetBin();
    activateItem(binItemCode);
    navigate('/bins', { state: { message: 'Bin saved' } })

  }

  const handleEditEmp = () => {
    if (!empBadgeNumber) return;

    const updatedEmp = new EmpModel(
      empBadgeNumber,
      firstName,
      lastName,
      true,       
      isSupervisor,
      isStocker,
      empDeptCode,
    );
    setEmps( prev =>
      prev.map( emp =>
        emp.badgeNo === empBadgeNumber
        ? updatedEmp
        : emp
      )
    );
    resetEmp();
    activateDept(empDeptCode);
    navigate('/emps', { state: {message: 'Employee saved'}})
  }


  const handleEditDept = () => {
    if (!empBadgeNumber) return;

    const updatedEmp = new EmpModel(
      empBadgeNumber,
      firstName,
      lastName,
      false,       
      isSupervisor,
      isStocker,
      empDeptCode,
    );
    setEmps( prev =>
      prev.map( emp =>
        emp.badgeNo === empBadgeNumber
        ? updatedEmp
        : emp
      )
    );
    resetEmp();
    navigate('/emps', { state: {message: 'Employee saved'}})
  }

  // -------------- Delete operations ---------------------------
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

  const handleDeleteEmp = () => {
    if (!empBadgeNumber) return;

    setEmps(prev =>
      prev.filter(emp => emp.badgeNo !== empBadgeNumber)
    );
    resetEmp();
    navigate('/emps', { state: { message: `Employee: ${empBadgeNumber} deleted`}});
  }

  // -------------- Item barcode Print button handler ---------------------------
  const PrintWrapper = () => {

    const { itemCode } = useParams<{ itemCode: string }>();

    if (!itemCode) {
      return <div>Item Code not found.</div>; // In case  itemCode is undefined
    }

    return <PrintComponent barcode={itemCode} items={items}/>;
  };

//------------------------ UPC API ---------------------------------------------
  const onLookupUPCSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchProductByUPC(lookupUPC);
    console.log("result = ", result);
    if(typeof result === "string") {
        setApiServerError(result);
    } else {
        setLookupUPCResult(result.data);
        
        fillNewItemFormWithAPIResult();
    }
    
    // e.preventDefault();
    // const result = await searchProductByUPC(lookupUPC); // api.tsx
        
    // if(typeof result === "string") {

    // } else {
    //     setLookupUPCResult(result.data);
    //     fillNewItemFormWithAPIResult();
    // }
  }
    
  const handleLookupUPCChange = (e: any) => {
      setLookupUPC(e.target.value);
  }

 const fillNewItemFormWithAPIResult = () => {
    if (lookupUPCResult == null) return;

    setMfgItem(lookupUPCResult.item_attributes.upc);
    setMfg(lookupUPCResult.item_attributes.manufacturer);
    setItemDescription(lookupUPCResult.item_attributes.title);
    const highestPriceStr = lookupUPCResult.item_attributes.highest_price;
    const storePriceStr = lookupUPCResult.Stores?.[0]?.price;
    const priceStr =  highestPriceStr?.trim() ? highestPriceStr : storePriceStr?.trim() ? storePriceStr  : null;
    setItemUnitPrice(Number(priceStr));
    setItemIssueCost(Number(priceStr));
    setItemImage(lookupUPCResult.item_attributes.image);

    // const supCode = lookupUPCResult.item_attributes.publisher;
    // setSelectedSupplier(suppliers.find(sup => sup.supCode === supCode) ?? null );
    // if (selectedSupplier === null ) {
    // }
        // setItemSupCode(selectedSupplier?.supCode);
  }

  //--------------------------------------------------
  const formatDate = (date: Date | string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
  });


    //=================================================================================
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
              element={<Items 
                items={items} setItems={setItems} 
                itemNumber={itemNumber}
                suppliers={suppliers}
                selectedSupplier={selectedSupplier}
                formatDate={formatDate}
              />} 
            />
            <Route path="/items/add"
              element={ <AddItem
                          supliers={suppliers}
                          itemSupCode={itemSupCode}
                          setItemSupCode={setItemSupCode}
                          selectedSupplier={selectedSupplier}
                          setSelectedSupplier={setSelectedSupplier}
                          itemNumber={itemNumber}
                          setItemNumber={setItemNumber}
                          handleAddItem={handleAddItem}
                          isLookupSupOpen={isLookupSupOpen}
                          setIsLookupSupOpen={setIsLookupSupOpen}
                          cancelAddItem={cancelItem}
                          itemDescription={itemDescription}
                          setItemDescription={setItemDescription}
                          itemImage={itemImage}
                          setItemImage={setItemImage}
                          itemType={itemType}
                          setItemType={setItemType}
                          itemUnitPrice={itemUnitPrice}
                          setItemUnitPrice={setItemUnitPrice}
                          itemIssueCost={itemIssueCost}
                          setItemIssueCost={setItemIssueCost}
                          uom={uom}
                          setUom={setUom}
                          packQty={packQty}
                          setPackQty={setPackQty}
                          mfg={mfg}
                          setMfg={setMfg}
                          mfgItem={mfgItem}
                          setMfgItem={setMfgItem}
                          leadTime={leadTime}
                          setLeadTime={setLeadTime}
                          orderQty={orderQty}
                          setOrderQty={setOrderQty}
                          // itemDateCreated={itemDateCreated}
                          onLookupUPCSubmit={onLookupUPCSubmit}
                          lookupUPC={lookupUPC}
                          handleLookupUPCChange={handleLookupUPCChange}

              />}
            />
            <Route path="/items/${itemCode}/edit"
              element={ <EditItem 
                
            />

              }
            />
            <Route path="/bins" 
              element={<Bins 
                cribs={cribs} items={items} bins={bins} setBins={setBins} binNumber={binNumber} selectedItem={selectedItem}/>} 
            />
            <Route path="/bins/add" 
              element={<AddBin 
                        items={items}         
                        itemCode={binItemCode} 
                        setItemCode={setBinItemCode}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        setBinNumber={setBinNumber}
                        setCribCode={setBinCribCode}
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
                        setCribCode={setBinCribCode}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        itemCode={binItemCode}
                        setItemCode={setBinItemCode}
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
            <Route path="/emps/add" 
              element={<AddEmployee
                emps={emps}
                deptCode={empDeptCode}
                setDeptCode={setEmpDeptCode}
                selectedDept={selectedDept}
                setSelectedDept={setSelectedDept}
                setEmpBadgeNumber={setEmpBadgeNumber}
                handleAddEmp={handleAddEmp}
                isLookupDeptOpen={isLookupDeptOpen}
                setIsLookupDeptOpen={setIsLookupDeptOpen}
                cancelAddEmp={cancelEmp}
                setFirstName={setFirstName}
                setLastName={setLastName}
                isSupervisor={isSupervisor}
                setIsSupervisor={setIsSupervisor}
                isStocker={isStocker}
                setIsStocker={setIsStocker}
                depts={depts}
              />} 
            />
            <Route path="/emps/:badgeNo/edit" 
              element={<EditEmployee
                emps={emps}
                empBadgeNumber={empBadgeNumber}
                setEmpBadgeNumber={setEmpBadgeNumber}
                depts={depts}
                selectedDept={selectedDept}
                setSelectedDept={setSelectedDept}
                deptCode={empDeptCode}
                setDeptCode={setEmpDeptCode}
                isLookupDeptOpen={isLookupDeptOpen}
                setIsLookupDeptOpen={setIsLookupDeptOpen}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                isSupervisor={isSupervisor}
                setIsSupervisor={setIsSupervisor}
                isStocker={isStocker}
                setIsStocker={setIsStocker}
                handleDeleteEmp={handleDeleteEmp}
                handleEditEmp={handleEditEmp}
                isEmpActive={isEmpActive}
                setIsEmpActive={setIsEmpActive}
                cancelEditEmp={cancelEmp}
                
              />} 
            />
            <Route path="/suppliers" 
              element={<Suppliers 
                
              />} 
            />
            <Route path="/suppliers/add" 
              element={<AddSupplier
              //  supplierNumber,
                setSupplierNumber={setSupplierNumber}
                //supplierName
                setSupplierName={setSupplierName}
                //supplierEmail
                setSupplierEmail={setSupplierEmail}
                //supplierAddr1
                setSupplierAddr1={setSupplierAddr1}
                // supplierAddr2
                setSupplierAddr2={setSupplierAddr2}
                //supplierCity
                setSupplierCity={setSupplierCity}
                // supplierState
                setSupplierState={setSupplierState}
                // supplierZip
                setSupplierZip={setSupplierZip}
                // supplierCountry
                setSupplierCountry={setSupplierCountry}
                // supplierCurrency
                setSupplierCurrency={setSupplierCurrency}
                // supplierContact
                setSupplierContact={setSupplierContact}
                // supplierPhone
                setSupplierPhone={setSupplierPhone}
                // supplierFax
                setSupplierFax={setSupplierFax}
                // supplierIsGrinder
                setSupplierIsGrinder={setSupplierIsGrinder}
                // supplierIsCalibrator
                setSupplierIsCalibrator={setSupplierIsCalibrator}
                // supplierServiceFee
                setSupplierServiceFee={setSupplierServiceFee}
                handleAddSupplier={handleAddSupplier}
                cancellAddSupplier={cancelSupplier}
              />} 
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



