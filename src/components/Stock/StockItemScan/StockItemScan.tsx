import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
   
   scanItemCode: string;
   setScanItemCode:React.Dispatch<React.SetStateAction<string>>;
}

const StockItemScan = ({scanItemCode, setScanItemCode}: Props) => {
  
  const navigate = useNavigate();

return (
    <section id='stockItemScan'>

      <div className='max-w-3xl mx-auto px-6  py-8'>
        <div className='bg-white rounded-xl shadow-lg border p-6'>
          <h1 className='text-2xl font-bold mb-2'>
            Stock Item
          </h1>
          <p className='text-sm  text-gray-600 mb-6'>
            Scan or enter the item code of the product you want to stock.
          </p>
          <label className='block text-sm font-medium mb-2'>
            Item Code Scan or Enter
          </label>
          <input 
            type='text'
            value={scanItemCode}
            onChange={(e) => setScanItemCode(e.target.value)}
            placeholder='Scan or enter item code'
            className='w-full rounded=md border px-4 py-3 text-lg'
            autoFocus
          />
          <button
            className='mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg'
            
          >
            Search Item
          </button>
        </div>
      </div>

    </section>
  )
}

export default StockItemScan