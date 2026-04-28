import React from 'react'
import SupplierLookup from '../../Suppliers/SupplierLookup/SupplierLookup';
import { ITEM_TYPES } from '../../../constants/product';
import SearchUPC from '../SearchUPC/SearchUPC';

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
  itemType: ItemType;
  setItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  setItemUnitPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemIssueCost: React.Dispatch<React.SetStateAction<number>>;
  uom: string;
  setUom: React.Dispatch<React.SetStateAction<string>>;
  setPackQty: React.Dispatch<React.SetStateAction<number>>;
  setMfg: React.Dispatch<React.SetStateAction<string>>;
  setMfgItem: React.Dispatch<React.SetStateAction<string>>;
  setLeadTime: React.Dispatch<React.SetStateAction<number>>;
  setOrderQty: React.Dispatch<React.SetStateAction<number>>;
  itemDateCreated: Date;
  setItemDateCreated: React.Dispatch<React.SetStateAction<Date>>;
  onLookupUPCSubmit: (e: any) => void;
  lookupUPC: string;
  handleLookupUPCChange: (e: any) => void;
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
  itemType,
  setItemType,
  setItemUnitPrice,
  setItemIssueCost,
  uom,
  setUom,
  setPackQty,
  setMfg,
  setMfgItem,
  setLeadTime,
  setOrderQty,
  itemDateCreated,
  setItemDateCreated,
  onLookupUPCSubmit,
  lookupUPC,
  handleLookupUPCChange,

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

        <SearchUPC  
          onSearchUPCSubmit={onLookupUPCSubmit} 
          searchUPC={lookupUPC} 
          handleSearchUPCChange={handleLookupUPCChange}/>

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
          <div className='flex gap-3 items-baseline'>
            <label className="block text-sm font-medium mb-1">
              Item Type: 
            </label>
            <div className="relative w-full">
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value as ItemType)}
                className='w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500'
              >         
                {ITEM_TYPES.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type.charAt(0) + type.slice(1).toLowerCase() }
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
          <div className='flex gap-3 items-baseline'>
            <label className="block text-sm font-medium mb-1">
              Unit of Measure (UoM):
            </label>
            <div className="relative w-full">
              <select
                value={uom}
                onChange={(e) => setUom(e.target.value)}
                className="
                  w-full appearance-none rounded-lg border border-gray-300 bg-white
                  px-4 py-2 pr-10 shadow-sm
                  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                "
              >
                <option value="qty">qty</option>
                <option value="pack">pack</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
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