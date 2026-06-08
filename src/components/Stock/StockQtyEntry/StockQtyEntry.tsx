import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';

interface Props {
  selectedItem: ItemModel | null;
  selectedBin: BinModel | null;
  stockQty: number;
  setStockQty: React.Dispatch<React.SetStateAction<number>>;
  onCancel: () => void;
  onContinue: () => void;
}

const StockQtyEntry = ({selectedItem, selectedBin, stockQty, setStockQty, onCancel, onContinue}: Props) => {
  
  const navigate = useNavigate();
  
  if (!selectedItem || !selectedBin) {
    return null;
  }

  return (
    <section id='stockQtyEntry'>
      StockQtyEntry
      <div className='max-w-xl mx-auto bg-white border rounded-2xl border-gray-100 shadow-lg space-y-6 p-6'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Enter the quantity to add to the selected bin.
          </h2>
          <p className='text-sm text-gray-600 mb-6'>
            Enter quanty to stock.
          </p>
        </div>
        <div className='flex items-start gap-4'>
          {selectedItem.itemImage && (
          <img 
            src={selectedItem.itemImage} 
            alt={selectedItem.code}
            className='w-20 h-20 object-contain rounded-lg border' 
          /> )}
          <div>
            <div className='font-semibold text-gray-900'>
              {selectedItem.code}
            </div>
            <div className='text-sm text-gray-500'>
              {selectedItem.description1}
            </div>
            <div className='text-sm text-gray-500'>
              Bin: {selectedBin.binCode}
            </div>
            <div className='text-sm text-gray-500'>
              Current Qty: {selectedBin.qty}
            </div>
          </div>
        </div>
        <div className='block text-sm font-medium mb-1'>
          <label className='block text-sm font-medium mb-2'>Stock Qty</label>
          <input
            type='text'
            value={stockQty}
            onChange={(e) => setStockQty(Number(e.target.value))}
            placeholder='Enteer stock quantity'
            autoFocus
            className='w-full rounded-lg border px-4 py-6 text-lg'
          >
          </input>
        </div>
        <div className='flex justify-end gap-3 border-t pt-4'>
          <button
            type='button'
            onClick={onCancel}
            className='rounded-lg border px-4 py-2 hover:bg-gray-100'
          >
            Cancel
          </button>
          <button 
            type='button'
            onClick={onContinue}
            disabled={stockQty <= 0}
            className='rounded-lg text-white bg-blue-600 px-4 py-2 hover:bg-blue-700'
          >
            Continue
          </button>
        </div>
      </div>


    </section>
  )
}

export default StockQtyEntry