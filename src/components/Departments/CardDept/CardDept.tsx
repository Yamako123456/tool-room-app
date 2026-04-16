import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel'

interface Props {
  aDept: DepartmentModel;
  emps: EmpModel[];
  onEditDept: (empCode: string) => void;
}

const CardDept = ({aDept, emps, onEditDept} : Props) => {
  
  const manager = emps.find( emp => emp.badgeNo ===  aDept.managerId);

  return (
      <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className='flex justify-end mb-2'>
        <button
          onClick={() => {
            onEditDept(aDept.deptCode)}
          }
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
          > Edit 
        </button>
      </div>
      
      <h2 className="text-xl font-bold text-gray-800 mb-4">Department Code:  {aDept.deptCode}</h2>

      <div className="space-y-2 text-black">
        <p>
          <span className="font-semibold">Dept. Name:</span> {aDept.description}
        </p>     
        <p>
          <span className="font-semibold">Manager:</span> {manager ? manager.firstName + " " + manager.lastName : "Not Assigned" }
        </p>        
      </div>
    </div>  
  )
}

export default CardDept