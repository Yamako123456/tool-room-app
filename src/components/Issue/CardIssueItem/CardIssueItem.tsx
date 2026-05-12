import React, { useState } from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';
import { useNavigate } from 'react-router-dom';
import IssueQtyForm from '../IssueQtyForm/IssueQtyForm';

interface Props {
  aItem: ItemModel;
  bins: BinModel[];
}

const CardIssueItem = ({aItem, bins}: Props) => {

  const navigate = useNavigate();
  const [issueItem, setIssueItem] = useState<ItemModel | undefined>(undefined);
  const [availableQty, setAvailableQty] = useState<number>(0);
  const [issueQty, setIssueQty] = useState<number>(0);
  const [isQtyOpen, setIsQtyOpen] = useState<boolean>(false);

  const itemBins = bins.filter(
    (bin) => bin.active && bin.item === aItem.code
  );
  const totalAvailableQty = itemBins.reduce((sum, bin) => sum + bin.qty, 0);

  const handleIssueNow = () => {
    console.log("handleIssueNow hasn't been inplemented");

  };

  const handleAddToCart = () => {
    console.log("handleAddToCart hasn't been inplemented");

  };

  return (
    <div className='relative w-[320px] max-w-full bg-white shadow-lg rounded-xl p-6 border border-green-100'>
      
      {totalAvailableQty > 0 ? (<div className='flex justify-end mb-2'>
        <button 
          // onClick={() => navigate(`/issue/${aItem.code}/qty-form`)  }
          onClick={() => {
            setIssueItem(aItem);
            setIssueQty(0);
            setAvailableQty(totalAvailableQty);
            setIsQtyOpen(true);
          }}
          className='text-sm bg-green-500 hover:bg-green-600 border text-white px-3 py-1 rounded-lg'
        >
          Issue
        </button>
      </div>)
      : (
      <div className='flex justify-end pt-3'>  
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          Out of Stock
        </span>
      </div>
      )}
      <div className='flex gap-x-1 items-baseline text-gray-800'>
        <span className='text-sm font-semibold'>
          Item Code:
        </span>
        <span className='text-2xld'>
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
          Available Qty:
        </span>
        <span className='text-sm'>
          {totalAvailableQty > 0 ? totalAvailableQty : "Out of Stock"}
        </span>  
      </div>

      <IssueQtyForm
              isQtyOpen={isQtyOpen}
              setIsQtyOpen={setIsQtyOpen}
              aItem={aItem}
              availableQty={availableQty}
              issueQty={issueQty}
              setIssueQty={setIssueQty}
              handleIssueNow={handleIssueNow}
              handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default CardIssueItem