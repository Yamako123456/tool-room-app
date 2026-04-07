import React from 'react'
import CardBin from '../CardBin/CardBin';

interface Props {
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  items: ItemModel[];
}

const ListBins = ({bins, setBins, items}: Props) => {
  return (
    <section id="listBins">    
      <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
        <>
          {bins.length > 0 ? (
              bins.map((aBin) => {
                return (
                  <CardBin aBin={aBin} items={items} />
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