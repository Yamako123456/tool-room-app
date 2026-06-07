import React from 'react'
import { ItemModel } from '../../../models/ItemModel'
import { BinModel } from '../../../models/BinsModel';

interface Props {
  selectedItem: ItemModel | null;
  itemBins: BinModel[];
  onSelectBin: (bin: BinModel) => void;
  onCancel: () => void;
}

const StockBinSelect = ({selectedItem, itemBins, onSelectBin, onCancel }: Props) => {
  return (
    <section id='stockbinSelect'    
      className='max-w-6xl mx-auto px-6 py-8 '
    >
      <div className='bg-white rounded-xl shadow-lg border border-b-gray-100 px-6 py-6 mb-6'>
        <h1 className='text-2xl font-bold mb-2'>
          Select Bins to Stock
          {/* Item Bins Length = {itemBins.length} */}
        </h1>
        <p className='text-sm text-gray-600 mb-6'>
          Select the bin where you will physically stock this item.  
        </p>
        <div className='gird grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
          <div>
            <span className=' font-semibold'>
              {selectedItem?.code}
            </span>
          </div>
          <div>
            <span className=' font-semibold'>
              {selectedItem?.description1}
            </span>
          </div>
          <div>
            <span className=' font-semibold'>
              {selectedItem?.itemType}
            </span>
          </div>
          <div>
            <span className=' font-semibold'>
              {selectedItem?.uom}
            </span>
          </div>
        </div>
      </div>

      {itemBins.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
         
          {itemBins.map((bin) => (
            <button
              key={bin.binCode}
              type='button'
              onClick={() => onSelectBin(bin)}  
              // className="text-left bg-white rounded-xl  border border-gray-100 hove:border-blue-500 hover:shadow-2xl p-6 transition"

              className='text-left bg-white rounded-xl border border-gray-800 hover:shadow-2xl p-6 transition'
            >
              <div className='text-sm text-gray-500 mb-1'>
                Bin Code
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-4'>
                {bin.binCode}
              </div>

              <div className='space-y-1 text-sm text-gray-700'>
                <div>
                  <span className='font-semibold'>
                    Current Qty
                  </span>
                  {" "}{bin.qty}
                </div>
                <div>
                  <span className='font-semibold'>
                    Min Qty
                  </span>
                  {" "}{bin.min}
                </div>
                <div>
                  <span className='font-semibold'>
                    Status
                  </span>
                  {" "}{bin.active ? "Active" : "Inactive" }
                </div>
              </div>
              <div className='mt-5 text-blue-600 font-semibold text-sm'>
                Select this bin
              </div>
            </button>
          ))}              
        </div>
      ) : (
        <div>
          <h2>No Bin Found</h2>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold"
          >
            OK
          </button>
        </div>
      )} 
    </section>
  )
}

export default StockBinSelect