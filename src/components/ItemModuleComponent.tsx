import React, { useState } from 'react'
import { ItemTableSection } from "./ItemTableSection";
import { NewItemForm } from "./NewItemForm";

export const ItemModuleComponent = () => {
    const [isShowEntryForm, setIsShowEntryForm] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);

    const [items, setItems] = useState<ItemModel[]>([
        {
            recordId: undefined,
            code: "153KJ83",
            description1: "Makita Cordless Pistol-Grip Drills",
            description2: "Tools using lower-voltage batteries are generally lighter and more compact but less powerful than tools using higher-voltage batteries.",
            itemType: "Durable",
            unitPrice: 161.54,
            issueCost: 5.00,
            supplierId: "XFD12Z",
            itemImage: "https://d3jdpongi7ohqb.cloudfront.net/drill_codeless_green.jpg",
            category: "Tool",
            active: true,
            assigned: false,
            packQty: 1,
            orderQty: 1,
            weigh: false,
            weight: 0.0,
            uom: 'qyt',
            leadTime: 7,
            mfg: '',
            mfgItem: '',
            notes: '',
            lastIssue: undefined,
            dateCreated: undefined,
            createdBy: '',
        },
        {
            recordId: undefined,
            code: "2830D20",
            description1: "Milwaukee General Purpose Cordless Circular Saws",
            description2: "General purpose cordless circular saws make cross, rip, and beveled cuts in wood and other materials",
            itemType: "Durable",
            unitPrice: 318.56,
            issueCost: 5.00,
            supplierId: "Milwaukee",
            itemImage: "https://d3jdpongi7ohqb.cloudfront.net/power-tools-circular-saw-orange.jpg",
            category: "Tool",
            active: true,
            assigned: false,
            packQty: 1,
            orderQty: 1,
            weigh: false,
            weight: 0.0,
            uom: 'qyt',
            leadTime: 10,
            mfg: '',
            mfgItem: '',
            notes: '',
            lastIssue: undefined,
            dateCreated: undefined,
            createdBy: '',
        },
        {
            recordId: undefined,
            code: "9150F44",
            description1: "CHANNELLOCK Wrench",
            description2: "Slim Jaw,8 Chrome, 8 in Overall Lg, 1 1/2 in Jaw Capacity",
            itemType: "Durable",
            unitPrice: 48.79,
            issueCost: 5.00,
            supplierId: "8SWCB",
            itemImage: "https://d3jdpongi7ohqb.cloudfront.net/wrench_150F44.jpg",
            category: "Tool",
            active: true,
            assigned: true,
            packQty: 1,
            orderQty: 1,
            weigh: false,
            weight: 0.0,
            uom: 'qyt',
            leadTime: 4,
            mfg: '',
            mfgItem: '',
            notes: '',
            lastIssue: undefined,
            dateCreated: undefined,
            createdBy: '',
        },
    ]
    )

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
        weight: number,
        uom: string,
        leadTime: number,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
    ) => {

        if (items.find(itm => itm.code === code))
            return;

        const newItem = {
            recordId: undefined,
            code: code,
            description1: description1,
            description2: description2,
            itemType: itemType,
            unitPrice: unitPrice,
            issueCost: issueCost,
            supplierId: supplierId,
            itemImage: itemImage,
            category: category,
            active: true,
            assigned: false,
            packQty: packQty,
            orderQty: orderQty,
            weigh: weigh,
            weight: weight,
            uom: uom,
            leadTime: leadTime,
            mfg: mfg,
            mfgItem: mfgItem,
            notes: notes,
            lastIssue: undefined,
            dateCreated: new Date(),
            createdBy: '',
        }

        setItems(prevItems => [...prevItems,
        newItem as ItemModel
        ])

        // setItems(items => [...items, newItem])
    }

    const updateItem = (
        originalCode: string,
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
        weight: number,
        uom: string,
        leadTime: number,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
    ) => {
        // Pre-verified other places and they display nice modal popup. here only for just-in-case.
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
                recordId: originalItem.recordId,
                code: code,
                description1: description1,
                description2: description2,
                itemType: itemType,
                unitPrice: unitPrice,
                issueCost: issueCost,
                supplierId: supplierId,
                itemImage: itemImage,
                category: category,
                active: originalItem.active,
                assigned: originalItem.assigned,
                packQty: packQty,
                orderQty: orderQty,
                weigh: weigh,
                weight: weight,
                uom: uom,
                leadTime: leadTime,
                mfg: mfg,
                mfgItem: mfgItem,
                notes: notes,
                lastIssue: originalItem.lastIssue,
                dateCreated: originalItem.dateCreated,
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
        if (items.filter((itm) => itm.code === originalCode)[0].assigned) {

            const modifiedItems: ItemModel[] = items.map(item => {

                if (item.code === originalCode) {
                    return { ...item, active: false } as ItemModel;
                } else
                    return item;
            })
            setItems(modifiedItems)

        } else {

            setItems(items.filter(item => item.code !== originalCode));
        }


    }

    const inactivateItem = (code: string) => {
        const modifiedItems: ItemModel[] = items.map(item =>
            item.code === code ? { ...item, active: false } as ItemModel : item
        );

        setItems(modifiedItems);
    }

    return (
        <div className='mt-5 '>
            <div className="page-header">
                <h1>Manage Inventory Items</h1>
            </div>

            <ItemTableSection
                addItem={addItem}
                updateItem={updateItem}
                deleteItem={deleteItem}
                items={items}
                inactivateItem={inactivateItem}
                setIsShowEntryForm={setIsShowEntryForm}
                isShowDetail={isShowDetail}
                setIsShowDetail={setIsShowDetail}
            />

            {isShowEntryForm && (

                <div className='card mt-5' style={{ backgroundColor: 'lightblue' }}>
                    <div className='card-header'>
                        New Item Entry Form
                    </div>
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
            <div className='card mt-3'>
                <div className='card-body'>

                    <button className='btn btn-primary'
                        onClick={() => { setIsShowEntryForm(true) }}
                        disabled={isShowEntryForm}
                    >Add New Item</button>
                </div>
            </div>

        </div>

    )
}
