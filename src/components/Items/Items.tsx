import React from 'react'
import { ItemModel } from '../../models/ItemModel';
import { useNavigate } from 'react-router-dom';
import { ItemModuleComponent } from './ItemModuleComponent';
import ListItems from './ListItems/ListItems';

interface Props {
  items: ItemModel[];
  setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
  itemNumber: string;
  suppliers: SupplierModel[];
  selectedSupplier: SupplierModel | null;

  isShowEntryForm: boolean;
  setIsShowEntryForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Items = ({items, setItems, itemNumber, suppliers, selectedSupplier,  
  isShowEntryForm, setIsShowEntryForm}: Props) => {

  const navigate = useNavigate() ;

  const onSearchSubmit = (e: any) => {
    e.preventDefault();
    const keyword = e.target[0].value ? e.target[0].value.trim().toLowerCase() : "";
    const result = keyword ? suppliers.filter( supp => {
      supp.name.toLowerCase().includes(keyword) || supp.supCode.toLowerCase().includes(keyword)
    }) : suppliers;
  }

  return (
    <section id="items">
      <div className='relative flex items-center'>
        <h2 className='absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold'>
          Manage Items
        </h2>
        <button onClick={() => navigate("/items/add")}
          className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'
        >
          + Add Item  
        </button>  

      </div>
      
      <ListItems 
        items={items}
        setItems={setItems}
        suppliers={suppliers}
      />

        {/* <button 
          onClick={() => { setIsShowEntryForm(true) }}
          disabled={isShowEntryForm}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'
          >
            + Add Item
        </button>

      <ItemModuleComponent items={items} setItems={setItems} isShowEntryForm={isShowEntryForm} setIsShowEntryForm={setIsShowEntryForm} /> */}

    </section>
  )
}

export default Items