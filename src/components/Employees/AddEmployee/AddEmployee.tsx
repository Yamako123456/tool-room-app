import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { EmpModel } from '../../../models/EmpModel';
import DeptLookup from '../../Departments/DeptLookup/DeptLookup';

interface Props {
    emps: EmpModel[];
    deptCode: string | undefined;
    setDeptCode: React.Dispatch<React.SetStateAction<string | undefined>>;
    selectedDept: DepartmentModel | null;
    setSelectedDept: React.Dispatch<React.SetStateAction<DepartmentModel | null>>;
    setEmpBadgeNumber: React.Dispatch<React.SetStateAction<string>>;
    handleAddEmp: () => void;
    isLookupDeptOpen: boolean;
    setIsLookupDeptOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cancelAddEmp: () => void;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    isSupervisor: boolean;
    setIsSupervisor: React.Dispatch<React.SetStateAction<boolean>>;
    isStocker: boolean;
    setIsStocker: React.Dispatch<React.SetStateAction<boolean>>;
    depts: DepartmentModel[];
}

const AddEmployee = ({    
    emps,
    deptCode,
    setDeptCode,
    selectedDept,
    setSelectedDept,
    setEmpBadgeNumber,
    handleAddEmp,
    isLookupDeptOpen,
    setIsLookupDeptOpen,
    cancelAddEmp,
    setFirstName,
    setLastName,
    isSupervisor,
    setIsSupervisor,
    isStocker,
    setIsStocker,
    depts
  }: Props) => {
  return (
        <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Employee</h1>
          <p className="text-sm text-gray-500">Create a new employee.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Badge #</label>
            <input
              type="text"
              
              onChange={(e) => setEmpBadgeNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter badge #"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="string"
              
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="string"
              
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter first name"
            />
          </div>
          <div className='flex gap-6'>
            <label className='flex items-center gap-2'>
              <input 
                type='checkbox'
                checked={isSupervisor}
                onChange={(e) => setIsSupervisor(e.target.checked)}
                className='h-4 w-4'
              />
              <span>Supervisor</span>
            </label>
            <label className='flex items-center gap-2'>
              <input 
                type='checkbox'
                checked={isStocker}
                onChange={(e) => setIsStocker(e.target.checked)}
                className='h-4 w-4'
              />
              <span>Stocker</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assign Department</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedDept ? `${selectedDept.deptCode} - ${selectedDept.description}`  : ""}
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                placeholder={`${!selectedDept ? "Use Lookup to select Department" : "" }`}
              />
              <button type='button' 
                onClick={() => setIsLookupDeptOpen(true)}
                className='rounded-md border px-4 py-2 hover:bg-green-100'
              > 
                Lookup 
              </button>
              
              <DeptLookup
                isOpen={isLookupDeptOpen}
                depts={depts}
                onClose={() => setIsLookupDeptOpen(false)}
                onSelect={(dept) => {
                  setSelectedDept(dept);
                  setDeptCode(dept.deptCode);
                  setIsLookupDeptOpen(false);
                }}
              />

              <button type='button' 
                onClick={() =>{
                  setSelectedDept(null); 
                  setDeptCode(undefined)
                  setIsLookupDeptOpen(false)}}
                className='rounded-md border px-4 py-2  hover:bg-slate-100'
              > 
                Clear 
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            onClick={ cancelAddEmp }
          >Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleAddEmp }
          > Save Employee 
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee