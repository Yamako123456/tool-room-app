import React, { useMemo, useState } from 'react'
import { ItemModel } from '../../models/ItemModel';
import { BinModel } from '../../models/BinsModel';
import { useNavigate } from 'react-router-dom';
import CardIssueItem from './CardIssueItem/CardIssueItem';
import { getTotalQtyForItem, issueItemQtyFromBins } from '../Bins/BinService/BinService';
import { IssueModel } from '../../models/Transaction/IssueModel';
import { CartItem, IssueRecordsState, NextTranIdType,  } from '../../types/transactionTypes';
import { TransactionModel } from '../../models/Transaction/TransactionModel';

interface Props {
  items: ItemModel[];
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  handleLogOut: () => void;
  empCode: string;
  tranRecords: TransactionModel[];
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>;
  nextTranId: NextTranIdType;
  setNextTranId: React.Dispatch<React.SetStateAction<NextTranIdType>>;
  issueRecords: IssueRecordsState,
  setIssueRecords: React.Dispatch<React.SetStateAction<IssueRecordsState>>,
}

const Issue = ({ items, bins, setBins, handleLogOut, empCode, tranRecords, setTranRecords, nextTranId, setNextTranId, issueRecords, setIssueRecords}: Props) => {

  const navigate = useNavigate();

  const [filterText, setFilterText] = useState<string>(""); 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedIssueItem, setSelectedIssueItem] = useState<ItemModel | undefined>(undefined);
  const [selectedIssueQty, setSelectedIssueQty] = useState<number>(0);

  const totalCartQty =   cartItems.reduce(
    (sum, cartItem) => sum + cartItem.qty, 0
  );

  const filteredItems = useMemo(() => {
    const keyword = filterText.trim().toLowerCase();
    if (!keyword)
       return items;

    return items.filter((item) => 
        item.code.toLowerCase().includes(keyword) || 
          item.description1.toLowerCase().includes(keyword));

  }, [items, filterText]);

  const addItemtoCart = (newItem: ItemModel, qty: number) => {
    let exists = false;
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.item.code === newItem.code) {
        const updatedCartItem: CartItem  = {
          item: newItem,
          qty: cartItem.qty + qty,
        }
        exists = true;
        return updatedCartItem;
      } else return cartItem;
    });

    if (exists) {
      setCartItems(updatedCartItems);
    } else {
      const newCartItem: CartItem = {
        item: newItem, 
        qty: qty,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  }

  const issueItems = () => {
    console.log("handleIssue hasn't been inmplemented yet.");
  }

  const incrementCartItemQty = (target: CartItem) => {
    const updatedCartItems: CartItem[] = cartItems.map((prev) => {
      if (prev.item.code === target.item.code) {
        return {
          ...prev,
          qty: Math.min( getTotalQtyForItem(target.item.code, bins), prev.qty + 1) ,
        }
      } else {
        return prev;
      }  
    });

    setCartItems(updatedCartItems);
    
  }


  const decrementCartItemQty = (target: CartItem) => {
   
    const updatedCartItems: CartItem[] = cartItems.map((prev) => {
      if (prev.item.code === target.item.code) {
        return {
          ...prev,
          qty: Math.max(1, prev.qty - 1),
        }
      } else {
        return prev;
      }  
    });

    setCartItems(updatedCartItems);
    
  }  

  const getRemainingAvailableQty = (aItem: ItemModel) => {
   
    const aCartItem = cartItems.find(
      cartItem => cartItem.item.code === aItem.code
    );
    const aCartItemQty = aCartItem?.qty ?? 0;

    return getTotalQtyForItem(aItem.code, bins) - aCartItemQty;
  }

  const deleteFromCart = (deleteItemCode: string) => {
    if (!deleteItemCode || deleteItemCode.length < 1) {
      return;
    }

     setCartItems(
      cartItems.filter(cItem => cItem.item.code !== deleteItemCode)
    );
  }

  const handleCheckOut = () => {

    if (cartItems.length === 0){
      console.log("cartItems is empty.");
      return;
    }

    issueItemQtyFromBins(
      cartItems,

      bins,
      setBins,

      empCode,
      tranRecords,
      setTranRecords,
      nextTranId,
      setNextTranId,
      issueRecords,
      setIssueRecords
    );
    setCartItems([]);
    
  }

  return (
    <section id="issue">
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
        <div className='absolute left-1/2 lg:-translate-x-1/2'>
          <h2 className=' text-2xl font-semibold'>
            Issue Items
          </h2>
        </div>
      </div>

      <div className='w-full mx-auto px-10 mb-5 md:px-6'>
        <label className='block text-sm font-medium mb-2'>
          Filter Items
        </label>
        <input 
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder='Search by item or supplier'
          className='w-full rounded-md border px-3 py-2'
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 px-10 md:px-6 mb-5'>
        <div className='relative flex flex-wrap gap-6 items-start max-w-auto max-auto px-10 mb-5 md:px-6'>

          {filteredItems.length > 0 ? (

            filteredItems.map( aItem => {
              if (aItem.disabled || !aItem.active) return null;
              
              const remainingQty = getRemainingAvailableQty(aItem);
              const totalQty = getTotalQtyForItem(aItem.code, bins);

              return <CardIssueItem aItem={aItem} bins={bins} 
                setSelectedIssueItem={setSelectedIssueItem} setSelectedIssueQty={setSelectedIssueQty} 
                addItemtoCart={addItemtoCart}
                issueItems={issueItems}
                totalAvailableQty={totalQty}
                remainingAvailableQty={remainingQty}
              />}
            )
            ) : (
              <h3 className='my-3 text-xl font-semibold text-center md:text-xl'>
                No items to show.
              </h3>
            )
          }
        </div>

         {/* cart */}
        <aside className='rounded-xl border bg-white p-4 shadow-sm h-fit lg:sticky lg:top-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-se'>
              Issue Cart
            </h3>

            {totalCartQty > 0 && (
              <span>
                {totalCartQty} items
              </span>
            )} 
          </div>
          {cartItems.length === 0 ? (
            <p>
              Cart is empty
            </p>
          ) : (
            <div className='max-h-[70vh] overflow-y-auto space-y-4'>
              {cartItems.map((cartItem) => (
                <div 
                  key={cartItem.item.code}
                  className='border-t pt-3'
                >
                  <div>
                    <p className='font-medium'>
                      {cartItem.item.code}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {cartItem.item.description1}
                      
                    </p>
                    <img
                      src={cartItem.item.itemImage}
                      alt={cartItem.item.description1 || cartItem.item.code}
                      className='h-16 w-16 rounded-md object-contain border my-2'
                    />
        
                    <div className='flex items-center gap-3'>
                      <button
                        type='button'
                        onClick={() => decrementCartItemQty(cartItem) }
                        className='h-7 w-7 flex items-center justify-center text-3xl font-bold rounded border hover:bg-gray-100'
                        >
                        -
                      </button>

                      <p className='text-sm font-semibold text-gray-500'>
                        Qty: {cartItem.qty}
                      </p>

                      <button
                        type='button'
                        onClick={() => incrementCartItemQty(cartItem) }
                        className='h-7 w-7 flex items-center justify-center text-1xl font-bold rounded border hover:bg-gray-100'
                        >
                        +
                      </button>
                    </div>

                  </div>

                  <button 
                    type='button'
                    onClick={() => deleteFromCart(cartItem.item.code) }
                    className='rounded p-2 text-red-500 hover:border-t-red-50 hover:text-red-700 text-2xl'
                    aria-label={`Remove ${cartItem.item.code} from cart`}
                  >
                    🗑
                  </button>
                </div>  
              ))}
            </div>
          )}
        
          <div className='mt-4 border-t pt-4'>
            <button
              type='button'
              onClick={handleCheckOut}
              disabled={cartItems.length === 0}
              className='w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white
                enabled:hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-200'
            >
              Check Out
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Issue