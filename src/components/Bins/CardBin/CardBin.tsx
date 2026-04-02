import React from 'react'

interface Props {
  aBin: BinModel;
  items: ItemModel[];
}



const CardBin = ({aBin, items}: Props) => {

  const item = items.find( itm => itm.code === aBin.item);

  return (
<div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Bin {aBin.binCode}</h2>

  <div className="space-y-2 text-gray-700">
   
    <p>
      <span className="font-semibold">Item Code:</span> {aBin.item}
    </p>
    {item?.description1}
    {item?.itemImage && (
      <img
        src={item.itemImage}
        alt={aBin.item}
        className="w-12 h-12 object-contain rounded border"
      />
    )}
    <p>
      <span className="font-semibold">Quantity:</span> {aBin.qty}
    </p>
    
  </div>
</div>
  )
}

export default CardBin