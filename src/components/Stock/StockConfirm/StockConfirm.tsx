import React from 'react'
import { BinModel } from '../../../models/BinsModel';
import { ItemModel } from '../../../models/ItemModel';

interface Props {
  selectedItem: ItemModel;
  selectedBin: BinModel;
  stockQty: number;
  onBack: () => void;
  onConfirm: () => void;
}

const StockConfirm = ({selectedItem, selectedBin, stockQty, onBack, onConfirm}: Props) => {
  return (
    <section id="StockConfirm">
      <div className='max-w-3xl mx-auto rounded-2xl border border-gray-100 shadow-lg bg-white p-6 space-y-6'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Confirm Stock
          </h2>
          <p className='text-sm text-gray-500 mb-6'>
            Please confirm the stock update before saving.
          </p>
        </div>
        <div>
          <div className='flex items-start gap-4'>
            {selectedItem.itemImage && 
            ( <img
              src={selectedItem.itemImage}
              aria-placeholder={selectedItem.code}  
              className='w-20 h-20 object-contain rounded-lg border'
            /> 
            )}
            <div className='space-y-4'>
              <div className='rounded-lg border bg-gray-50 p-4'>
                <p className='text-sm text-gray-500'>Item Code</p>
                <p className='text-lg font-semibold'>{selectedItem.code}  </p>
                <div className='text-sm text-gray-600'>{selectedItem.description1}</div>
              </div>
              <div className='rounded-lg border bg-gray-50 p-4'>
                <p className='text-sm text-gray-500'>Bin Code</p>
                <p>{selectedBin.binCode}  </p>
              </div>
              <div className='rounded-lg border bg-gray-50 p-4'>
                <p className='text-sm text-gray-500'>Stock Qty</p>
                <p className='text-2xl font-bold text-green-500'>{stockQty}  </p>
              </div>
              <div className='rounded-lg border bg-gray-50 p-4'>
                <p className='text-sm text-gray-500'>Current Bin Qty</p>
                <p className='text-2xl font-bold'>{selectedBin.qty}  </p>
              </div>  
              <div className='rounded-lg border bg-gray-50 p-4'>
                <p className='text-sm text-gray-500'>New Bin Qty</p>
                <p className='text-2xl font-bold'>{selectedBin.qty + stockQty}</p>
              </div>  
            </div>
            
          </div>
        </div>
        <div className='flex gap-3 mt-8'>
          <button
            type='button'
            onClick={onBack}
            // className='w-full rounded-lg border border-gray-300 bg-white py-3 font-semibold hover:bg-gray-50'
            className="w-full rounded-lg border border-gray-300 py-3 font-semibold hover:bg-gray-100"
            
          >
            Back
          </button>      
          <button
            type='button'
            onClick={onConfirm}
            className='w-full rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 py-3'
          >
            Confirm Stock
          </button>      
        </div>
      </div>
    </section>
  )
}

export default StockConfirm