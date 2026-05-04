import React from 'react'
import { SupplierModel } from '../../../models/SupplierModel';

interface Props {
  aSupplier: SupplierModel;
  onEditSup: (supCode: string) => void;
}

const CardSupplier = ({aSupplier, onEditSup}: Props) => {

  return (
    <div className='relative w-[300px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-gray-100'>
      <div className='flex justify-end mb-2'>
        <button 
          onClick={() => {
            onEditSup(aSupplier.supCode)
          }}
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
        >
          Edit
        </button>
      </div>
      
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Supplier Code:
        </span>    
        <span className='text-sm'>
          {aSupplier.supCode}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Name:
        </span>    
        <span className='text-sm'>
          {aSupplier.name}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Email:   
        </span>    
        <span className='text-sm'>
          {aSupplier.email}
        </span>
      </div>
        <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Strret Addr-1:
        </span>    
        <span className='text-sm'>
          {aSupplier.addr1}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Strret Addr-2:    
        </span>    
        <span className='text-sm'>
          {aSupplier.addr2}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          City:
        </span>    
        <span className='text-sm'>
          {aSupplier.city}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          State:          
        </span>    
        <span className='text-sm'>
          {aSupplier.state}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Zip Code:
        </span>    
        <span className='text-sm'>
          {aSupplier.zip}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Country:          
        </span>    
        <span className='text-sm'>
          {aSupplier.country}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Currency Type:          
        </span>    
        <span className='text-sm'>
          {aSupplier.currencyType}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Contact Name:          
        </span>    
        <span className='text-sm'>
          {aSupplier.contact}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Phone:          
        </span>    
        <span className='text-sm'>
          {aSupplier.phone}
        </span>
      </div>
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          Fax:          
        </span>    
        <span className='text-sm'>
          {aSupplier.fax}
        </span>
      </div>
      {aSupplier.regrinder && (
        <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold  text-blue-800'>
          Regrinder 
        </span>
      </div> )}
      {aSupplier.calibrator && (
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
          <span className='text-sm font-semibold  text-green-800'>
            Calibrator
          </span>    
      </div> ) }
      <div className='flex gap-2 items-baseline text-gray-800 mb-2'>
        <span className='text-sm font-semibold'>
          ServiceFee:          
        </span>    
        <span className='text-sm'>
          {aSupplier.serviceFee}
        </span>
      </div>
    </div>
  )
}

export default CardSupplier