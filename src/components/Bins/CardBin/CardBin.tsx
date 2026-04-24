import React from 'react'
import { BinModel } from '../../../models/BinsModel';
import { ItemModel } from '../../../models/ItemModel';

interface Props {
  aBin: BinModel;
  items: ItemModel[];
  onEditBin: (binCode: string) => void;
}

const CardBin = ({aBin, items, onEditBin }: Props) => {

  const item = items.find( itm => itm.code === aBin.item);

  return (
    // <div className="relative w-fit mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
    <div className="relative w-[320px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      
      <div className='flex justify-end mb-2'>
        <button
          onClick={() => {
            onEditBin(aBin.binCode)}
          }
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
          > Edit 
        </button>
      </div>
      
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className='text-sm font-semibold '>
          Bin Code:
        </span>
        <span className='text-2xl'>
            {aBin.binCode}
        </span>
      </div>

      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
            Item Code:
        </span> 
        <span className='text-xl'>
            {aBin.item ? aBin.item : "Not Assigned" }
        </span>
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Description:
        </span>
        <span className='text-xl'>
          {item?.description1}
        </span>  
      </div>
      <div className="flex gap-1 items-baseline  text-gray-800">
        <span className='m-2'>
          {item?.itemImage && (
            
            <img
            src={item.itemImage}
            alt={aBin.item}
            className="h-40 object-contain rounded border"
            />
          )}
        </span>
      </div>  
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Min Qty:
        </span> 
        <span className='text-xl'>
          {aBin.min}
        </span>
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Quantity:
        </span> 
        <span text-xl>
          {aBin.qty}
        </span>  
      </div>
    </div>
  )
}

export default CardBin