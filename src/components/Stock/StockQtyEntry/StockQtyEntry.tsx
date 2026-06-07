import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';

interface Props {
  selectedItem: ItemModel | null;
  selectedBin: BinModel | null;
  stockQty: number;
  setStockQty: React.Dispatch<React.SetStateAction<number>>;
}

const StockQtyEntry = ({}: Props) => {
  
  const navigate = useNavigate();


  return (
    <section id='stockQtyEntry'>
      StockQtyEntry


    </section>
  )
}

export default StockQtyEntry