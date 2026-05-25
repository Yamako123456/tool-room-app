import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../models/ItemModel';
import { BinModel } from '../../models/BinsModel';
import StockItemScan from './StockItemScan/StockItemScan';

interface Props {
  handleLogOut: () => void;
}

type StockStep =  
| "scanItem"
| "selectBin"
| "notFound"
| "enterQty"
| "confirm"
| "success";

const Stock = ({handleLogOut,}: Props) => {

  const navigate = useNavigate();

  const [step, setStep] = useState<StockStep>("scanItem");
  const [scanItemCode, setScanItemCode] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);
  const [selectedBin, setSelectedBin] = useState<BinModel | null>(null);
  const [stockQty, setStockQty] = useState<number>(0);

  return (
    <section id='stock'>
      {step === "scanItem" && (
        <StockItemScan
          handleLogOut={handleLogOut}
          scanItemCode={scanItemCode}
          setScanItemCode={setScanItemCode}
        />
      )
      }

    </section>
  )
}

export default Stock