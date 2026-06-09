import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../models/ItemModel';
import { BinModel } from '../../models/BinsModel';
import StockItemScan from './StockItemScan/StockItemScan';
import StockQtyEntry from './StockQtyEntry/StockQtyEntry';
import StockBinSelect from './StockBinSelect/StockBinSelect';
import StockConfirm from './StockConfirm/StockConfirm';
import ScannedItemNotFound from './ScannedItemNotFound/ScannedItemNotFound';
import StockNoBinForItem from './StockNoBinForItem/StockNoBinForItem';
import { TransactionModel } from '../../models/Transaction/TransactionModel';
import { NextTranIdType } from '../../types/transactionTypes';

interface Props {
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  handleLogOut: () => void;
  empCode: string;
  items: ItemModel[];
  tranRecords: TransactionModel[];
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>;
  nextTranId: NextTranIdType;
  setNextTranId: React.Dispatch<React.SetStateAction<NextTranIdType>>;
}

export type StockStep =  
| "scanItem"
| "selectBin"
| "itemNotFound"
| "noBinForItem"
| "enterQty"
| "confirm"
| "success";

const Stock = ({
  bins, 
  setBins, 
  handleLogOut, 
  empCode, 
  items, 
  tranRecords, 
  setTranRecords, 
  nextTranId, 
  setNextTranId, 

}: Props) => {

  const navigate = useNavigate();

  const [step, setStep] = useState<StockStep>("scanItem");
  const [scannedItemCode, setScannedItemCode] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [selectedBin, setSelectedBin] = useState<BinModel | null>(null);
  const [stockQty, setStockQty] = useState<number>(0);
   const[itemBins, setItemBins]  = useState<BinModel[]>([]);

  const searchItemHandler =  () => {
    const iCode = scannedItemCode.trim();
    if (scannedItemCode === "")
        return;

    const aItem = items.find((item) => 
      item.code.toLowerCase() === iCode.toLowerCase()
    )
    // console.log("searchItemHandler(), aItem", aItem);
    if (aItem) {
      setSelectedItem(aItem);
      const iBins: BinModel[] = bins.filter((bin) => (bin.item ?? "").toLowerCase() === iCode.toLowerCase());
      if (iBins.length === 0) {
        console.log("Zero bins for ", iCode);
        setStep("noBinForItem");
      } else {
        setItemBins(iBins);
        setStep("selectBin");
      }

    } else {
      
      setStep("itemNotFound");
    }
  }

  const onSelectBin = (bin: BinModel) => {
    setSelectedBin(bin);
    setStockQty(0);
    setStep("enterQty");
  }

  const onContinue = () => {
    if(!selectedItem) {
      alert("No item selected.");
      return;
    }

    if (!selectedBin) {
      alert("No bin selected.");
      return;
    }

    if (stockQty <= 0) {
      alert("Stock quantity must be greater than zero.");
      return;
    }

    setStep("confirm");
  }

const resetStockState = () => {
  setStep("scanItem");
  setScannedItemCode("");
  setSelectedItem(null);
  setSelectedBin(null);
  setStockQty(0);
  setItemBins([]);
};

const onCancel = () => {
  resetStockState();
};

const onBack = () => {
  setStep("enterQty")
}

const onConfirmStock = () => {
  
  if (!selectedItem) {
    console.log("selectedItem is missing");
    return;
  }
  if (!selectedBin) {
    console.log("selectedBin is missing");
    return;
  }
  if (stockQty <= 0) {
    console.log("stockQty must be positive number");
    return;
  }
  


} 

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

      {step === "itemNotFound" && (
        <ScannedItemNotFound 
          scannedItemCode={scannedItemCode}
          setScannedItemCode={setScannedItemCode}
          setStep={setStep}
        />
      )}

      {step === "noBinForItem" && (
        <StockNoBinForItem
          scannedItemCode={scannedItemCode}
          setScannedItemCode={setScannedItemCode}
          setStep={setStep}
        ></StockNoBinForItem>  
      )}

      {step === "selectBin" && (
        <StockBinSelect
          selectedItem={selectedItem}
          itemBins={itemBins}
          onSelectBin={onSelectBin}
          onCancel={onCancel}
        />
      )}

      {step === "enterQty" && (
        <StockQtyEntry
          selectedItem={selectedItem}
          selectedBin={selectedBin}
          stockQty={stockQty}
          setStockQty={setStockQty}
          onCancel={onCancel}
          onContinue={onContinue}
        />
      )}

      {step === 'confirm' &&  selectedItem && selectedBin && (
        <StockConfirm
          selectedItem={selectedItem}
          selectedBin={selectedBin}
          stockQty={stockQty}
          onBack={onBack}
          onConfirm={onConfirmStock}
        />
      )}
    </section>
  )
}

export default Stock