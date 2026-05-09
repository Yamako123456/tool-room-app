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

const Issue = ({ items, bins, handleLogOut}: Props) => {

  const navigate = useNavigate();

  const [filterText, setFilterText] = useState<string>(""); 

  const filteredItems = useMemo(() => {
    const keyword = filterText.trim().toLowerCase();
    if (!keyword)
       return items;

    return items.filter((item) => 
        item.code.toLowerCase().includes(keyword) || 
          item.description1.toLowerCase().includes(keyword));

  }, [items, filterText]);

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

      <div className='relative flex flex-wrap gap-6 items-start max-w-auto max-auto px-10 mb-5 md:px-6'>
        {filteredItems.length > 0 ? (
          filteredItems.map(aItem => 
            !aItem.disabled && aItem.active &&
            <CardIssueItem aItem={aItem} bins={bins} />
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

export default Issue