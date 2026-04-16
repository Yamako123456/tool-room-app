import React, { useEffect } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';
import EmpLookup from '../EmpLookup/EmpLookup';

interface Props {
  emps: EmpModel[];
  depts: DepartmentModel[];
  setDeptNumber: React.Dispatch<React.SetStateAction<string>>;
  selectedManager: EmpModel | null;
  setSelectedManager:  React.Dispatch<React.SetStateAction<EmpModel | null>>;
  managerBadgeNo: string;
  setManagerBadgeNo: React.Dispatch<React.SetStateAction<string | undefined>>;
  isDeptActive: boolean;
  setIsDeptActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditDept: () => void;
  handleDeleteDept: () => void;
  isLookupEmpOpen: boolean;
  setIsLookupEmpOpen: React.Dispatch<React.SetStateAction<boolean>>; 
  cancelEditDept: () => void;
}

const EditDepartment = ({
  emps, depts, setDeptNumber, selectedManager, setSelectedManager, managerBadgeNo, setManagerBadgeNo, 
  isDeptActive, setIsDeptActive, handleEditDept, handleDeleteDept, isLookupEmpOpen, setIsLookupEmpOpen, 
  cancelEditDept
}: Props) => {

  const { deptCode} = useParams<{deptCode: string}>();
  const selectedDept = depts.find((dept) => dept.deptCode === deptCode);

  useEffect(() => {
      setDeptNumber(selectedDept?.deptCode ?? "");    
      setManagerBadgeNo(selectedDept?.managerId ?? "");      
      setIsDeptActive(selectedDept?.active ?? false);

      const foundEmp = emps.find((emp) => emp.badgeNo === selectedDept?.managerId);
        setSelectedManager( foundEmp?? null);
      
  }, [selectedDept, emps, setDeptNumber, setManagerBadgeNo, setIsDeptActive]);

  if (!selectedDept) return;

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Department: {deptCode}</h1>
          {isDeptActive && (
            <p 
            className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md text-sm"
          >
              ⚠️ This department is active. Only manager can be edited.
          </p> )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Department Code</label>
            <input
              readOnly
              value={deptCode}
              type="text"              
              // onChange={(e) => setDeptNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"              
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1"> Assign Manager</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedManager ? `${selectedManager.badgeNo} - ${selectedManager.firstName + " " + selectedManager.lastName}`  : ""}
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                placeholder={`${!selectedManager ? "Use Lookup to select manager" : "" }`}
              />
              <button type='button' 
                disabled={isDeptActive}
                onClick={() => setIsLookupEmpOpen(true)}
                className={`rounded-md border px-4 py-2
                   ${ isDeptActive ? "opacity=50 cursor-not-allowed" : "hover:bg-green-100"}`}
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
                disabled={isDeptActive}
                onClick={() =>{
                  setSelectedManager(null); 
                  setManagerBadgeNo(undefined); 
                  setIsLookupEmpOpen(false)}}
                className={`rounded-md border px-4 py-2
                  ${ isDeptActive ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-100"} `}
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