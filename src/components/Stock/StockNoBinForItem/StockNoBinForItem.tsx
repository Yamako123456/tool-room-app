import React from 'react'
import { StockStep } from '../Stock';

interface Props {
    scannedItemCode: string;
    setScannedItemCode: React.Dispatch<React.SetStateAction<string>>;
    setStep: React.Dispatch<React.SetStateAction<StockStep>>;
}

const StockNoBinForItem = ({scannedItemCode, setScannedItemCode, setStep}: Props) => {
  console.log("Inside of StockNoBinForItem")

  return (
    <section id='stockNoBinForItem'
      className='max-w-2xl mx-auto px-6 py-8'  
    >
      <div
        className='bg-white rounded-xl shadow-lg border border-red-100 p-6 text-center'
      >
        <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full
         bg-red-100 text-red-700 text-2xl font-bold'>
          !
        </div>
        <h1 className='text-2xl font-bold mb-2'>
          Item Not Assigned To Bin
        </h1>
        <p className='text-gray-600 mb-2'>
          There is no bin assigned with the item for this scanned item code:
        </p>
        <div>
          {scannedItemCode}
        </div>
        <p className='text-sm text-gray-500 mb-6'>
          This item must be assigned to bin before it can be stocked. Log out, then click "Bins" from the top navigation bar to create it.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <button
          onClick={() => {
            setScannedItemCode("");
            setStep("scanItem");
          }}
          
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold"
        >
          OK
        </button>
      </div>
    </section>
    
  )
}

export default StockNoBinForItem