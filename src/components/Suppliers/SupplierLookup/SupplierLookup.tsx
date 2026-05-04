import React, { useMemo, useState } from 'react'
import { SupplierModel } from '../../../models/SupplierModel';

interface Props {
  isOpen: boolean;
  suppliers: SupplierModel[];
  onClose: () => void;
  onSelect: (sup: SupplierModel) => void;
}

const SupplierLookup = ({isOpen, suppliers, onClose, onSelect}: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  
  const filterSuppliers = useMemo( () => {
    const lowerKeyword = keyword.trim().toLowerCase();
    return suppliers.filter((sup) => sup.supCode.toLowerCase().includes(lowerKeyword) ||
      sup.name.toLowerCase().includes(lowerKeyword)      
    );

  }, [keyword, suppliers]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 text-white'>
      <div className='w-full max-w-3xl rounded-xl bg-white shadow-lg flex items-center justify-between px-4 py-2'>
        <h2 className='text-xl font-bold text-black'>
          Supplier Lookup
        </h2>
        <button
          onClick={onClose}
          className='text-gray-500 hover:text-black'
        >
          CLOSE X
        </button>
      </div>
      <div className='p-4 space-y'>
        <input
          type='text'
          value={keyword}  
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search by supplier code or name'
          className='w-full rounded-md border px-4 py-2 text-black'
        />
        <div className='max-h-180 overflow-y-auto border rounded-md'>
          {filterSuppliers.length > 0 ? (
            filterSuppliers.map( sup => (
              <button
                type='button'
                key={sup.supCode}
                onClick={() => onSelect(sup)}
                className='w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b'
              >
                <div className='font-medium'>
                  {sup.supCode}
                </div>
                <div className='text-sm'>
                  {sup.name}
                </div>
              </button>

            ))
          ) : (
            <div className='p-4 text-sm text-gray-500'>
              No supplier found
            </div>  
          )}
        </div>      
      
      </div>

    </div>
  )
}

export default SupplierLookup