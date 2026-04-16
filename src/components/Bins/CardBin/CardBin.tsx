import React from 'react'
import { BinModel } from '../../../models/BinsModel';

interface Props {
  aBin: BinModel;
  items: ItemModel[];
  onEditBin: (binCode: string) => void;
}

const CardBin = ({aBin, items, onEditBin }: Props) => {

  const item = items.find( itm => itm.code === aBin.item);

  return (
    <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className='flex justify-end mb-2'>
        <button
          onClick={() => {
            onEditBin(aBin.binCode)}
          }
          className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg'
          > Edit 
        </button>
      </div>
      
      <h2 className="text-xl font-bold text-gray-800 mb-4">Bin Code:  {aBin.binCode}</h2>

      <div className="space-y-2 text-black">
        {/* <p>
          <span className="font-semibold">Toolroom:</span> {aBin.crib}
        </p>      */}
        <p>
          <span className="font-semibold">Item Code:</span> {aBin.item ? aBin.item : "Not Assigned" }
        </p>
        {item?.description1}
        {item?.itemImage && (
          <img
            src={item.itemImage}
            alt={aBin.item}
            className="w-12 h-12 object-contain rounded border"
          />
        )}
        <p>
          <span className="font-semibold">Min Qty:</span> {aBin.min}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {aBin.qty}
        </p>
        
      </div>
    </div>
  )
}

export default CardBin