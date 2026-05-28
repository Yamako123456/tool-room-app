import React from 'react'
import { StockStep } from '../Stock';

interface Props {
  scannedItemCode: string;
  setScannedItemCode: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<StockStep>>;
  // onScanAgain: () => {}
}

const ScannedItemNotFound = ({scannedItemCode, setScannedItemCode, setStep}: Props) => {
  return (
    <section id='scannedItemNotFound'
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
          Item Not Found
        </h1>
        <p className='text-gray-600 mb-2'>
          DexHound could not find an item for this scanned item code:
        </p>
        <div>
          {scannedItemCode}
        </div>
        <p className='text-sm text-gray-500 mb-6'>
          This item must be created before it can be stocked. Log out, then click "Items" from the top navigation bar to create it.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        {/* <button
          onClick={onScanAgain}
          className='w-full md:w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold'
        >
          Scan Again
        </button> */}
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

export default ScannedItemNotFound