import React from 'react'

interface Props {
  // supplierNumber: string;
  setSupplierNumber: React.Dispatch<React.SetStateAction<string>>;
  //supplierName: string;
  setSupplierName: React.Dispatch<React.SetStateAction<string>>;
  //supplierEmail: string;
  setSupplierEmail: React.Dispatch<React.SetStateAction<string>>;
  //supplierAddr1: string;
  setSupplierAddr1: React.Dispatch<React.SetStateAction<string>>;
  // supplierAddr2: string;
  setSupplierAddr2: React.Dispatch<React.SetStateAction<string>>;
  //supplierCity: string;
  setSupplierCity: React.Dispatch<React.SetStateAction<string>>;
  // supplierState: string;
  setSupplierState: React.Dispatch<React.SetStateAction<string>>;
  // supplierZip: string; 
  setSupplierZip: React.Dispatch<React.SetStateAction<string>>;
  // supplierCountry: string;
  setSupplierCountry: React.Dispatch<React.SetStateAction<string>>;
  // supplierCurrency: string;
  setSupplierCurrency: React.Dispatch<React.SetStateAction<string>>;
  // supplierContact: string;
  setSupplierContact: React.Dispatch<React.SetStateAction<string>>;
  // supplierPhone: string;
  setSupplierPhone: React.Dispatch<React.SetStateAction<string>>;
  // supplierFax: string;
  setSupplierFax: React.Dispatch<React.SetStateAction<string>>;
  // supplierIsGrinder: boolean;
  setSupplierIsGrinder: React.Dispatch<React.SetStateAction<boolean>>;
  // supplierIsCalibrator: boolean;
  setSupplierIsCalibrator: React.Dispatch<React.SetStateAction<boolean>>;
  // supplierServiceFee: number;
  setSupplierServiceFee: React.Dispatch<React.SetStateAction<number>>;
  handleAddSupplier: () => void;
  cancellAddSupplier: () => void;
}

const AddSupplier = ({
  //  supplierNumber,
  setSupplierNumber,
  //supplierName,
  setSupplierName,
  //supplierEmail,
  setSupplierEmail,
  //supplierAddr1,
  setSupplierAddr1,
  // supplierAddr2,
  setSupplierAddr2,
  //supplierCity,
  setSupplierCity,
  // supplierState,
  setSupplierState,
  // supplierZip,
  setSupplierZip,
  // supplierCountry,
  setSupplierCountry,
  // supplierCurrency,
  setSupplierCurrency,
  // supplierContact,
  setSupplierContact,
  // supplierPhone,
  setSupplierPhone,
  // supplierFax,
  setSupplierFax,
  // supplierIsGrinder,
  setSupplierIsGrinder,
  // supplierIsCalibrator,
  setSupplierIsCalibrator,
  // supplierServiceFee,
  setSupplierServiceFee,
  handleAddSupplier,
  cancellAddSupplier,
}: Props) => {

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Supplier</h1>
          <p className="text-sm text-gray-500">Create a new supplier.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Supplier Code</label>
            <input
              type="text"              
              onChange={(e) => setSupplierNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter supplier code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Supplier Name</label>
            <input
              type="text"              
              onChange={(e) => setSupplierName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter supplier name"
            />
          </div>        
        </div>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            // onClick={Navigate()}
            onClick={ cancellAddSupplier }
          >Cancel</button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleAddSupplier }
          > Save Supplier </button>
        </div>
      </div>
    </div>
  )
}

export default AddSupplier