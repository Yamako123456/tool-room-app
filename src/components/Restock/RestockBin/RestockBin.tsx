import React from 'react'
import { BinModel } from '../../../models/BinsModel';
import { ItemModel } from '../../../models/ItemModel';
interface Props {
  bins: BinModel[];
  items: ItemModel[];
  stockQty: number;
  setStockQty: React.Dispatch<React.SetStateAction<number>>;
}

const RestockBin = (props: Props) => {

  const getStatus = (qty: number, min: number) => {
    if (qty === 0 ) return { label: "Empty", color: "text-red-600"} ;
    if (qty < min) return { label: "Low", color: "text-yellow-600" };
    return { lablel: "OK", color: "text-green-600" };
  }

  return (
    <div className='relative flex items-center'>
      <h1 className=' absolute left-1/2 text-2xl lg:-translate-x-1/2 font-semibold'>     
      Restock Bin </h1>
    </div>
  )
}

export default RestockBin