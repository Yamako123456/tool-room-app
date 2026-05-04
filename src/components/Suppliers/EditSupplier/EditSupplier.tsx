import React, { useEffect } from 'react'
import { SupplierModel } from '../../../models/SupplierModel';
import { useParams } from 'react-router-dom';

interface Props {
    suppliers: SupplierModel[];
    supplierNumber: string;
    setSupplierNumber: React.Dispatch<React.SetStateAction<string>>;
    //------------
      supplierName: string;
      setSupplierName: React.Dispatch<React.SetStateAction<string>>;
      supplierEmail: string;
      setSupplierEmail: React.Dispatch<React.SetStateAction<string>>;
      supplierAddr1: string;
      setSupplierAddr1: React.Dispatch<React.SetStateAction<string>>;
      supplierAddr2: string;
      setSupplierAddr2: React.Dispatch<React.SetStateAction<string>>;
      supplierCity: string;
      setSupplierCity: React.Dispatch<React.SetStateAction<string>>;
      supplierState: string;
      setSupplierState: React.Dispatch<React.SetStateAction<string>>;
      supplierZip: string; 
      setSupplierZip: React.Dispatch<React.SetStateAction<string>>;
      supplierCountry: string;
      setSupplierCountry: React.Dispatch<React.SetStateAction<string>>;
      supplierCurrency: string;
      setSupplierCurrency: React.Dispatch<React.SetStateAction<string>>;
      supplierContact: string;
      setSupplierContact: React.Dispatch<React.SetStateAction<string>>;
      supplierPhone: string;
      setSupplierPhone: React.Dispatch<React.SetStateAction<string>>;
      supplierFax: string;
      setSupplierFax: React.Dispatch<React.SetStateAction<string>>;
      isRegrinder: boolean;
      setIsRegrinder: React.Dispatch<React.SetStateAction<boolean>>;
      isCalibrator: boolean;
      setIsCalibrator: React.Dispatch<React.SetStateAction<boolean>>;
      supplierServiceFee: number;
      setSupplierServiceFee: React.Dispatch<React.SetStateAction<number>>;
    //--------------
    isSupplierActive: boolean;
    setIsSupplierActive: React.Dispatch<React.SetStateAction<boolean>>;

    handleEditSupplier: () => void;
    handleDeleteSupplier: () => void;
    cancelEditSupplier: () => void;
}

const EditSupplier = ({
      suppliers,
      supplierNumber,
      setSupplierNumber,
      //------------
      supplierName,
      setSupplierName,
      supplierEmail,
      setSupplierEmail,
      supplierAddr1,
      setSupplierAddr1,
      supplierAddr2,
      setSupplierAddr2,
      supplierCity,
      setSupplierCity,
      supplierState,
      setSupplierState,
      supplierZip,
      setSupplierZip,
      supplierCountry,
      setSupplierCountry,
      supplierCurrency,
      setSupplierCurrency,
      supplierContact,
      setSupplierContact,
      supplierPhone,
      setSupplierPhone,
      supplierFax,
      setSupplierFax,
      isRegrinder,
      setIsRegrinder,
      isCalibrator,
      setIsCalibrator,
      supplierServiceFee,
      setSupplierServiceFee,
    //--------------
    isSupplierActive,
    setIsSupplierActive,

    handleEditSupplier,
    handleDeleteSupplier,
    cancelEditSupplier,

}: Props) => {

  const { supCode } = useParams<{ supCode: string}>();
  const selectedSup = suppliers.find(sup => sup.supCode === supCode);

  useEffect( () => {
  setSupplierNumber(selectedSup?.supCode ?? "")
  setSupplierName(selectedSup?.name ?? "");
  setSupplierEmail(selectedSup?.email ?? "");
  setSupplierAddr1(selectedSup?.addr1 ?? "");
  setSupplierAddr2(selectedSup?.addr1 ?? "");
  setSupplierCity(selectedSup?.city ?? "");
  setSupplierState(selectedSup?.state ?? "");
  setSupplierZip(selectedSup?.zip ?? "");
  setSupplierCountry(selectedSup?.country ?? "");
  setSupplierCurrency(selectedSup?.currencyType ?? "");
  setSupplierContact(selectedSup?.contact ?? "");
  setSupplierPhone(selectedSup?.phone ?? "");
  setSupplierFax(selectedSup?.fax ?? "");
  setIsRegrinder(selectedSup?.regrinder ?? false);
  setIsCalibrator(selectedSup?.calibrator ?? false);
  setSupplierServiceFee(selectedSup?.serviceFee ?? 0);
  setIsSupplierActive(selectedSup?.active ?? false);
  }, [selectedSup, suppliers]  );

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Supplier</h1>
          <p className="text-sm text-gray-500">Edit  a new supplier.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Supplier Code</label>
            <input
              readOnly
              type="text"    
              value={selectedSup?.supCode}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Supplier Name</label>
            <input
              type="text"   
              value={supplierName}           
              onChange={(e) => setSupplierName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>     
          <div>
            <label className="block text-sm font-medium mb-1"> Email </label>
            <input
              type="text"    
              value={supplierEmail}          
              onChange={(e) => setSupplierEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Street Addr-1</label>
            <input
              type="text"              
              value={supplierAddr1}
              onChange={(e) => setSupplierAddr1(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Street Addr-2</label>
            <input
              type="text"              
              value={supplierAddr2}
              onChange={(e) => setSupplierAddr2(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> City </label>
            <input
              type="text"   
              value={supplierCity}           
              onChange={(e) => setSupplierCity(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> State </label>
            <input
              type="text"              
              value={supplierState}
              onChange={(e) => setSupplierState(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Zip Code </label>
            <input
              type="text"              
              value={supplierZip}
              onChange={(e) => setSupplierZip(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Country </label>
            <input
              type="text"   
              value={supplierCountry}
              onChange={(e) => setSupplierCountry(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Currency Type</label>
            <input
              type="text"   
              value={supplierCurrency}         
              onChange={(e) => setSupplierCurrency(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Contact Name </label>
            <input
              type="text"   
              value={supplierContact}
              onChange={(e) => setSupplierContact(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Phone </label>
            <input
              type="text"   
              value={supplierPhone}
              onChange={(e) => setSupplierPhone(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
          <div>
            <label className="block text-sm font-medium mb-1"> Fax </label>
            <input
              type="text"   
              value={supplierFax}
              onChange={(e) => setSupplierFax(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>  

          <div className='flex gap-6'>
            <label className='flex items-center gap-2'>
              <input 
                type='checkbox'
                checked={isRegrinder}
                onChange={(e) => setIsRegrinder(e.target.checked)}
                className='h-4 w-4'
              >
              </input>
              <span></span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={isCalibrator}
                onChange={(e) => setIsCalibrator(e.target.checked)}
                className='h-4 w-4'
              >

              </input>
              <span></span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1"> Service fee </label>
            <input
              type="number"   
              value={supplierServiceFee}
              onChange={(e) => setSupplierServiceFee(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>    
        </div>
{/* //============================================================================ */}
        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            // onClick={Navigate()}
            onClick={ cancelEditSupplier }
          >Cancel</button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleEditSupplier }
          > Save Supplier </button>
        </div>
      </div>
    </div>
  )
}

export default EditSupplier