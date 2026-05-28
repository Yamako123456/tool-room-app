// import './App.css';

import React, { useState, useEffect, SyntheticEvent } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { toast, Toaster } from "react-hot-toast"; 

import { HomeComponent } from './components/Home/HomeComponent';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { AboutComponent } from './components/About/AboutComponent';
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
import { SupplierModel } from './models/SupplierModel';
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
import EditSupplier from './components/Suppliers/EditSupplier/EditSupplier';
import RestockOrderList from './components/RestockList/RestockList';
import * as XLSX from "xlsx";  
import Login from './components/Login/Login';
import MainMenu from './components/MainMenu/MainMenu';
import Issue from './components/Issue/Issue';
import Return from './components/Return/Return';
import Stock from './components/Stock/Stock';
import PhysicalCount from './components/PhysicalCount/PhysicalCount';
import IssueQtyForm from './components/Issue/IssueQtyForm/IssueQtyForm';
import { TransactionModel } from './models/Transaction/TransactionModel';
import { IssueModel } from './models/Transaction/IssueModel';
import Transactions from './components/Transactions/Transactions';
import { initialTrans } from './data/initialTrans';
import { ItemType } from './types/ItemTypes';
// import { IssueRecordsState, TranRecordsState } from './types/transactionTypes';
import { IssueRecordsState, NextIssueIdType, NextTranIdType,  } from './types/transactionTypes';
// ------------------

export const App = () => {

  const isDemoMode = true;

  const [isLoaded, setIsLoaded] = useState(false);
  
  //-----------------------------------------------------
  // type itenTypes = "EXPENDABLE" | "DURABLE";

  const [emps, setEmps] = useState<EmpModel[]>(initialEmps);
  const [depts, setDepts] = useState<DepartmentModel[]>(initialDepartments);
  const [items, setItems] = useState<ItemModel[]>(initialItems);
  const [bins, setBins] = useState<BinModel[]>(initialBinss);
  const [cribs, setCribs] = useState<CribModel[]>(initialCribs);
  const [suppliers, setSuppliers] = useState<SupplierModel[]>(initialSuppliers);
  
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
  const [supplierCountry, setSupplierCountry] = useState<string>("USA");
  const [supplierCurrency, setSupplierCurrency] = useState<string>("USD");
  const [supplierContact, setSupplierContact] = useState<string>("");
  const [supplierPhone, setSupplierPhone] = useState<string>("");
  const [supplierFax, setSupplierFax] = useState<string>("");
  const [isRegrinder, setIsRegrinder] = useState<boolean>(false);
  const [isCalibrator, setIsCalibrator] = useState<boolean>(false);
  const [supplierServiceFee, setSupplierServiceFee] = useState<number>(0.0);

  const [itemDescription, setItemDescription] = useState<string>("");
  const [itemImage, setItemImage] = useState<string>("");
  const [itemType, setItemType] = useState<ItemType>(ItemType.EXPENDABLE);
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
  const [isSupplierActive, setIsSupplierActive] = useState<boolean>(false);
  const [isItemActive, setIsItemActive] = useState<boolean>(false);
  const [isItemDisabled, setIsItemDisabled] = useState<boolean>(false);
  const [isLookupItemOpen, setIsLookupItemOpen] = useState<boolean>(false);  
  const [isLookupEmpOpen, setIsLookupEmpOpen] = useState<boolean>(false);  
  const [isLookupDeptOpen, setIsLookupDeptOpen] = useState<boolean>(false);  
  const [isLookupSupOpen, setIsLookupSupOpen] = useState<boolean>(false);  

  // const [isShowEntryForm, setIsShowEntryForm] = useState(false);
  
  const [stockQty, setStockQty] = useState<number>(0);

  const [lookupUPC, setLookupUPC] = useState<string>("");


  //-------------------- Operations ------------------------------------------------------

  const [nextIssueId, setNIssueTranId] = useState<NextIssueIdType>({id: 1});
  const [nextTranId, setNextTranId] = useState<NextTranIdType>( {id: 5} );

  const [tranRecords, setTranRecords] = useState<TransactionModel[]>(initialTrans);

  const [issueRecords, setIssueRecords] = useState<IssueRecordsState>({nextIssueId: 1, records: []});
  
  const [scannedBadgeNo, setScannedBadgeNo] = useState("");

  const [loggedInEmp, setLoggedInEmp] = useState<EmpModel | undefined >(undefined);
  const [error, setError] = useState("");
  const [hasOpenIssue, setHasOpenIssue] = useState<boolean>(false);

  // const [issueItem, setIssueItem] = useState<ItemModel | undefined>(undefined);
  // const [availableQty, setAvailableQty] = useState<number>(0);
  // const [issueQty, setIssueQty] = useState<number>(0);

// 　 ＿/＼／＼／ヽ_
// 　｜ (＞――＜) ｜
// `／ ／ ヽ｜ノ ＼ ＼
// ｜ /　● ⊥ ●　ﾍ /
// / ｜　 ／ｏ＼　 ｜＼
// ＼｜　(＿人＿)　｜／
// `｜＼　　||　　／｜
// 　￣~＞―Ｕ―＜~￣
// 　 ／　/　　 ヽ＼
// 　(　-<　＿　 |　)
// 　 ＼／)(||)　|／
// 　 ∠ﾚ<＿二＿ノ＝≦ﾐ
// 　　　/　| | ヽ
// 　　 /　 | |　ヽ
// 　 ∠ZZﾆノ ヽﾆZZ＞




  //====================================================================

  // -------------------- Main Menu -----------------------------
  const handleLogOut = () => {
    setScannedBadgeNo("");
    setLoggedInEmp(undefined);
    setError("");
    setHasOpenIssue(false);
    // setIssueItem(undefined);
    // setAvailableQty(0);
    // setIssueQty(0);

    navigate("/login");
  
  }

  //--------------------- Badge Scan ----------------------------
  const handleBadgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scannedBadgeNo.trim()) {
      setError("Please scan or enter a badge number.");
      return;
    }
    const emp = emps.find(emp => emp.badgeNo === scannedBadgeNo);
    
    if (!emp) {
      setError(`Employee badge: ${scannedBadgeNo} was not found.`);
      return;
    } else {
      setLoggedInEmp(emps.find(emp => emp.badgeNo === scannedBadgeNo)); 
      setError("");
      navigate('/main-menu');
    }
    
  };
  
  //--------------------- issue ---------------------------------
  const onCloseQtyForm = () => {
    console.log("onCloseQtyForm hasn't been implemented")
  }
  
  const hadleIssueNow = () => {
    console.log("hadleIssueNow hasn't been implemented")

  }
  const handleAddToCart = () => {
    console.log("hadleAddToCart hasn't been implemented")

  }

//   const hasOpenIssue = issues.some( issue =>
//     issue.badgeNo === selectedEmployee?.badgeNo &&
    
// );

// const canReturn = hasOpenIssue;
// const canStock = selectedEmployee?.isStocker || selectedEmployee?.isSupervisor;
// const canPhysicalCount = selectedEmployee?.isSupervisor;
  

  //--------------------- Return --------------------------------
  //--------------------- Stock ---------------------------------
  //--------------------- Physical Count ------------------------
  //--------------------- Transaction --------------------------







  type productResponse = {
       code: number,   //200
       status: string,  //"OK"
       message: string,  //"Data returned"
  }
  
  const [lookupUPCResult, setLookupUPCResult] = useState<BarcodeSpiderLookupResponse | null>(null);
  const [apiServerError, setApiServerError] = useState<string>("");

  const navigate = useNavigate();

  // --------------Load Initial demo data ---------------------------

  const initDemoData = () => {
    setNextTranId({id: 5});
    setEmps(initialEmps);
    setDepts(initialDepartments);
    setItems( initialItems);
    setBins( initialBinss );
    setCribs( initialCribs );
    setSuppliers( initialSuppliers );
    setTranRecords(initialTrans);
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

  const resetSup = () => {
    setItemSupCode("");
    setSupplierName("");
    setSupplierName("");
    setSupplierEmail("");
    setSupplierAddr1("");
    setSupplierAddr2("");
    setSupplierCity("");
    setSupplierState("");
    setSupplierZip("");
    setSupplierCountry("USA");
    setSupplierCurrency("USD");
    setSupplierContact("");
    setSupplierPhone("");
    setSupplierFax("");
    setIsRegrinder(false);
    setIsCalibrator(false);
    setSupplierServiceFee(0.0);
  }

  const resetItem = () => {
    setItemNumber("")
    setItemSupCode(undefined);
    setSelectedSupplier(null);
        
    setItemDescription("");
    setItemImage("");
    setItemType(ItemType.EXPENDABLE);
    setItemUnitPrice(0.0);
    setItemIssueCost(0.0);
    setUom("qty");
    setPackQty(1);
    setMfg("");
    setMfgItem("");
    setLeadTime(1);
    setOrderQty(1);
    setItemDateCreated( new Date("2000-01-01"));

    setIsItemActive(false);
    setIsItemDisabled(false);
    setIsLookupItemOpen(false);  
    
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
      toast.error( "Bin Code is required");
      return;
    }  
    if ( bins.find( (b) => b.binCode.toLowerCase() === binNumber.trim().toLowerCase() ) )  {
      toast.error( "Bin code must be unique" );
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
      toast.error( "Department Code is required");
      return;
    }  
    if ( depts.find( (dept) => dept.deptCode.toUpperCase() === deptNumber.trim().toUpperCase() ) )  {
      toast.error( "Department code must be unique" );
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
      toast.error( "Employee Badge # is required");
      return;
    }  
    if ( emps.find( emp => emp.badgeNo.toLowerCase() === deptNumber.trim().toLowerCase() ) )  {
      toast.error( "Employee Badge # must be unique" );
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
      toast.error( "Item Code is required");
      return;
    }  
    if ( items.find( (item) => item.code.toLowerCase() === itemNumber.trim().toLowerCase() ) )  {
      toast.error( "Item code must be unique" );
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
        new Date(),
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
    if (!supplierNumber.trim() || supplierNumber.trim() === '' ) {
      toast.error( "Supplier Code is required");
      return;
    }  
    if ( suppliers.find( (sup) => sup.supCode.toLowerCase() === supplierNumber.trim().toLowerCase() ) )  {
      toast.error( "Supplier code must be unique" );
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
      isRegrinder,
      isCalibrator,
      supplierServiceFee,
      false,
      "",
    );
    
    setSuppliers( prev => [...prev, newSupplier] );
    resetSup();
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
    resetSup();
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
    if (!deptNumber) return;

    const updatedDept = new DepartmentModel(
      deptNumber,
      deptName,
      isDeptActive
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

  const handleEditItem = () => {
    if (!itemNumber) return;

    const updatedItem = new ItemModel(
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
        isItemActive,
        isItemDisabled,

        // ----Obsolete---------
        "",
        false,
        "",
        "",
        "",
        undefined,
        ""
    );

    setItems(prev => prev.map(item => item.code === itemNumber ? updatedItem : item));

    resetItem();
    navigate('/items', { state: { message: `Item: ${itemNumber} saved.` }});

  }

  const handleEditSupplier = () => {
    if (!supplierNumber) return;

    const updatedSupplier = new SupplierModel(
         supplierNumber,
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
         isRegrinder,
         isCalibrator,
         supplierServiceFee,
         isSupplierActive,
         "",       
    );

    setSuppliers( prev =>
      prev.map( sup =>
        sup.supCode === supplierNumber
        ? updatedSupplier
        : sup
      )
    );
    resetSup();
    navigate('/suppliers', { state: {message: 'Supplier saved'}})

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

  const handleDeleteItem = () => {
    if (!itemNumber) return

    const theItem = items.find(itm => itm.code === itemNumber);
    if ( !theItem ) return;

    if ( isItemAssignedToBin(itemNumber) ){
      toast(`Can not delete item: ${itemNumber} - ${theItem.description1}. It is still assigned to bin(s).`);
      return;
    }
    
    setItems(prev => prev.filter(item => item.code !== itemNumber));
    resetItem();
    navigate('/items', { state: { message: `Item: ${itemNumber} deleted` }});

  }

  const isItemAssignedToBin = (itemCode: string) => {
    const binsWith = bins.filter(bin => bin.item === itemCode);
    return binsWith.length > 0;
  }

  const disableItem = (itemCode: string) => {
    if (!itemCode) return;

    const theItem = items.find(itm => itm.code === itemCode);
    if ( !theItem ) return;
    if ( isItemAssignedToBin(itemCode) ){
      toast(`Can not disable item: ${itemCode} - ${theItem.description1}. It is still assigned to bin(s).`);
      return;
    }
    const updatedItem = {...theItem, disabled : true};
    const updatedArrayOfItems = items.map(item => {
      return item.code === itemCode ? updatedItem : item;
    });
  }

  const handleDeleteSupplier = () => {
    
  }
  const confirmDelete = ( recType: string, number: string, handler: () => void ) => {
    toast( (t) => (
      <div>
        <span>
          Delete this unused {recType}: {number}?
        </span>
        <div className='flex justify-end gap-2'>
          <button
            className='px-3 py-1 rounded bg-gray-200'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            className='px-3 py-1 rounded bg-red-500 text-white'
            onClick={ () => {
              handler();
              toast.dismiss(t.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
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
    console.log("onLookupUPCSubmit got triggerd.");
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

  //-------------- RestockList ---------------------------------------------
  const handleOrderExport = (orders: RestockObjType[] ) => {
    const grouped: Record< string, RestockObjType[]> = {};

    orders.forEach(ord => {
      if ( !grouped[ ord.supplierCode ] ) {
        grouped[ ord.supplierCode ] = [];
      }

      grouped[ ord.supplierCode ].push(ord);
    });

    const workbook  = XLSX.utils.book_new();

    Object.keys(grouped).forEach( supplier => {

      const sheetData = grouped[supplier].map( ord =>(
        {
          Item: ord.description,
          Qty: ord.totalQty,
          Min: ord.totalMin,
          "Shortage Qty": ord.shortage,
          "Set Order Qty": ord.orderQty,
        }
      ));

      const ws = XLSX.utils.json_to_sheet(sheetData);
      
      XLSX.utils.book_append_sheet(workbook, ws, supplier);
      
    });

    XLSX.writeFile(workbook, "restock_by_supplier.xlsx")
  };

// Parsing
useEffect(() => {
  const savedAppData = localStorage.getItem("toolroomAppData");

  if (savedAppData) {
    const parsed = JSON.parse(savedAppData);

    if (!parsed.nextTranId)
      console.log("Just Parsed undefined parsed.nextTranId");
      
    setNextTranId(parsed.nextTranId);
    console.log("parsed.nextTranId: ", parsed.nextTranId);
    console.log("parsed.tranRecords: ", parsed.tranRecords);
    // const tranIdObj: NextTranIdType = {id: parsed.nextTranId.id };
    // setNextTranId(tranIdObj);

    setEmps(parsed.emps);
    setDepts(parsed.depts);
    setItems(parsed.items);
    setBins(parsed.bins);
    setCribs(parsed.cribs);
    setSuppliers(parsed.suppliers);

    const newTranRecords = parsed.tranRecords.map( (rec:TransactionModel) => {
      const strTranDate = rec.tranDate;
      console.log("strTranDate: ", strTranDate);
      return {...rec, tranDate: new Date(strTranDate)}
    });
    setTranRecords(newTranRecords);    

    // setIssueRecords(parsed.issueRecords);

  } else {
    initDemoData();
  }

  setIsLoaded(true);
}, []);


// Saving
useEffect(() => {
  if (!isLoaded) return;

  const appData = {
    nextTranId,
    emps,
    depts,
    items,
    bins,
    cribs,
    suppliers,
    tranRecords,
    
    // issueRecords,
  };

  localStorage.setItem("toolroomAppData", JSON.stringify(appData));

  if (!nextTranId )
    console.log("undefined nextTranId was saved");
    

// }, [isLoaded, emps, depts, items, bins, cribs, suppliers, tranRecords, nextTranId, issueRecords]);
}, [isLoaded, emps, depts, items, bins, cribs, suppliers, tranRecords, nextTranId, ]);

//=================================================================================
  return (
   
    <div>
      <Toaster position="top-right" />
      
      {/* <Router>       */}
        {!loggedInEmp &&<MyNavbar />}

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
                resetItem={resetItem}
              />} 
            />
            <Route path="/items/add"
              element={ <AddItem
                          suppliers={suppliers}
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
            <Route path="/items/:itemCode/edit"
              element={ <EditItem 
                          items={items}
                          suppliers={suppliers}
                          itemNumber={itemNumber}
                          setItemNumber={setItemNumber}
                          selectedSupplier={selectedSupplier}
                          setSelectedSupplier={setSelectedSupplier}
                          itemSupCode={itemSupCode}
                          setItemSupCode={setItemSupCode}
                          
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
                          
                          lookupUPC={lookupUPC}
                          setLookupUPC={setLookupUPC}
                          isLookupSupOpen={isLookupSupOpen}
                          setIsLookupSupOpen={setIsLookupSupOpen}
                          isItemActive={isItemActive}
                          setIsItemActive={setIsItemActive}
                          onLookupUPCSubmit={onLookupUPCSubmit}
                          handleEditItem={handleEditItem}
                          handleDeleteItem={handleDeleteItem}
                          handleLookupUPCChange={handleLookupUPCChange}
                          cancelEditItem={cancelItem}
                          itemDateCreated={itemDateCreated}
                          setItemDateCreated={setItemDateCreated}
                          isItemDisabled={isItemDisabled}
                          setIsItemDisabled={setIsItemDisabled}
                          isItemAssignedToBin={isItemAssignedToBin}
                          disableItem={disableItem}
            />

              }
            />
            <Route path="/bins" 
              element={<Bins 
                cribs={cribs} items={items} bins={bins} setBins={setBins} binNumber={binNumber} selectedItem={selectedItem} resetBin={resetBin}/>} 
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
                depts={depts} setDepts={setDepts} deptNumber={deptNumber} resetDept={resetDept}/>} 
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
                emps={emps} setEmps={setEmps} depts={depts} resetEmp={resetEmp}/>} 
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
                suppliers={suppliers} 
                setSuppliers={setSuppliers} 
                supplierNumber={supplierNumber}
                resetSup={resetSup}
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
                supplierCountry={supplierCountry}
                setSupplierCountry={setSupplierCountry}
                supplierCurrency={supplierCurrency}
                setSupplierCurrency={setSupplierCurrency}
                // supplierContact
                setSupplierContact={setSupplierContact}
                // supplierPhone
                setSupplierPhone={setSupplierPhone}
                // supplierFax
                setSupplierFax={setSupplierFax}
                isRegrinder={isRegrinder}
                setIsRegrinder={setIsRegrinder}
                isCalibrator={isCalibrator}
                setIsCalibrator={setIsCalibrator}
                supplierServiceFee={supplierServiceFee}
                setSupplierServiceFee={setSupplierServiceFee}
                handleAddSupplier={handleAddSupplier}
                cancellAddSupplier={cancelSupplier}
              />} 
            />
            <Route path="/suppliers/:supCode/edit"
              element={<EditSupplier
                suppliers={suppliers}
                supplierNumber={supplierNumber}
                setSupplierNumber={setSupplierNumber}
                supplierName={supplierName}
                setSupplierName={setSupplierName}
                supplierEmail={supplierEmail}
                setSupplierEmail={setSupplierEmail}
                supplierAddr1={supplierAddr1}
                setSupplierAddr1={setSupplierAddr1}
                supplierAddr2={supplierAddr2}
                setSupplierAddr2={setSupplierAddr2}
                supplierCity={supplierCity}
                setSupplierCity={setSupplierCity}
                supplierState={supplierState}
                setSupplierState={setSupplierState}
                supplierZip={supplierZip}
                setSupplierZip={setSupplierZip}
                supplierCountry={supplierCountry}
                setSupplierCountry={setSupplierCountry}
                supplierCurrency={supplierCurrency}
                setSupplierCurrency={setSupplierCurrency}
                supplierContact={supplierContact}
                setSupplierContact={setSupplierContact}
                supplierPhone={supplierPhone}
                setSupplierPhone={setSupplierPhone}
                supplierFax={supplierFax}
                setSupplierFax={setSupplierFax}
                isRegrinder={isRegrinder}
                setIsRegrinder={setIsRegrinder}
                isCalibrator={isCalibrator}
                setIsCalibrator={setIsCalibrator}
                supplierServiceFee={supplierServiceFee}
                setSupplierServiceFee={setSupplierServiceFee}
                isSupplierActive={isSupplierActive}
                setIsSupplierActive={setIsSupplierActive}
                handleEditSupplier={handleEditSupplier}
                handleDeleteSupplier={handleDeleteSupplier}
                cancelEditSupplier={cancelSupplier}
              />}
            />
            <Route 
              path="/restocklist"
              element={<RestockOrderList
              bins={bins}
              items={items}
              suppliers={suppliers}
              handleOrderExport={handleOrderExport}
            />}
            />

            <Route path="/print/:itemCode" element={<PrintWrapper />} />
  

            <Route
              path="/login"
              element={<Login  
                nextTranId={nextTranId}
                emps={emps}
                scannedBadgeNo={scannedBadgeNo} 
                setScannedBadgeNo={setScannedBadgeNo}
                loggedInEmp={loggedInEmp}
                setLoggedInEmp={setLoggedInEmp}
                handleBadgeSubmit={handleBadgeSubmit}
                error={error}
                setError={setError}
              />}
            />

            <Route 
              path='/main-menu'
              element={<MainMenu 
                loggedInEmp={loggedInEmp}
                handleLogOut={handleLogOut}
                hasOpenIssue={hasOpenIssue}  
                setHasOpenIssue={setHasOpenIssue}
              />}
            />
            
            <Route 
              path='/issue'
              element={< Issue
                items={items}
                bins={bins}
                setBins={setBins}
                handleLogOut={handleLogOut}
                empCode={scannedBadgeNo}
                tranRecords={tranRecords}
                nextTranId={nextTranId}
                setNextTranId={setNextTranId}
                setTranRecords={setTranRecords}  
                issueRecords={issueRecords}
                setIssueRecords={setIssueRecords}
              />}
            />
            
            <Route 
              path='/transactions'
              element={< Transactions
                tranRecords={tranRecords}
              />}
            />

            <Route 
              path='/return'
              element={<Return
                 />}
            />

            <Route 
              path='/stock'
              element={<Stock 
                items={items}
                bins={bins}
                handleLogOut={handleLogOut}
              />}
            />
            
            <Route 
              path='/physical-count'
              element={<PhysicalCount 
              />}
            />

            <Route />
          </Routes>
        </div>
      {/* </Router> */}
    </div>
  );
}



