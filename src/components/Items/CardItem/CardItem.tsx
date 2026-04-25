import React from 'react'
import { ItemModel } from '../../../models/ItemModel'

interface Props {
  aItem: ItemModel;
  suppliers: SupplierModel[];
  onEditItem: (itemCode: string) => void
}

const CardItem = ({aItem, suppliers, onEditItem}: Props) => {
  const supplier = suppliers.find(supp => supp.supCode === aItem.code);

  return (
    <div className='relative w-[320px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-green-100'>
      <div className='flex justify-end mb-2'>
        <button 
          onClick={() => onEditItem(aItem.code)}
        >
          Edit
        </button>
      </div>
      <div className='flex gap-x-1 items-baseline text-gray-800'>
        <span className='text-sm font-semibold'>
          Item Code:
        </span>
        <span className='text-2xld'>
          {aItem.code}
        </span>
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Description:
        </span>
        <span className='text-xl'>
          {aItem.description1}
        </span>  
      </div>
       <div className="flex gap-1 items-baseline  text-gray-800">
        <span className='m-2'>
          {aItem.itemImage && (
            
            <img
            src={aItem.itemImage}
            alt={aItem.code}
            className="h-40 object-contain rounded border"
            />
          )}
        </span>
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Item Type:
        </span>
        <span className='text-xl'>
          {aItem.itemType}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Supplier Code:
        </span>
        <span className='text-xl'>
          {supplier?.supCode}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Supplier Name:
        </span>
        <span className='text-xl'>
          {supplier?.name}
        </span>  
      </div>
    </div>
  )
}

export default CardItem