import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel'

interface Props {
  aDept: DepartmentModel;
  onEditDept: (empCode: string) => void;
}

const CardDept = ({aDept, onEditDept} : Props) => {
  
  return (
    <div className="relative w-fit mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className='flex justify-end mb-2'>
        <button
          onClick={() => {
            onEditDept(aDept.deptCode)}
          }
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
          > Edit 
        </button>
      </div>
      
      <div className="flex gap-2 items-baseline font-semibold text-gray-800 mb-4">
        <span className="text-sm"> 
          Dept. Code:
          </span> 
        <span className='text-2xl'>
          {aDept.deptCode} 
        </span> 
      </div>

      <div className="flex gap-2 items-baseline gap-x-1 text-black">
          <span className="text-sm font-semibold">Name:</span> 
          <span className='text-xl'> {aDept.description}</span>
      </div>
    </div>  
  )
}

export default CardDept