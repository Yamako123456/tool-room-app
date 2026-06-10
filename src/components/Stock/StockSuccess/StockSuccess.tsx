import React from 'react'
import { ItemModel } from '../../../models/ItemModel'
import { BinModel } from '../../../models/BinsModel';

interface Props {
  selectedItem: ItemModel;
  selectedBin: BinModel;
  stockQty: number;
  onBackStockScanScreen: () => void;
  onExitStock: () => void;
}

const StockSuccess = ({selectedItem, selectedBin, stockQty, onBackStockScanScreen, onExitStock}: Props) => {
  return (
    <section id="StockSuccess" className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-xl rounded-xl border border-gray-100 shadow-md bg-white p-6 space-y-6'>
        <div>
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <span className="text-3xl text-green-600">✓</span>
          </div>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Stock Completed
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Inventory quantity was updated successfully.
          </p>
        </div>
        <div className='flex  items-start gap-4'>
          {selectedItem.itemImage && (<img 
            src={selectedItem.itemImage}
            alt={selectedItem.code}
            className='w-20 h-20 object-contain rounded-lg border'
          />)}
          <div className='rounded-lg border bg-gray-50 p-4 space-y-3 '>
            <div className='flex justify-between gap-4'>
              <span className='text-sm text-gray-500'>
                Item Code: 
              </span>
              <span className='text-sm font-semibold text-gray-900'>
                {selectedItem.code}
              </span>

            </div>  
            <div>

              <span className='text-sm font-semibold text-gray-900'>
                {selectedItem.description1}  
              </span>
              
            </div>  
            <div className='flex justify-between gap-4'>
              <span className='text-sm text-gray-500'>
                Bin Code: 
              </span>
              <span className='text-sm font-semibold text-gray-900'>
                {selectedBin.binCode}
              </span>
            </div>  
            <div className='flex justify-between gap-4'>
              <span className='text-sm text-gray-500'>
                Quantity Added:
              </span>
              <span className='text-sm font-semibold text-gray-900'>
                {stockQty}
              </span>
            </div>  
          </div>
        </div>
        <div className='mt-6 flex flex-col sm:flex-row gap-3'>
          <button
            type='button'
            onClick={onBackStockScanScreen}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
          >
            Stock Another Item
          </button>
          <button
            type='button'
            onClick={onExitStock}
            className='w-full rounded-md border border-gray-300  hover:bg-gray-100 text-gray-700 font-medium px-4 py-2'
          >
            Exit Stock
          </button>
        </div>
      </div>

    </section>
  )
}

export default StockSuccess