import React, { useState, SyntheticEvent } from 'react'
import ListBins from './ListBins/ListBins';
import { useNavigate } from 'react-router-dom';
import { BinModel } from '../../models/BinsModel'
import { ItemModel } from '../../models/ItemModel';

interface Props {
  cribs: CribModel[];
  items: ItemModel[];
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  binNumber: string;
  selectedItem: ItemModel | null;
  resetBin:  () => void;
}

const Bins = ({cribs, items, bins, setBins, binNumber, selectedItem, resetBin}: Props) => {
  
  const navigate = useNavigate() ;
 
  const onSearchSubmit = (e: any ) => {
    e.preventDefault();
    const keyword = e.target[0].value ? e.target[0].value.trim().toLowerCase() : "";
    const result =  keyword ? items.filter( item => {
      item.description1.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword)
    }) : items;
  }

  return (
    <section id="bins">
      <div className='relative flex items-center'>
        <h2 className="absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold">
          Manage Bins
        </h2>
        <button onClick={() => {resetBin(); navigate("/bins/add");}}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'>
          + Add Bin
        </button>
      </div>

      <ListBins bins={bins} setBins={setBins} items={items} />
    </section>
  )
}

export default Bins