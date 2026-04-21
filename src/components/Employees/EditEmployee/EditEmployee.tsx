import React, { useEffect } from 'react'
import { EmpModel } from '../../../models/EmpModel';
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';
import DeptLookup from '../DeptLookup/DeptLookup';

interface Props {
  emps: EmpModel[];
  empBadgeNumber: string;
  setEmpBadgeNumber: React.Dispatch<React.SetStateAction<string>>;
  depts: DepartmentModel[];
  selectedDept: DepartmentModel | null;
  setSelectedDept: React.Dispatch<React.SetStateAction<DepartmentModel | null>>;
  empDeptNumber: string | undefined;
  setEmpDeptNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  isSupervisor: boolean;
  setIsSupervisor: React.Dispatch<React.SetStateAction<boolean>>;
  isStocker: boolean;
  setIsStocker: React.Dispatch<React.SetStateAction<boolean>>;
  isEmpActive: boolean
  setIsEmpActive: React.Dispatch<React.SetStateAction<boolean>>;
  isLookupDeptOpen: boolean;
  setIsLookupDeptOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelEditEmp: () => void;
  handleEditEmp: () => void;
  handleDeleteEmp: () => void;
}

const EditEmployee = ({
  emps,
  empBadgeNumber,
  setEmpBadgeNumber,
  depts,
  selectedDept,
  setSelectedDept,
  empDeptNumber,
  setEmpDeptNumber,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  isSupervisor,
  setIsSupervisor,
  isStocker,
  setIsStocker,
  isEmpActive,
  setIsEmpActive,
  isLookupDeptOpen,
  setIsLookupDeptOpen,
  cancelEditEmp,
  handleEditEmp,
  handleDeleteEmp,
}: Props) => {

  const { badgeNo } = useParams<{ badgeNo: string}>();
  const selectedEmp = emps.find(emp => emp.badgeNo === badgeNo);

  useEffect( () => {
    setEmpBadgeNumber(selectedEmp?.badgeNo ?? "");
    setFirstName(selectedEmp?.firstName ?? "")
    setLastName(selectedEmp?.lastName ?? "");
    setIsSupervisor(selectedEmp?.isSupervisor ?? false);
    setIsStocker(selectedEmp?.isStocker ?? false);
    setEmpDeptNumber(selectedEmp?.department ?? undefined);
    setIsEmpActive(selectedEmp?.active ?? false);

    const foundDept = depts.find(dept => dept.deptCode === selectedEmp?.department );
    setSelectedDept(foundDept ?? null);

  }, [selectedEmp, depts] );

  if (!selectedEmp) return;

  return (
    <div className='mb-1 block text-sm font-medium'>
      <div className='max-w-2xl mx-auto p-6 space-y-6' >
        <div className='space-x-5'>
          <h1 className='inline text-2xl font-semibold'>
            Edit Employee
          </h1>
          <p className="inline text-lg text-gray-500">
            {selectedEmp.badgeNo} - {selectedEmp.firstName}  {selectedEmp.lastName}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Badge #</label>
          <input
            type="text"
            readOnly
            value={badgeNo}
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="string"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="string"
            value={lastName}
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
                setEmpDeptNumber(dept.deptCode);
                setIsLookupDeptOpen(false);
              }}
            />

            <button type='button' 
              onClick={() =>{
                setSelectedDept(null); 
                setEmpDeptNumber(undefined)
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
          onClick={ cancelEditEmp }
        >Cancel
        </button>
        <button 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          onClick={ handleEditEmp }
        > Save Employee 
        </button>
      </div>
    </div>
  )
}

export default EditEmployee