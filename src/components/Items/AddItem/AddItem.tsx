import React from 'react'
import SupplierLookup from '../../Suppliers/SupplierLookup/SupplierLookup';

interface Props {
  supliers: SupplierModel[];
  itemSupCode: string | undefined;
  setItemSupCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedSupplier: SupplierModel | null;  
  setSelectedSupplier: React.Dispatch<React.SetStateAction<SupplierModel | null>>;
  setItemNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAddItem: () => void;
  isLookupSupOpen: boolean;
  setIsLookupSupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelAddItem: () => void;

  setItemDescription: React.Dispatch<React.SetStateAction<string>>;
  setItemImage: React.Dispatch<React.SetStateAction<string>>;
  setItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  setItemUnitPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemIssueCost: React.Dispatch<React.SetStateAction<number>>;
  setUom: React.Dispatch<React.SetStateAction<string>>;
  setPackQty: React.Dispatch<React.SetStateAction<number>>;
  setMfg: React.Dispatch<React.SetStateAction<string>>;
  setMfgItem: React.Dispatch<React.SetStateAction<string>>;
  setLeadTime: React.Dispatch<React.SetStateAction<number>>;
  setOrderQty: React.Dispatch<React.SetStateAction<number>>;
  itemDateCreated: Date;
  setItemDateCreated: React.Dispatch<React.SetStateAction<Date>>;
}

const AddItem = ({
  supliers,
  itemSupCode,
  setItemSupCode,
  selectedSupplier,
  setSelectedSupplier,
  setItemNumber,
  handleAddItem,
  isLookupSupOpen,
  setIsLookupSupOpen,
  cancelAddItem,
  setItemDescription,
  setItemImage,
  setItemType,
  setItemUnitPrice,
  setItemIssueCost,
  setUom,
  setPackQty,
  setMfg,
  setMfgItem,
  setLeadTime,
  setOrderQty,
  itemDateCreated,
  setItemDateCreated
}: Props) => {
  return (
    <div className='mb-1 block text-sm font-medium'>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        <div>
          <h1 className='text-2xl font-semibold'>
            Add Item
          </h1>
          <p className='text-sm text-gray-500'>
            create an new item and assign a supplier.
          </p>
        </div>
        <div className='space-y-4'>
          <div>
            <label className="block text-sm font-medium mb-1">
              Item Code
            </label>
            <input
              type="text"
              onChange={(e) => setItemNumber(e.target.value) }
              placeholder='Enter item code'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <input
              type="text"
              onChange={(e) => setItemDescription(e.target.value) }
              placeholder='Enter item description'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              onChange={(e) => setItemImage(e.target.value)}
              placeholder='Enter URL for item image'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Item Type (expendable or durable)
            </label>
            <input
              type="text"
              onChange={(e) => setItemType(e.target.value as ItemType)}
              placeholder='Select item type'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              UoM
            </label>
            <input
              type="text"
              onChange={(e) => setUom(e.target.value)}
              placeholder='Enter unit of measure'
              className='w-full rounded-md border px-3 py-2'
              />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Unit Price

            </label>
            <input
              type="number"
              onChange={(e) => setItemUnitPrice(Number(e.target.value))}
              placeholder='Enter unit price'
              className='w-full rounded-md border px-3 py-2'
              />
              
              </div>
              <div>
            <label className="block text-sm font-medium mb-1">
              Issue Cost
            </label>
            <input
              type="number"
              onChange={(e) => setItemIssueCost(Number(e.target.value))}
              placeholder='Enter issue cost'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Pack Qty
            </label>
            <input
              type="number"
              onChange={(e) => setPackQty(Number(e.target.value))}
              placeholder='Enter pack quantity'
              className='w-full rounded-md border px-3 py-2'
            /> 
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Assign supplier
            </label>
            <input
              readOnly
              value={ selectedSupplier ? `${selectedSupplier.supCode} - ${selectedSupplier.name}` : "" }
              
              className='w-full rounded-md border px-3 py-2'
              placeholder={`${!selectedSupplier ? "Use Lookup to select supplier" : ""}`}
              /> 
              <button
                type='button'
                onClick={() => setIsLookupSupOpen(true)}
              >
                Lookup
              </button>

              <SupplierLookup
              />
              <button 
                type='button'
                onClick={() =>{
                  setSelectedSupplier(null);
                  setItemSupCode(undefined);
                  setIsLookupSupOpen(false);
                }}
                className='rounded-md border px-4 py-2 hover:bg-slate-100'
              >
                Clear
              </button>  
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Manufacturer
            </label>
            <input
              type="text"
              onChange={(e) => setMfg(e.target.value)}
              placeholder="Enter manufacturer name"
              
              
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Manufacturer Item
            </label>
            <input
              type="text"
              onChange={(e) => setMfgItem(e.target.value)}
              placeholder='Enter item code used in the manufacturer'
              className='w-full rounded-md border px-3 py-2'
            /> 

          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Lead Time (days)
            </label>
            <input
              type="number"
             onChange={(e) => setLeadTime(Number(e.target.value))}
              placeholder='Enter number of days of lead time'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Order Qty
            </label>
            <input
              type="number"
              onChange={(e) => setOrderQty(Number(e.target.value))}
              placeholder='Enter order quantity'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              dateCreated: Date,

            </label>
            <input
              type="date"
              value={itemDateCreated.toISOString().split("T")[0]}
              onChange={(e) => {
                const str = e.target.value;  
                const aDate = new Date(str);
                setItemDateCreated(aDate);
              } }
            />
          </div>
          <div className='flex justify-end gap-3'>
            <button
              className='px-4 py-2 border rounded-lg'
              onClick={ cancelAddItem}
            >
              Cancel
            </button>
            <button
              className='px-4 py-2 border rounded-lg bg-blue-600 hover:bg-blue-700 text-white'
              onClick={handleAddItem}
            >
              Save Item
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItem