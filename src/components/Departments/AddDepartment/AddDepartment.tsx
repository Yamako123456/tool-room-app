import React, { useEffect } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';
import EmpLookup from '../EmpLookup/EmpLookup';

interface Props {
  setDeptNumber: React.Dispatch<React.SetStateAction<string>>;
  setDeptName: React.Dispatch<React.SetStateAction<string>>;
  handleAddDept: () => void;
  cancelAddDept: () => void;
}

const AddDepartment = ({
  setDeptNumber, setDeptName, handleAddDept, cancelAddDept
}: Props) => {

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Department</h1>
          <p className="text-sm text-gray-500">Create a new department.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Department Code</label>
            <input
              type="text"              
              onChange={(e) => setDeptNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter bin number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Department Name</label>
            <input
              type="text"              
              onChange={(e) => setDeptName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter bin number"
            />
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