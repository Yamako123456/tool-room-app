import React, { useEffect, useRef, useState } from 'react'
import { ItemModel } from '../../models/ItemModel';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemModuleComponent } from './ItemModuleComponent';
import ListItems from './ListItems/ListItems';
import toast from 'react-hot-toast';

interface Props {
  items: ItemModel[];
  setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
  itemNumber: string;
  suppliers: SupplierModel[];
  selectedSupplier: SupplierModel | null;
  formatDate: (date: Date | string) => string;
  resetItem: () => void;
}

const Items = ({items, setItems, itemNumber, suppliers, selectedSupplier, formatDate, resetItem }: Props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
  const toastShowRef = useRef(false);

  useEffect(() => {
    
    console.log("items.tsx useEffect: toastShowRef.current = ", toastShowRef.current)
    
    if (!message || toastShowRef.current) return;
  
    toastShowRef.current = true;
    toast.success(message);
    
    navigate(location.pathname,{ // navigate to this pageitself.
      replace: true,// Replace current history
      state: {}, // Clear navigation state.
    })

  } , [message, navigate, location.pathname] );
  
  // const [showMessage, setShowMessage] = useState<boolean>(false);

  // useEffect(() => {
  //   if (message) {
  //     setShowMessage(true);
  //     setTimeout(() => setShowMessage(false), 3000);
  //   }
  // }, [message]);
    
  const onSearchSubmit = (e: any) => {
    e.preventDefault();
    const keyword = e.target[0].value ? e.target[0].value.trim().toLowerCase() : "";
    const result = keyword ? suppliers.filter( supp => {
      supp.name.toLowerCase().includes(keyword) || supp.supCode.toLowerCase().includes(keyword)
    }) : suppliers;
  }

  return (
    <section id="items">
      {/* {showMessage && (
        <div className='mb-4 rounnded-md bg-green-100 px-4 py-2 text-green-700 shadow-lg animate-bounce'>
          {message}
        </div>
      )} */}
      
      <div className='relative flex items-center'>
        <h2 className='absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold'>
          Manage Items
        </h2>
        <button onClick={() => { resetItem(); navigate("/items/add")}}
          className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'
        >
          + Add Item  
        </button>  

      </div>
      
      <ListItems 
        items={items}
        setItems={setItems}
        suppliers={suppliers}
        formatDate={formatDate}
      />
    </section>
  )
}

export default Items