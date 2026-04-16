import React, { useMemo, useState } from 'react'

interface Props {
  isOpen: boolean;
  emps: EmpModel[];
  onClose: () => void;
  onSelect: (emp: EmpModel) => void;
}

const EmpLookup = ({ isOpen, emps, onClose, onSelect}: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const filteredEmps = useMemo(() => {
    const lowerKeyword = keyword.trimEnd().toLowerCase();
    return emps.filter((emp) => emp.firstName.toLowerCase().includes(lowerKeyword)
      || emp.lastName.toLowerCase().includes(lowerKeyword)
      || emp.badgeNo.toLowerCase().includes(lowerKeyword) );
  }, [emps, keyword]);

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
          {filteredEmps.length > 0 ? (
            filteredEmps.map((emp) => (
              <button 
                key={emp.badgeNo}
                type='button'
                onClick={() => onSelect(emp)}
                className='w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black    border-b'
              >
                <div className='font-medium'> {emp.badgeNo} </div>
                <div className='text-sm'> {emp.firstName + " " + emp.lastName} </div>
              </button>
            ))
          ) : (
            <div className='p-4 text-sm text-gray-500'>
              No Employees found
            </div>

          )}
        </div>
        
      </div>
      <div className='max-h=80 overflow-y-auto border rounded-md'>

      </div>
    </div>
  )
}

export default EmpLookup