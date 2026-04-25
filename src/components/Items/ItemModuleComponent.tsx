import React, { useState } from 'react'
import { ItemTableSection } from "./ItemTableSection";
import { NewItemForm } from "./NewItemForm";
// import { initialItems } from "../../data/InitialItems";
import { ItemModel } from '../../models/ItemModel';

type Props = {
    items: ItemModel[];
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
    isShowEntryForm: boolean;
    setIsShowEntryForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ItemModuleComponent = ({ items, setItems, isShowEntryForm, setIsShowEntryForm }: Props) => {
    
    const [isShowDetail, setIsShowDetail] = useState(false);

    const addItem = (
        code: string,
        description1: string,
        description2: string,
        itemType: string,
        unitPrice: number,
        issueCost: number,
        supplierId: string,
        itemImage: string,
        category: string,
        packQty: number,
        orderQty: number,
        weigh: boolean,
        weight: string,
        uom: string,
        leadTime: number,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
    ) => {

        if (items.find(itm => itm.code === code))
            return;

        const newItem = {
            code: code,
            description1: description1,
            itemImage: itemImage,
            itemType: itemType,
            unitPrice: unitPrice,
            issueCost: issueCost,
            uom: uom,
            packQty: packQty,
            supCode: supplierId, 
            mfgItem: mfgItem, 
            leadTime: leadTime,
            orderQty: orderQty, 
            dateCreated: new Date(),
            active: false,
            disabled: false,
            

            // ----Obsolete---------
            category: category,
            weigh: weigh,
            description2: description2,
            weight: weight,
            mfg: mfg,
            notes: notes,
            lastIssue: undefined,
            createdBy: '',

        }
        setItems(prevItems => [...prevItems,
        newItem as ItemModel
        ]);
    }

    const updateItem = (
        originalCode: string,
        code: string,
        description1: string,
        description2: string,
        itemType: string,
        unitPrice: number,
        issueCost: number,
        supCode: string,
        itemImage: string,
        category: string,
        packQty: number,
        orderQty: number,
        weigh: boolean,
        weight: string,
        uom: string,
        leadTime: number,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
    ) => {
        if (code !== originalCode &&
            items.find(itm => itm.code === code)) {
            alert('Your new code alread exists! Update aborted. Pleas try again.')
            return;
        }

        const originalItem: ItemModel = items.filter(
            item => item.code === originalCode
        )[0];
        const index = items.findIndex(itm => itm.code === originalCode);
        if (index !== -1) {
            
            const newItem: ItemModel = {
                code: code,
                description1: description1,
                itemImage: itemImage,
                itemType: itemType,
                unitPrice: unitPrice,
                issueCost: issueCost,
                uom: uom,
                packQty: packQty,
                supCode: supCode,
                mfg: mfg ?? '',
                mfgItem: mfgItem ?? '',
                leadTime: leadTime,
                orderQty: orderQty,
                dateCreated: originalItem.dateCreated,
                active: originalItem.active,
                disabled: originalItem.disabled,
                // ----Obsolete---------
                category: category,
                weigh: weigh,
                description2: description2,
                weight: weight,
                notes: notes,
                lastIssue: originalItem.lastIssue,
                createdBy: originalItem.createdBy,
            }

            const shallowCopiedItems: ItemModel[] = [
                ...items.slice(0, index) as ItemModel[],
                newItem as ItemModel,
                ...items.slice(index + 1) as ItemModel[]
            ];

            setItems(shallowCopiedItems);
        }
    }

    const deleteItem = (originalCode: string) => {
        setItems(
            items.filter( prev => prev.code !== originalCode || prev.active  )
        );
    }   

    return (
        <div className='m-6'>
                        {isShowEntryForm && (

                <div className='card mt-5' style={{ backgroundColor: 'lightblue' }}>
                    
                    <div className='card-body'>
                        <NewItemForm
                            isNew={true}
                            selectedCode={''}
                            addItem={addItem}
                            deleteItem={deleteItem}
                            items={items}
                            updateItem={updateItem}
                            setIsShowEntryForm={setIsShowEntryForm}
                            setIsShowDetail={setIsShowDetail}
                            caption={'Add'}
                            isShowDetail={isShowDetail}
                        />
                    </div>
                </div>
            )}
            <ItemTableSection
                addItem={addItem}
                updateItem={updateItem}
                deleteItem={deleteItem}
                items={items}
                setIsShowEntryForm={setIsShowEntryForm}
                isShowDetail={isShowDetail}
                setIsShowDetail={setIsShowDetail}
            />

            {/* {isShowEntryForm && (

                <div className='card mt-5' style={{ backgroundColor: 'lightblue' }}>
            
            <div className='mb-1'>
                <h1 className="text-2xl font-semibold">Add Item</h1>
                 <p className="text-sm text-gray-500">Create a new item.</p>
            </div> 


                </div>
            )} */}
        </div>

    )
}
