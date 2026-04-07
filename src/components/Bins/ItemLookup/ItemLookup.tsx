import React, {useState, useMemo} from 'react'

interface Props {
  isOpen: boolean;
  items: ItemModel[];
  onClose: () => void;
  onSelect: (item: ItemModel) => void;
}

const ItemLookup = ({ isOpen, items, onClose, onSelect }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const filteredItems = useMemo(() => {
    const lowerKeyword = keyword.trimEnd().toLowerCase();
    return items.filter((item) => item.code.toLowerCase().includes(lowerKeyword) || item.description1.toLocaleLowerCase().includes(lowerKeyword) ) ;
  }, [items, keyword] );

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50flex items-center justify-center bg-black/90 text-white'>
      <div className='w-full max-w-3xl rounded-xl bg-white shadow-lg'>
        <div className='flex items-center justify-between border-b px-4 py=3'>
            <h2 className='text-xl font-bold text-black'>
              Item Lookup
            </h2>
            <button onClick={onClose}
              className='text-gray-500 hover:text-black'
            >
              X
            </button>
        </div>
      </div>
      <div className='p-4 space-y-4'>
        <input 
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search by item code or description 1'
          className='w-full rounded-md border px-2 py-2'
        />
        <div className='max-h-80 overflow-y-auto border rounded-md'>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <button 
                key={item.code}
                type='button'
                onClick={() => onSelect(item)}
                className='w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black    border-b'
              >
                <div className='font-medium'> {item.code} </div>
                {/* <div className='text-sm text-gray-500'> {item.description1} </div> */}
                <div className='text-sm'> {item.description1} </div>
              </button>
            ))
          ) : (
            <div className='p-4 text-sm text-gray-500'>
              No Items found
            </div>

          )}
        </div>
        
      </div>
      <div className='max-h=80 overflow-y-auto border rounded-md'>

      </div>
    </div>
  )
}

export default ItemLookup