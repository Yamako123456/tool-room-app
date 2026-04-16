import React, { SyntheticEvent, useState } from 'react'
import ItemLookup from '../ItemLookup/ItemLookup';
import { BinModel } from '../../../models/BinsModel'
import { Navigate } from 'react-router-dom';

interface Props { 
  items: ItemModel[];
  itemCode: string | undefined;
  setItemCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedItem: ItemModel | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<ItemModel | null>>;
  setBinNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAddBin: () => void;
  isLookupItemOpen: boolean;
  setIsLookupItemOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelAddBin: () => void;
  setMin: React.Dispatch<React.SetStateAction<number>>;
}

const AddBin = ({ 
        items,         
        itemCode, 
        setItemCode,
        selectedItem,
        setSelectedItem,  
        setBinNumber, 
        handleAddBin, 
        isLookupItemOpen, 
        setIsLookupItemOpen, 
        cancelAddBin,         
        setMin
        }: Props
      ) => {
  
  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Bin</h1>
          <p className="text-sm text-gray-500">Create a new bin and assign an item.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bin Number</label>
            <input
              type="text"
              
              onChange={(e) => setBinNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter bin number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assign Item</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedItem ? `${selectedItem.code} - ${selectedItem.description1}`  : ""}
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                placeholder={`${!selectedItem ? "Use Lookup to select item" : "" }`}
              />
              <button type='button' 
                onClick={() => setIsLookupItemOpen(true)}
                className='rounded-md border px-4 py-2 hover:bg-green-100'
              > 
                Lookup 
              </button>
              
              <ItemLookup
                isOpen={isLookupItemOpen}
                items={items}
                onClose={() => setIsLookupItemOpen(false)}
                onSelect={(item) => {
                  setSelectedItem(item);
                  setItemCode(item.code);
                  setIsLookupItemOpen(false);
                }}
              />

              <button type='button' 
                onClick={() =>{
                  setSelectedItem(null); 
                  setItemCode(undefined)
                  setIsLookupItemOpen(false)}}
                className='rounded-md border px-4 py-2  hover:bg-slate-100'
              > 
                Clear 
              </button>
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
            onClick={ handleAddBin }
          > Save Bin </button>
        </div>
      </div>
    </div>
  )
}

export default AddBin