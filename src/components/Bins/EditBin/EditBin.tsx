import React, { SyntheticEvent, useEffect, useState } from 'react'
import ItemLookup from '../ItemLookup/ItemLookup';
import { BinModel } from '../../../models/BinsModel'
import { Navigate, useParams } from 'react-router-dom';

interface Props { 
  items: ItemModel[];
  bins: BinModel[];
  cribs: CribModel[];
  selectedItem: ItemModel | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<ItemModel | null>>;

  setBinNumber: React.Dispatch<React.SetStateAction<string>>;
  handleEditBin: () => void;
  isLookupOpen: boolean;
  setIsLookupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelAddBin: () => void;
  min: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
}

const EditBin =  ({ items, bins, cribs, selectedItem, setSelectedItem,  setBinNumber, handleEditBin, isLookupOpen, setIsLookupOpen, cancelAddBin, min, setMin }: Props) => {

  const { binCode } = useParams<{ binCode: string }>();
  const selectedBin = bins.find((bin) => bin.binCode === binCode);
  const isActive = selectedBin?.active;

  useEffect(() => {
    if (!selectedBin) return;

    setBinNumber(selectedBin.binCode);
    selectedBin.min ? setMin(selectedBin.min) : setMin(5);
    const item = items.find((item) => item.code === selectedBin?.item);
    item ? setSelectedItem(item) : setSelectedItem(null);

  }, [selectedBin, items, setSelectedItem, setBinNumber, setMin]);
  
  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Bin: {binCode}</h1>
          {isActive && (
            <p 
            className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md text-sm"
          >
              ⚠️ This bin is active. Only minimum quantity can be edited.
          </p> )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bin Number</label>
            <input
              readOnly
              value={binCode}
              type="text"              
              onChange={(e) => setBinNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1"> Item</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={selectedItem ? `${selectedItem.code }, ${selectedItem.description1}` : "" }
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                
              />
              <button type='button' 
                onClick={() => setIsLookupOpen(true)}
                className='rounded-md border px-4 py-2 hover:bg-green-100'
              > Lookup </button>
              
              <ItemLookup
                isOpen={isLookupOpen}
                items={items}
                onClose={() => setIsLookupOpen(false)}
                onSelect={(item) => {
                  setSelectedItem(item);
                  setIsLookupOpen(false);
                }}
              />

              <button type='button' onClick={() =>{setSelectedItem(null); setIsLookupOpen(false)}}
                className='rounded-md border px-4 py-2  hover:bg-slate-100'
              > Clear </button>
            </div>
      
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Min Qty</label>
            <input
              type="number"
              
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter minimum quantity"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            // onClick={Navigate()}
            onClick={ cancelAddBin }

          >Cancel</button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleEditBin }
          > Save Bin </button>
        </div>
      </div>
    </div>
  )
}

export default EditBin


