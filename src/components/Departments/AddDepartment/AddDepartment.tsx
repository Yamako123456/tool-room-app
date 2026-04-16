import React, { useEffect } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';
import EmpLookup from '../EmpLookup/EmpLookup';

interface Props {
  emps: EmpModel[];
  managerBadgeNo: string | undefined;
  setManagerBadgeNo: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedManager: EmpModel | null;
  setSelectedManager:  React.Dispatch<React.SetStateAction<EmpModel | null>>;
  setDeptNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAddDept: () => void;
  isLookupEmpOpen: boolean;
  setIsLookupEmpOpen: React.Dispatch<React.SetStateAction<boolean>>; 
  cancelAddDept: () => void;
}

const AddDepartment = ({
  emps, managerBadgeNo, setManagerBadgeNo, selectedManager, 
  setSelectedManager, setDeptNumber, handleAddDept, isLookupEmpOpen, 
  setIsLookupEmpOpen, cancelAddDept
}: Props) => {

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Bin</h1>
          <p className="text-sm text-gray-500">Create a new bin and assign an item.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bin Number</label>
            <input
              type="text"
              
              onChange={(e) => setDeptNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter bin number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assign Manager</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedManager ? `${selectedManager.badgeNo} - ${selectedManager.firstName + " " + selectedManager.lastName}`  : ""}
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                placeholder={`${!selectedManager ? "Use Lookup to select Managager" : "" }`}
              />
              <button type='button' 
                onClick={() => setIsLookupEmpOpen(true)}
                className='rounded-md border px-4 py-2 hover:bg-green-100'
              > 
                Lookup 
              </button>
              
               <EmpLookup
                isOpen={isLookupEmpOpen}
                emps={emps}
                onClose={() => setIsLookupEmpOpen(false)}
                onSelect={(emp: EmpModel) => {
                  setSelectedManager(emp);
                  setManagerBadgeNo(emp.badgeNo);
                  setIsLookupEmpOpen(false);
                }}
              />

             <button 
                type='button' 
                onClick={() =>{
                  setSelectedManager(null); 
                  setManagerBadgeNo(undefined); 
                  setIsLookupEmpOpen(false)}}
                className='rounded-md border px-4 py-2'                  
              > 
              Clear 
              </button>
            </div>      
          </div>          
        </div>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            // onClick={Navigate()}
            onClick={ cancelAddDept }

          >Cancel</button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleAddDept }
          > Save Department </button>
        </div>
      </div>
    </div>
  )
}

export default AddDepartment