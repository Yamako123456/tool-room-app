import React, { useMemo, useState } from 'react'
import { ItemModel } from '../../../models/ItemModel'
import { useNavigate } from 'react-router-dom';
import CardItem from '../CardItem/CardItem';

interface Props {
  items: ItemModel[];
  setItems:React.Dispatch<React.SetStateAction<ItemModel[]>>; 
  suppliers: SupplierModel[];
  formatDate: (date: Date | string) => string;
}

const ListItems = ({items, setItems, suppliers, formatDate}: Props) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState<string>("");

  const onEditItem = (itemCode: string) => navigate(`/items/${itemCode}/edit`);

  const filteredItems = useMemo( () => {
    const keyword = filterText.trim().toLowerCase();
    if (!keyword) 
      return items;

    return items.filter((item) => {
      const itemCode = item.code.toLowerCase();
      const itemDesc = item.description1.toLowerCase();
      const supplierCode = (item.supCode ?? '').toLowerCase();
      const supplier = suppliers.find(supp => supp.supCode.toLowerCase() === supplierCode);
      const suppliserName = supplier?.name.toLowerCase();

      return itemCode.includes(keyword) || itemDesc.includes(keyword) ||
        supplierCode.includes(keyword) || suppliserName?.includes(keyword);
    });
  }, [items, suppliers, filterText] );

  return (
    <section id="listItems">
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
      <div className='relative flex flex-wrap gap-6 items-start max-w-auto max-auto px-10 mb-5 md:px-6'>
        {filteredItems.length > 0 ? (
          filteredItems.map(aItem => 
            !aItem.disabled && <CardItem aItem={aItem} suppliers={suppliers} onEditItem={onEditItem} formatDate={formatDate}/>
          )
        ) : (
          <h3 className='my-3 text-xl font-semibold text-center md:text-xl'>
            No items to show.
          </h3>
        )
        }
      </div>
    </section>
  )
}

export default ListItems