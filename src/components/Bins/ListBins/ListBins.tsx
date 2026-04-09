import React from 'react'
import CardBin from '../CardBin/CardBin';
import { BinModel } from '../../../models/BinsModel';
import {useNavigate} from 'react-router-dom';

interface Props {
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  items: ItemModel[];
}

const ListBins = ({bins, setBins, items}: Props) => {
  const navigate = useNavigate();
  const onEdit = (bin: BinModel) => navigate("/bins/${bin.binCode}/edit" );

  return (
    <section id="listBins">    
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '>
        <>
          {bins.length > 0 ? (
              bins.map((aBin) => {
                return (
                  <CardBin aBin={aBin} items={items} onEdit={onEdit}/>
                );
              })
            ):(
         
              <h3 className='my-3 text-xl font-semibold text-center md:tex-xl'>
                There is no bins in your Toolroom.
              </h3> 
            )
          }

        </>
        
      </div>
    </section>
  )
}

export default ListBins