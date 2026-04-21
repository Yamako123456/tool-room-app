import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';
import { EmpModel } from '../../../models/EmpModel';

interface Props {
  aEmp: EmpModel;
  depts: DepartmentModel[];
  onEditEmp: (badgeNo: string) => void;
}

const CardEmp = ({aEmp, depts, onEditEmp}: Props) => {
  
  const dept = depts.find( dept => dept.deptCode === aEmp.department);

  return (
    <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className='flex justify-end mb-2'>
        <button
          onClick={() => {
            onEditEmp(aEmp.badgeNo)}
          }
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
          > Edit 
        </button>
      </div>
      <div className="grid grid-cols-2 items-baseline gap-x-1 font-semibold text-gray-800 mb-4">
        <span className="text-sm"> 
          Badge No.:
        </span>  
        <span className='text-2xl'>
          {aEmp.badgeNo}
        </span>
      </div>
      
      <div className="grid grid-cols-2 items-baseline gap-x-1 text-black">
          <span className="text-sm font-semibold">Name:</span> 
          <span className='text-xl'> {aEmp.firstName + " " + aEmp.lastName }</span>
      </div>
      {aEmp.isSupervisor && <div className="text-sm font-semibold text-green-600">Supervisor</div>}
      {aEmp.isStocker && <div className="text-sm font-semibold text-blue-600">Stocker</div>}
      <div className="grid grid-cols-2 items-baseline gap-x-1 text-black">
          <span className="text-sm font-semibold">Department:</span> 
          <span className='text-xl'> {dept ? dept.deptCode + " -  " + dept.description : "Not Assigned" }</span>
      </div>
    </div>  
  )
}

export default CardEmp