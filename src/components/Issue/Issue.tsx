import React, { useMemo, useState } from 'react'
import { ItemModel } from '../../models/ItemModel';
import { BinModel } from '../../models/BinsModel';
import { useNavigate } from 'react-router-dom';
import CardIssueItem from './CardIssueItem/CardIssueItem';

interface Props {
  items: ItemModel[];
  bins: BinModel[];
  handleLogOut: () => void;
}

interface CartItem {
  item: ItemModel;
  qty: number;
}

const Issue = ({ items, bins, handleLogOut}: Props) => {

  const navigate = useNavigate();

  const [filterText, setFilterText] = useState<string>(""); 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedIssueItem, setSelectedIssueItem] = useState<ItemModel | undefined>(undefined);
  const [selectedIssueQty, setSelectedIssueQty] = useState<number>(0);

  const totalCartQty = cartItems.reduce(
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

  // const handleAddToCart = () => {
  //   if (selectedIssueItem && selectedIssueQty > 0) {
  //     addItemtoCart(selectedIssueItem, selectedIssueQty);
  //   }
  // }

  const issueItems = () => {
    console.log("handleIssue hasn't been inmplemented yet.");
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
              
              const itemBins = bins.filter(
                (bin) => bin.active && bin.item === aItem.code
              );
              const totalAvailableQty = itemBins.reduce((sum, bin) => sum + bin.qty, 0);
              
              const aCartItem = cartItems.find(
                cartItem => cartItem.item.code === aItem.code
              );
              const aCartItemQty = aCartItem?.qty ?? 0;
              const remainingQty = totalAvailableQty - aCartItemQty;
              
              return <CardIssueItem aItem={aItem} bins={bins} 
                setSelectedIssueItem={setSelectedIssueItem} setSelectedIssueQty={setSelectedIssueQty} 
                addItemtoCart={addItemtoCart}
                issueItems={issueItems}
                remainingQty={remainingQty}
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

            <span>
              {totalCartQty} items
            </span>
          </div>
          {cartItems.length === 0 ? (
            <p>
              No items in cart
            </p>
          ) : (
            <div className='max-h-[70vh] overflow-y-auto space-y-4'>
              {cartItems.map((cartItem) => (
                <div 
                  key={cartItem.item.code}
                  className='border-b pb-3'
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
                      className='h-16 w-16 rounded-md object-cover border'
                    />
                    <p className='text-sm text-gray-500'>
                     
                      
                    </p>
                    <p className='text-sm font-semibold text-gray-500'>
                      Qty: {cartItem.qty}

                    </p>
                  </div>
                </div>  
              )

              )}
            </div>
          )}

        </aside>

      </div>

     
    </section>

  )
}

export default Issue