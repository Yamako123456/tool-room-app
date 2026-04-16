import React, { useEffect } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';
import EmpLookup from '../EmpLookup/EmpLookup';

interface Props {
  depts: DepartmentModel[];
  deptNumber: string;
  setDeptNumber: React.Dispatch<React.SetStateAction<string>>;
  deptName: string;
  setDeptName:  React.Dispatch<React.SetStateAction<string>>;
  isDeptActive: boolean;
  setIsDeptActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditDept: () => void;
  handleDeleteDept: () => void;
  cancelEditDept: () => void;
}

const EditDepartment = ({
  depts, deptNumber, setDeptNumber, deptName, setDeptName, isDeptActive, setIsDeptActive, handleEditDept, handleDeleteDept,  cancelEditDept
}: Props) => {

  const { deptCode} = useParams<{deptCode: string}>();
  const selectedDept = depts.find((dept) => dept.deptCode === deptCode);

  useEffect(() => {
      setDeptNumber(selectedDept?.deptCode ?? "");    
      setDeptName(selectedDept?.description ?? "");
      setIsDeptActive(selectedDept?.active ?? false);
      
  }, [selectedDept, setDeptNumber, setDeptName, setIsDeptActive]);

  if (!selectedDept) return;

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Department: {deptCode}</h1>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Department Code</label>
            <input
              readOnly
              value={deptCode}
              type="text"              
              className="w-full rounded-md border px-3 py-2"              
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Department Name</label>
            <input
              type="text"   
              value={deptName}           
              onChange={(e) => setDeptName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter bin number"
            />
          </div>   
        </div>
        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            onClick={ cancelEditDept }
          >
            Cancel
          </button>          
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleEditDept }
          >
             Save Changes 
          </button>
        </div>
      </div>
                
      {/* Danger Zone */}
      { !selectedDept.active && 
      <div className='mt-10 border border-red-300 rounded-lgp-4 bg-red-50'>
        <h2 className='text-red-700 text-2xl font-semibold" mb-2'>
          Delete Unused Bin
        </h2>
        <p className='text-sm text-red-600 mb-4'> 
          This department has not been used yet and can be safely removed.
        </p>
        <button
          className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'
          onClick={ () => { if (window.confirm(`Delete this unused bin: ${selectedDept.deptCode}?`)) {handleDeleteDept() } } }                    
        >
        </button>
      </div>      
      }
    </div>
  )
}

export default EditDepartment