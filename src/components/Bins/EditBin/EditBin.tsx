import React, { SyntheticEvent, useEffect, useState } from 'react'
import ItemLookup from '../ItemLookup/ItemLookup';
import { BinModel } from '../../../models/BinsModel'
import { Navigate, useParams } from 'react-router-dom';

interface Props { 
  items: ItemModel[];
  bins: BinModel[];
  setBinNumber: React.Dispatch<React.SetStateAction<string>>;
  setCribNumber: React.Dispatch<React.SetStateAction<string>>;
  selectedItem: ItemModel | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<ItemModel | null>>;
  itemCode: string | undefined;
  setItemCode:  React.Dispatch<React.SetStateAction<string | undefined>>;
  setQty: React.Dispatch<React.SetStateAction<number>>; 
  min: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  isBinActive: boolean;
  setIsBinActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditBin: () => void;
  handleDeleteBin: () => void;
  isLookupItemOpen: boolean;
  setIsLookupItemOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelEditBin: () => void;
}

const EditBin =  ({ 
    items, 
    bins,     
    setBinNumber,
    setCribNumber, 
    selectedItem, 
    setSelectedItem,  
    itemCode,
    setItemCode,
    setQty,
    min, 
    setMin, 
    isBinActive, 
    setIsBinActive, 
    handleEditBin,
    handleDeleteBin,
    isLookupItemOpen, 
    setIsLookupItemOpen, 
    cancelEditBin, 
}: Props) => {
 
    const { binCode } = useParams<{ binCode: string }>();
    const selectedBin = bins.find((bin) => bin.binCode === binCode);

    useEffect(() => {

      setBinNumber(selectedBin?.binCode ?? "");    
      setCribNumber(selectedBin?.crib ?? "");
      setItemCode(selectedBin?.item ?? "");      
      setQty(selectedBin?.qty ?? 0);
      setMin(selectedBin?.min ?? 0);
      setIsBinActive(selectedBin?.active ?? false);

      const foundItem = items.find((item) => item.code === selectedBin?.item);
        setSelectedItem(foundItem ?? null);
      
  }, [selectedBin, items, setBinNumber, setCribNumber, setItemCode, setSelectedItem, setQty, setMin, setIsBinActive]);

  if (!selectedBin) return;  

  return (
    <div className='mb-1 block text-sm font-medium'>
    
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Bin: {binCode}</h1>
          {isBinActive && (
            <p 
            className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md text-sm"
          >
              ⚠️ This bin is active. Only minimum quantity can be edited.
          </p> )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bin Code</label>
            <input
              readOnly
              value={binCode}
              type="text"              
              // onChange={(e) => setBinNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2"              
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1"> Item</label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedItem ? `${selectedItem.code} - ${selectedItem.description1}`  : ""}
                className="w-full rounded-md border px-3 py-2 bg-gray-50"
                placeholder={`${!selectedItem ? "Use Lookup to select item" : "" }`}
              />
              <button type='button' 
                disabled={isBinActive}
                onClick={() => setIsLookupItemOpen(true)}
                className={`rounded-md border px-4 py-2
                   ${ isBinActive ? "opacity=50 cursor-not-allowed" : "hover:bg-green-100"}`}
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
              <button 
                type='button' 
                disabled={isBinActive}
                onClick={() =>{setSelectedItem(null); setItemCode(undefined); setIsLookupItemOpen(false)}}
                className={`rounded-md border px-4 py-2
                  ${ isBinActive ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-100"} `}
              > 
              Clear 
              </button>
            </div>  
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Min Qty</label>
            <input              
              value={min}
              type="number"              
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"              
            />
          </div>  
        </div>
        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-lg"
            // onClick={Navigate()}
            onClick={ cancelEditBin }
          >
            Cancel
          </button>          
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={ handleEditBin }
          >
             Save Changes 
          </button>
        </div>
      </div>
                
      {/* Danger Zone */}
      { !selectedBin.active && 
      <div className='mt-10 border border-red-300 rounded-lgp-4 bg-red-50'>
        <h2 className='text-red-700 text-2xl font-semibold" mb-2'>
          Delete Unused Bin
        </h2>
        <p className='text-sm text-red-600 mb-4'> 
          This bin has not been used yet and can be safely removed.
        </p>
        <button
          className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'
          onClick={ () => { if (window.confirm(`Delete this unused bin: ${selectedBin.binCode}?`)) {handleDeleteBin() } } }                    
        >

        </button>

      </div>      
      }
    </div>
  )
}

export default EditBin


