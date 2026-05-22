import React from 'react'
import { ItemModel } from '../../../models/ItemModel'
import { SupplierModel } from '../../../models/SupplierModel';

interface Props {
  aItem: ItemModel;
  suppliers: SupplierModel[];
  onEditItem: (itemCode: string) => void;
  formatDate: (date: Date | string) => string;
}

const CardItem = ({aItem, suppliers, onEditItem, formatDate}: Props) => {
  const supplier = suppliers.find(supp => supp.supCode === aItem.supCode);

  return (
    <div className='relative w-[300px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-green-100'>
      <div className='flex justify-end mb-2'>
        <button 
          onClick={() => onEditItem(aItem.code)}
          className='text-sm bg-blue-500 hover:bg-blue-600 border text-white px-3 py-1 rounded-lg'
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
        <span className='text-sm'>
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
        <span className='text-sm'>
          {aItem.itemType}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Unit Price:
        </span>
        <span className='text-sm'>
          {aItem.unitPrice}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Issue Cost:
        </span>
        <span className='ext-sm'>
          {aItem.issueCost}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
         UoM:
        </span>
        <span className='text-sm'>
          {aItem.uom}
        </span>  
      </div>
              
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
         Pack Qty:
        </span>
        <span className='text-sm'>
          {aItem.packQty}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
         Mfg.:
        </span>
        <span className='text-sm'>
          {aItem.mfg}
        </span>  
      </div>     
            <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
         Mfg item/UPC.:
        </span>
        <span className='text-sm'>
          {aItem.mfgItem}
        </span>  
      </div>  
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Supplier Code:
        </span>
        <span className='text-sm'>
          {supplier?.supCode}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Supp. Name:
        </span>
        <span className='text-sm'>
          {supplier?.name}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Lead Time:
        </span>
        <span className='text-sm'>
          {aItem.leadTime} {aItem.leadTime > 1 ? "days" : "day"}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Order Qty:
        </span>
        <span className='text-sm'>
          {aItem.orderQty}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Date Created:
        </span>
        <span className='text-sm'>
          { formatDate(aItem.dateCreated) }
        </span>  
      </div>
    </div>
  )
}

export default CardItem