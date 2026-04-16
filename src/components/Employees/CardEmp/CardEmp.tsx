import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel';

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
      
      <h2 className="text-xl font-bold text-gray-800 mb-4">Badge Number:  {aEmp.badgeNo}</h2>

      <div className="space-y-2 text-black">
        <p>
          <span className="font-semibold">Name:</span> {aEmp.firstName + " " + aEmp.lastName }
        </p>     
        <p>
          <span className="font-semibold">Department:</span> {dept ? dept.deptCode + " -  " + dept.description : "Not Assigned" }
        </p>        
      </div>
    </div>  
  )
}

export default CardEmp