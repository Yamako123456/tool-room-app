import React from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';
import { useParams } from 'react-router-dom';

interface Props {
      items: ItemModel[];
      issueItem: ItemModel | undefined;
      setIssueItem: React.Dispatch<React.SetStateAction<ItemModel | undefined>>; 
      bins: BinModel[];
      onClose: () => void;
      issueQty: number;
      setIssueQty: React.Dispatch<React.SetStateAction<number>>;
      handleIssueNow: () => void;
      handleAddToCart: () => void;
}

const IssueQtyForm = ({items, issueItem, setIssueItem, bins, onClose, 
    issueQty, setIssueQty, handleIssueNow, handleAddToCart}: Props) => {

  const { itemCode } = useParams<{itemCode: string}>();
  const aItem = items.find(item => item.code === itemCode);
  
  if (!aItem) return null;

  const itemBins = bins.filter(
    (bin) => bin.active && bin.item === aItem.code
  );
  const totalQty = itemBins.reduce((sum, bin) => sum + bin.qty, 0);

return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 text-white'>
      <div className='w-full max-w-3xl rounded-xl bg-white shadow-lg'>
        <div className='flex items-center justify-between border-b px-4 py=3'>
            <h2 className='text-xl font-bold text-black'>
              Issue Quantity
            </h2>
            <button onClick={onClose}
              className='text-gray-500 hover:text-black'
            >
              Cancel X
            </button>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        {aItem.itemImage && (
          <img
            src={aItem.itemImage}
            alt={aItem.code}
            className='w-10 h-10 object-cover rounded'
          />
        )}
        <div className='font-medium'> {aItem.code} </div>
        <div className='text-sm'> {aItem.description1} </div>
        <div className='text-sm'> {aItem.description1} </div>

        <div className="flex gap-x-1 items-baseline  text-gray-800">
          <span className="text-sm font-semibold">
            Available Qty:
          </span>
          <span className='text-sm'>
            {totalQty}
          </span>  
        </div>
        <div className="flex gap-x-1 items-baseline  text-gray-800">
          <span className="text-sm font-semibold">
            Issue Qty:
          </span>
          <span className='text-sm'>
            <input 
              type="number"
              value={issueQty}
              onChange={(e) => setIssueQty(Number(e.target.value))}
              placeholder='Quantity you need'
              className='w-full rounded-md border px-2 py-2 text-black'
            />
          </span>  
        </div>
        <div className='flex items-end'>
          <button
          >
            Cancel
          </button>
          <button
          >
            Issue Now
          </button>
          <button
          >
            Add to Cart
          </button>
        </div>
      </div>           
    </div>
  )
}

export default IssueQtyForm