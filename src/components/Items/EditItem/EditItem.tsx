import React, { useEffect, useState } from 'react'
import { ItemModel } from '../../../models/ItemModel';
import { useParams } from 'react-router-dom';
import SearchUPC from '../SearchUPC/SearchUPC';
import { ITEM_TYPES } from '../../../constants/product';
import SupplierLookup from '../../Suppliers/SupplierLookup/SupplierLookup';
import { SupplierModel } from '../../../models/SupplierModel';

interface Props {
  items: ItemModel[];
  setItemNumber: React.Dispatch<React.SetStateAction<string>>;
  itemNumber: string;
  suppliers: SupplierModel[];
  selectedSupplier: SupplierModel | null;  
  setSelectedSupplier: React.Dispatch<React.SetStateAction<SupplierModel | null>>;
  itemSupCode: string | undefined;
  setItemSupCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  
  itemDescription: string;
  setItemDescription: React.Dispatch<React.SetStateAction<string>>;
  itemImage: string;
  setItemImage: React.Dispatch<React.SetStateAction<string>>;
  itemType: ItemType;
  setItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  itemUnitPrice: number;
  setItemUnitPrice: React.Dispatch<React.SetStateAction<number>>;
  itemIssueCost: number;
  setItemIssueCost: React.Dispatch<React.SetStateAction<number>>;
  uom: string;
  setUom: React.Dispatch<React.SetStateAction<string>>;
  packQty: number;
  setPackQty: React.Dispatch<React.SetStateAction<number>>;
  mfg: string;
  setMfg: React.Dispatch<React.SetStateAction<string>>;
  mfgItem: string;
  setMfgItem: React.Dispatch<React.SetStateAction<string>>;
  leadTime: number;
  setLeadTime: React.Dispatch<React.SetStateAction<number>>;
  orderQty: number;
  setOrderQty: React.Dispatch<React.SetStateAction<number>>;
  lookupUPC: string;
  isLookupSupOpen: boolean;
  setIsLookupSupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isItemActive: boolean;
  setIsItemActive: React.Dispatch<React.SetStateAction<boolean>>;
  onLookupUPCSubmit: (e: any) => void;
  handleEditItem: () => void;
  handleDeleteItem: () => void;
  handleLookupUPCChange: (e: any) => void;  
  cancelEditItem: () => void;
  itemDateCreated: Date;
  setItemDateCreated: React.Dispatch<React.SetStateAction<Date>>;
  isItemDisabled: boolean;
  setIsItemDisabled:  React.Dispatch<React.SetStateAction<boolean>>;
  setLookupUPC: React.Dispatch<React.SetStateAction<string>>;
  isItemAssignedToBin: (itemCode: string) => boolean;
  disableItem: (itemCode: string) => void;
}

const EditItem = ({
  items,
  suppliers,
  itemSupCode,
  setItemSupCode,
  selectedSupplier,
  setSelectedSupplier,
  itemNumber,
  setItemNumber,
  isLookupSupOpen,
  setIsLookupSupOpen,
  cancelEditItem,
  itemDescription,
  setItemDescription,
  itemImage,
  setItemImage,
  itemType,
  setItemType,
  itemUnitPrice,
  setItemUnitPrice,
  itemIssueCost,
  setItemIssueCost,
  uom,
  setUom,
  packQty, 
  setPackQty,
  mfg,
  setMfg,
  mfgItem,
  setMfgItem,
  leadTime,
  setLeadTime,
  orderQty,
  setOrderQty,
  onLookupUPCSubmit,
  lookupUPC,
  setLookupUPC,
  handleLookupUPCChange,
  isItemActive,
  setIsItemActive,
  handleDeleteItem,
  handleEditItem,
  itemDateCreated,
  setItemDateCreated,
  isItemDisabled,
  setIsItemDisabled,
  isItemAssignedToBin,
  disableItem,
  
}: Props) => {

  const [imageError, setImageError] = useState<boolean>(false);
  const { itemCode } = useParams<{itemCode: string}>();
  const selectedItem = items.find(item => item.code === itemCode);
  
  useEffect(() => {
    if (!selectedItem) return;
    setItemNumber(selectedItem.code)
    setItemSupCode(selectedItem.supCode);
    // itemSupCode && // this is stale!
    selectedItem.supCode &&
      setSelectedSupplier( suppliers.find(
        sup => sup.supCode === selectedItem.supCode) ?? null
      );
        
    setItemDescription(selectedItem.description1);
    setItemImage(selectedItem.itemImage);
    setItemType(selectedItem.itemType);
    setItemUnitPrice(selectedItem.unitPrice);
    setItemIssueCost(selectedItem.issueCost);
    setUom(selectedItem.uom);
    setPackQty(selectedItem.packQty);
    setMfg(selectedItem.mfg);
    setMfgItem(selectedItem.mfgItem);
    setLeadTime(selectedItem.leadTime);
    setOrderQty(selectedItem.orderQty);
    setItemDateCreated(selectedItem.dateCreated);

    setIsItemActive(selectedItem.active);
    setIsItemDisabled(selectedItem.disabled);
    // setIsLookupItemOpen(false);  
    
    setLookupUPC("");

    setIsItemActive(selectedItem.active);
    
  }, [selectedItem, suppliers]  );

  if (!selectedItem) return null;
  
  return (
   <div className='mb-1 block text-sm font-medium'>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        <div>
          <h1 className='text-2xl font-semibold'>
            Edit Item
          </h1>
          <p className='text-sm text-gray-500'>
            Edit item attributes or assign new or different supplier.
          </p>
        </div>
        <div>
            <h2 className='text-xl font-semibold'>
            Switch to different household item by API lookup.
          </h2>
          <SearchUPC  
            onSearchUPCSubmit={onLookupUPCSubmit} 
            searchUPC={lookupUPC} 
            handleSearchUPCChange={handleLookupUPCChange}/>
        </div>

        <div className='space-y-4'>
          <div>
            <label className="block text-sm font-medium mb-1">
              Item Code
            </label>
            <input
              readOnly
              type="text"
              value={itemNumber}
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <input
              type="text"
              value={itemDescription}
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
              value={itemImage}
              onChange={(e) => setItemImage(e.target.value)}
              placeholder='Enter URL for item image'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={itemImage}
              onChange={(e) => {setItemImage(e.target.value);  setImageError(false);}}
              placeholder='Enter URL for item image'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div className="flex gap-1 items-baseline  text-gray-800">
            <span className='m-2'>
              {itemImage && !imageError ? (
                
                <img
                src={itemImage}
                alt={itemNumber}
                className="h-40 object-contain rounded border"
                onLoad={() => setImageError(false)}
                onError={() => setImageError(true)}
                />
              ) : "No Image"}
            </span>
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
              value={itemUnitPrice}
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
              value={itemIssueCost}
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
              value={packQty}
              onChange={(e) => setPackQty(Number(e.target.value))}
              placeholder='Enter pack quantity'
              className='w-full rounded-md border px-3 py-2'
            /> 
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Assign supplier
            </label>
            <div className='flex gap-2'>
              <input
                readOnly
                value={ selectedSupplier ? `${selectedSupplier.supCode} - ${selectedSupplier.name}` : "" }
                
                className='w-full rounded-md border px-3 py-2'
                placeholder={`${!selectedSupplier ? "Use Lookup to select supplier" : ""}`}
                /> 
                <button
                  type='button'
                  onClick={() => setIsLookupSupOpen(true)}
                  className='rounded-md border px-4 py-2 hover:bg-green-100'
                  >
                  Lookup
                </button>

                <SupplierLookup
                  isOpen={isLookupSupOpen} 
                  suppliers={suppliers} 
                  onClose={() => setIsLookupSupOpen(false)} 
                  onSelect={ (sup) => {
                    setSelectedSupplier(sup);
                    setItemSupCode(sup.supCode);
                    setIsLookupSupOpen(false);
                  }
                }
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
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Manufacturer
            </label>
            <input
              type="text"
              value={mfg}
              onChange={(e) => setMfg(e.target.value)}
              placeholder="Enter manufacturer name"
              
              
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Manufacturer Item /UPC code
            </label>
            <input
              type="text"
              value={mfgItem}
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
              value={leadTime}
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
              value={orderQty}
              onChange={(e) => setOrderQty(Number(e.target.value))}
              placeholder='Enter order quantity'
              className='w-full rounded-md border px-3 py-2'
            />
          </div>
          <div className='flex justify-end gap-3'>
            <button
              className='px-4 py-2 border rounded-lg'
              onClick={ cancelEditItem}
            >
              Cancel
            </button>
            <button
              className='px-4 py-2 border rounded-lg bg-blue-600 hover:bg-blue-700 text-white'
              onClick={handleEditItem}
            >
              Save Changes
            </button>

          </div>
        </div>
      </div>  
      
      {/* Danger Zone */}
      
      { !selectedItem.active && 
      <div className='mb-5 border border-red-300 rounded-lgp-4 bg-red-50'>
        <h2 className='text-red-700 text-2xl font-semibold" mb-2'>
          Delete Unused Item
        </h2>
        <p className='text-sm text-red-600 mb-4'> 
          This item has not been used yet and can be safely removed.
        </p>
        <button
          className='mx-2 mb-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'
          onClick={ () => { if (window.confirm(`Delete this unused bin: ${selectedItem.code}?`)) {handleDeleteItem() } } }                    
        >
          Delete Item
        </button>
      </div>      
      }

      { selectedItem.active && isItemAssignedToBin(itemNumber) &&
      <div className='mb-5 border border-red-300 rounded-lgp-4 bg-red-50'>
        <h2 className='text-red-700 text-2xl font-semibold" mb-2'>
          Disabled Unassigned Item
        </h2>
        <p className='text-sm text-red-600 mb-4'> 
          This active item is no longer assigned to any bin and can be safely disabled.
        </p>
        <button
          className='mx-2 mb-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'
          // onClick={ () => { if (window.confirm(`Disable this unassigned item: ${selectedItem.code}?`)) {disableItem(itemNumber) } } }                    
          onClick={ () => { if (window.confirm(`Disable this unassigned item: ${selectedItem.code}?`)) {disableItem(itemNumber) } } }                    
        >
          Disabled Item
        </button>
      </div>      
      }
    </div>
  )
}

export default EditItem