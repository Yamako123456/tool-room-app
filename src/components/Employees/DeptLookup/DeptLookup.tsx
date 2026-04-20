import React, { useMemo, useState } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';

interface Props {
  isOpen: boolean;
  depts: DepartmentModel[];
  onClose: () => void;
  onSelect: (emp: DepartmentModel) => void;
}

const DeptLookup = ({isOpen, depts, onClose, onSelect}: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const filteredDepts = useMemo(() => {
    const lowerKeyword = keyword.trimEnd().toLowerCase();
    return depts.filter((dept) => dept.deptCode.toLowerCase().includes(lowerKeyword)
      || dept.description.toLowerCase().includes(lowerKeyword)
      );
  }, [depts, keyword]);

  if (!isOpen) return null;
  
  return (
     <div className='fixed inset-0 z-50flex items-center justify-center bg-black/90 text-white'>
      <div className='w-full max-w-3xl rounded-xl bg-white shadow-lg'>
        <div className='flex items-center justify-between border-b px-4 py=3'>
            <h2 className='text-xl font-bold text-black'>
              Employee Lookup
            </h2>
            <button onClick={onClose}
              className='text-gray-500 hover:text-black'
            >
              X
            </button>
        </div>
      </div>
      <div className='p-4 space-y-4'>
        <input 
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search by item code or description 1'
          className='w-full rounded-md border px-2 py-2'
        />
        <div className='max-h-80 overflow-y-auto border rounded-md'>
          {filteredDepts.length > 0 ? (
            filteredDepts.map((dept) => (
              <button 
                key={dept.deptCode}
                type='button'
                onClick={() => onSelect(dept)}
                className='w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black    border-b'
              >
                <div className='font-medium'> {dept.deptCode} </div>
                <div className='text-sm'> {dept.deptCode + " - " + dept.description} </div>
              </button>
            ))
          ) : (
            <div className='p-4 text-sm text-gray-500'>
              No department found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeptLookup