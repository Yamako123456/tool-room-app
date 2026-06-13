import React, { useState } from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';
import { useNavigate } from 'react-router-dom';

interface Props {
  binCode: string;
  itemCode: string;
  bins: BinModel[];
  items: ItemModel[];
  returnableQty: number;
  setSelectedReturnBin: React.Dispatch<React.SetStateAction<BinModel | null>>;
  setSelectedReturnQty: React.Dispatch<React.SetStateAction<number>>;
}

const CardReturnBin = ({
  binCode,
  itemCode,
  bins,
  items,
  returnableQty,
  setSelectedReturnBin,
  setSelectedReturnQty,
}: Props) => {

  const navigate = useNavigate();

  const [returnBin, setReturnBin] = useState<BinModel | null>(null);
  const [returnQty, setReturnQty] = useState<number>(0);
  const [isQtyOpen, setIsQtyOpen] = useState<boolean>(false);

  const aBin = bins.find(bin => bin.binCode === binCode);
  if (!aBin)
    return null;
  const aItem = items.find(item => item.code === itemCode);
  if (!aItem)
    return null;

  return (
    <div className='w-[320px] max-w-full border rounded-lg border-gray-100 shadow-lg bg-white p-6'>
      <div className='flex justify-end mb-2'>
        <button 
          type='button'
          onClick={ () => {
            setReturnBin(aBin);
            setReturnQty(1);
            setIsQtyOpen(true);
          }}
          className='text-sm bg-green-500 hover:bg-green-600 border rounded-lg text-white px-3 py-1'
        >
            Return
        </button>
      </div>
      <img 
        src={aItem.itemImage}
        alt={aItem.code}
        className='w-20 h-20 object-contain rounded-lg border'
      />
      <div className='flex items-baseline gap-x-1 text-gray-800'>
        <span className='text-sm font-semibold'>
          Item Code
        </span>
        <span className='text-2xl'>
          {aItem.code}
        </span>
      </div>
      <div className='flex items-baseline gap-x-1 text-gray-800'>
        <span className='text-sm font-semibold' >
          Bin code
        </span>
        <span className='text-2xl'>
          {aBin.binCode}
        </span>
      </div>
      <div className='flex items-baseline gap-x-1 text-gray-800'>
        <span className='text-sm font-semibold' >
          Returnable Qty
        </span>
        <span className='text-2xl'>
          {returnableQty}
        </span>
      </div>  
    </div>
  )
}

export default CardReturnBin