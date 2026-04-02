import React from 'react'
import ListBins from './ListBins/ListBins';

interface Props {
  bins: BinModel[];
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  items: ItemModel[];
}

const Bins = ({bins, setBins, items}: Props) => {
  return (
    <section id="bins">
      <ListBins bins={bins} setBins={setBins} items={items} />
    </section>
  )
}

export default Bins