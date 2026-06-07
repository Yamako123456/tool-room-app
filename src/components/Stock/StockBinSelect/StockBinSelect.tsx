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
          <div>
            <span className=' font-semibold'>

            </span>
          </div>
          <div>
            <span className=' font-semibold'>

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
              className='text-left bg-white rounded-xl shadow-lg border-gray-100 hover:border-blue-500 hover:shadow-xl p-6 transition'
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
            </button>
          ))}              
        </div>
      ) : (
        <div>

        </div>
      )} 
    </section>
  )
}

export default StockBinSelect