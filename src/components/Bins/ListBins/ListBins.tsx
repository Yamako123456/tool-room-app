import React, { useMemo, useState } from 'react'
import CardBin from '../CardBin/CardBin';
import { BinModel } from '../../../models/BinsModel';
import {useNavigate} from 'react-router-dom';
import { ItemModel } from '../../../models/ItemModel';

interface Props {
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  items: ItemModel[];
}

const ListBins = ({bins, setBins, items}: Props) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState<string>("");
  
  const onEditBin = (binCode: string) => navigate(`/bins/${binCode}/edit` );

  const filteredBins = useMemo(() => {
    const keyword = filterText.trim().toLowerCase();
    if (!keyword) return bins;

    return bins.filter((bin) => {
      const binCode = bin.binCode.toLowerCase();
      const itemCode = ( bin.item ?? '').toLowerCase();
      const item = items.find(item => item.code.toLowerCase() === itemCode);
      const itemDescription = item?.description1.toLowerCase();
     
      return binCode.includes(keyword) || itemCode.includes(keyword) || itemDescription?.includes(keyword);
    });
  }, [bins, items, filterText]);

  return (
    <section id="listBins">    
      <div className='w-full mx-auto px-10 mb-5 md:px-6 '>
        <label className='block text-sm font-medium mb-2'>
          Filter Bins
        </label>
        <input 
          type="text" 
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder='Search by bin code or its item'
          className='w-full rounded-md border px-3 py-2'
        />
      </div>
      {/* <div className='relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '> */}
      <div className='relative flex flex-wrap  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '>
        {filteredBins.length > 0 ? (
            filteredBins.map((aBin) => {
              return (
                <CardBin aBin={aBin} items={items} onEditBin={onEditBin}/>
              );
            })
          ):(
        
            <h3 className='my-3 text-xl font-semibold text-center md:text-xl'>
              No bins to show.
            </h3> 
          )
        }
      </div>
    </section>
  )
}

export default ListBins