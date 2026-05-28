import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../models/ItemModel';
import { BinModel } from '../../models/BinsModel';
import StockItemScan from './StockItemScan/StockItemScan';
import StockQtyEntry from './StockQtyEntry/StockQtyEntry';
import StockBinSelect from './StockBinSelect/StockBinSelect';
import StockConfirm from './StockConfirm/StockConfirm';
import ScannedItemNotFound from './ScannedItemNotFound/ScannedItemNotFound';

interface Props {
  handleLogOut: () => void;
  items: ItemModel[];
}

export type StockStep =  
| "scanItem"
| "selectBin"
| "notFound"
| "enterQty"
| "confirm"
| "success";

const Stock = ({items, handleLogOut,}: Props) => {

  const navigate = useNavigate();

  const [step, setStep] = useState<StockStep>("scanItem");
  const [scannedItemCode, setScannedItemCode] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [selectedBin, setSelectedBin] = useState<BinModel | null>(null);
  const [stockQty, setStockQty] = useState<number>(0);

  const searchItemHandler =  () => {
    if (scannedItemCode === "")
        return;

    const aItem = items.find((item) => 
      item.code.toLowerCase() === scannedItemCode.trim().toLowerCase()
    )

    console.log("searchItemHandler(), aItem", aItem);
    if (aItem) {
      setSelectedItem(aItem);
      setStep("selectBin");

    } else {
      setStep("notFound");
    }


  }

  // const onScanAgain = () => {

  // }

  return (

    <section id='stock'>
      <div className='relative flex items-center justify-between mb-10'>
        <div className='relative flex items-center justify-between mb-10'>
          <div className='flex gap-3'>
            <button 
              onClick={handleLogOut}
              className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
            >
              Log Out  
            </button>  
            <button onClick={() => navigate('/main-menu')}
              className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
            >
              Main Menu  
            </button>
          </div>  
          
        </div>
      </div>
      {step === "scanItem" && (
        <StockItemScan
          
          scannedItemCode={scannedItemCode}
          setScannedItemCode={setScannedItemCode}
          searchItemHandler={searchItemHandler}
        />
      )}

      {step === "notFound" && (
        <ScannedItemNotFound 
          scannedItemCode={scannedItemCode}
          setScannedItemCode={setScannedItemCode}
          setStep={setStep}
          // onScanAgain={onScanAgain}
        />
      )}

      {step === "selectBin" && (
        <StockBinSelect
          
        />
      )}

      {step === "enterQty" && (
        <StockQtyEntry
          

        />
      )}

      {step === 'confirm' && (
        <StockConfirm
        
        />
      )}
    </section>
  )
}

export default Stock