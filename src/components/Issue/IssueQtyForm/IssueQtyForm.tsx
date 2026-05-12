import React from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { BinModel } from '../../../models/BinsModel';
import { useParams } from 'react-router-dom';

interface Props {
  // items: ItemModel[];
  // issueItem: ItemModel | undefined;
      isQtyOpen: boolean;
      setIsQtyOpen: React.Dispatch<React.SetStateAction<boolean>>;
      aItem: ItemModel;
      availableQty: number;
      // setIssueItem: React.Dispatch<React.SetStateAction<ItemModel | undefined>>; 
      // bins: BinModel[];
      // onClose: () => void;
      issueQty: number;
      setIssueQty: React.Dispatch<React.SetStateAction<number>>;
      handleIssueNow: () => void;
      handleAddToCart: () => void;
    }
    // const IssueQtyForm = ({items, issueItem, setIssueItem, bins, onClose, 
    //     issueQty, setIssueQty, handleIssueNow, handleAddToCart}: Props) => {
const IssueQtyForm = ({ isQtyOpen, setIsQtyOpen, aItem, availableQty, issueQty, setIssueQty, handleIssueNow, handleAddToCart}: Props) => {
  
  if ( !isQtyOpen ) return null;
  
  const onClose = () => setIsQtyOpen(false);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
      <div className='w-full max-w-3xl rounded-xl bg-white shadow-lg text-gray-900'>
        <div className='flex items-center justify-between border-b px-6 py-3'>
            <h2 className='text-xl font-bold'>
              Issue Quantity
            </h2>
            <button 
              type='button'
              onClick={() => {
              setIsQtyOpen(false);
            }}
              className='text-gray-500 hover:text-black'
            >
              X
            </button>
        </div>
        <div className='p-6 space-y-6'>
          <div className='flex items-start gap-4'>
            {aItem.itemImage && (
              <img
                src={aItem.itemImage}
                alt={aItem.code}
                className='w-20 h-20 object-cover rounded-lg border p-1'
              />
            )}
            <div className='min-w-0'>
              <div className='text-l font-semibold'> {aItem.code} </div>
              <div className='text-sm text-gray-600 break-words'> {aItem.description1} </div>
            </div>

            <div className="grid grid-cols-[auto-1fr] gap-x-3 gap-y-3 items-center">
              <span className="text-sm font-semibold">
                Available Qty:
              </span>

              {availableQty > 0 ? (
                <span className='text-sm'>
                  {availableQty}
                </span>  
              ) : (
                <span className='w-fit rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700'>
                  Out of Stock
                </span>
              )}

              <label className='text-sm font-semibold'>
                Issue Qty:
              </label>
              <input 
                type="number"
                value={issueQty}
                onChange={(e) => setIssueQty(Number(e.target.value))}
                placeholder='Quantity you need'
                className='w-full rounded-md border px-2 py-2 text-black'
              />
            </div>
            
            <div className='flex justify-end gap-3 border-t pt-4'>
              <button
                type='button'
                onClick={() => {
                  setIssueQty(0);
                  setIsQtyOpen(false);
                }}
                className='rounded-lg border px-4 py-2 hover:bg-gray-100'
              >
                Cancel
              </button>

              <button
                type='button'
                onClick={() => {
                  setIsQtyOpen(false);
                  handleIssueNow();
                }}
                className='rounded-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700 disabled:opacity-50'
                disabled={availableQty <= 0}
              >
                Issue Now
              </button>
              <button
                type='button'
                onClick={ () => {
                  setIsQtyOpen(false);
                  handleAddToCart();
                }}
                className='rounded-lg bg-blue-600 text-white px-4 py-2  hover:bg-blue-700 disabled:opacity-50'
                disabled={availableQty <= 0}
              >
                Add to Cart
              </button>
            </div>
          </div>           
        </div>
      </div>
    </div>
  )



// return (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
//     <div className="w-full max-w-3xl rounded-xl bg-white shadow-lg text-gray-900">
//       <div className="flex items-center justify-between border-b px-6 py-3">
//         <h2 className="text-xl font-bold">
//           Issue Quantity
//         </h2>

//         <button
//           type="button"
//           onClick={onClose}
//           className="text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>
//       </div>

//       <div className="p-6 space-y-6">
//         <div className="flex items-start gap-4">
//           {aItem.itemImage && (
//             <img
//               src={aItem.itemImage}
//               alt={aItem.code}
//               className="w-20 h-20 object-cover rounded-lg border"
//             />
//           )}

//           <div className="min-w-0">
//             <div className="text-lg font-semibold">
//               {aItem.code}
//             </div>

//             <div className="text-sm text-gray-600 break-words">
//               {aItem.description1}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center">
//           <span className="text-sm font-semibold">
//             Available Qty:
//           </span>

//           {availableQty > 0 ? (
//             <span className="text-sm">
//               {availableQty}
//             </span>
//           ) : (
//             <span className="w-fit rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
//               Out of Stock
//             </span>
//           )}

//           <label className="text-sm font-semibold">
//             Issue Qty:
//           </label>

//           <input
//             type="number"
//             value={issueQty}
//             onChange={(e) => setIssueQty(Number(e.target.value))}
//             placeholder="Quantity you need"
//             className="w-full rounded-md border px-3 py-2 text-black"
//           />
//         </div>

//         <div className="flex justify-end gap-3 border-t pt-4">
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-lg border px-4 py-2 hover:bg-gray-100"
//           >
//             Cancel
//           </button>

//           <button
//             type="button"
//             className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
//             disabled={availableQty <= 0}
//           >
//             Issue Now
//           </button>

//           <button
//             type="button"
//             className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
//             disabled={availableQty <= 0}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
}
export default IssueQtyForm