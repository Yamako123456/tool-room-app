import React, { useState } from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';
import { useNavigate } from 'react-router-dom';
import IssueQtyForm from '../IssueQtyForm/IssueQtyForm';

interface Props {
  aItem: ItemModel;
  bins: BinModel[];
  setSelectedIssueItem: React.Dispatch<React.SetStateAction<ItemModel | undefined>>;
  setSelectedIssueQty: React.Dispatch<React.SetStateAction<number>>;
  addItemtoCart: (newItem: ItemModel, qty: number) => void;
  totalAvailableQty: number;
  remainingAvailableQty: number;
}

const CardIssueItem = ({aItem, bins,  setSelectedIssueItem,  setSelectedIssueQty,
  addItemtoCart, totalAvailableQty, remainingAvailableQty
  }: Props) => {

  const navigate = useNavigate();
  const [isQtyOpen, setIsQtyOpen] = useState<boolean>(false);
  const [issueItem, setIssueItem] = useState<ItemModel | undefined>(undefined);
  const [issueQty, setIssueQty] = useState<number>(0);

  const handleIssueNow = () => {
    console.log("handleIssueNow hasn't been inplemented");

  };

  const handleAddToCart = () => {
    if ( issueQty > 0) {
      addItemtoCart(aItem, issueQty);
      setIssueQty(0);
    }
  }

  return (
    <div className='relative w-[320px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-gray-100'>
      
      {remainingAvailableQty > 0 ? (<div className='flex justify-end mb-2'>
        <button 
          // onClick={() => navigate(`/issue/${aItem.code}/qty-form`)  }
          onClick={() => {
            setIssueItem(aItem);
            setIssueQty(1);
            setIsQtyOpen(true);
          }}
          className='text-sm bg-green-500 hover:bg-green-600 border text-white px-3 py-1 rounded-lg'
        >
          Issue
        </button>
      </div>)
      : totalAvailableQty < 1 ? (
      <div className='flex justify-end pt-3'>  
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          Out of Stock
        </span>
      </div>
      ) : (
        <div className='flex justify-end pt-3'>  
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          No Remaining
        </span>
      </div>
      )}
      <div className='flex gap-x-1 items-baseline text-gray-800'>
        <span className='text-sm font-semibold'>
          Item Code:
        </span>
        <span className='text-2xl'>
          {aItem.code}
        </span>
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Description:
        </span>
        <span className='text-sm'>
          {aItem.description1}
        </span>  
      </div>
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Item Type:
        </span>
        <span className='text-sm'>
          {aItem.itemType}
        </span>  
      </div>
      <div className="flex justify-center ">
        <span className='m-2'>
          {aItem.itemImage && (
            
            <img
            src={aItem.itemImage}
            alt={aItem.code}
            className="h-40 object-contain rounded border"
            />
          )}
        </span>
      </div>
      
      <div className="flex gap-x-1 items-baseline  text-gray-800">
        <span className="text-sm font-semibold">
          Remaining available Qty:
        </span>
        <span className='text-sm'>
          {totalAvailableQty > 0 ? remainingAvailableQty : "Out of Stock"}
        </span>  
      </div>

      <IssueQtyForm
              isQtyOpen={isQtyOpen}
              setIsQtyOpen={setIsQtyOpen}
              aItem={aItem}
              remainingQty={remainingAvailableQty}
              issueQty={issueQty}
              setIssueQty={setIssueQty}
              handleIssueNow={handleIssueNow}
              handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default CardIssueItem