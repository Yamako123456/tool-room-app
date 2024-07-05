import React, {useState} from 'react'

import ItemTableSection from "./ItemTableSection";
import NewItemForm from './NewItemForm';

function ItemModuleComponent() {
    const [showEntryForm, setShowEntryForm] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const [items, setItems] = useState([
            {
                code: "153KJ83",
                description1: "Makita Cordless Pistol-Grip Drills",
                description2: "Tools using lower-voltage batteries are generally lighter and more compact but less powerful than tools using higher-voltage batteries.",
                itemType: "Durable",
                unitPrice: "161.54",
                issueCost: "5.00",
                suppierId: "XFD12Z",
                itemImage: "https://d3jdpongi7ohqb.cloudfront.net/drill_codeless_green.jpg",
                category: "Tool",
                subCategory: "Power Tool",
                active: true
            },
            {
                code: "2830D20",
                description1: "Milwaukee General Purpose Cordless Circular Saws",
                description2: "General purpose cordless circular saws make cross, rip, and beveled cuts in wood and other materials",
                itemType: "Durable",
                unitPrice: "318.56",
                issueCost: "5.00",
                suppierId: "Milwaukee",
                itemImage: "https://d3jdpongi7ohqb.cloudfront.net/power-tools-circular-saw-orange.jpg",
                category: "Tool",
                subCategory: "Power Tool",
                active: true
            },
            {
                code: "9150F44",
                description1: "CHANNELLOCK Wrench",
                description2: "Slim Jaw,8 Chrome, 8 in Overall Lg, 1 1/2 in Jaw Capacity",
                itemType: "Durable",
                unitPrice: "48.79",
                issueCost: "5.00",
                suppierId: "8SWCB",
                itemImage: "https://d3jdpongi7ohqb.cloudfront.net/wrench_150F44.jpg",
                category: "Tool",
                subCategory: "Hand Tool",
                active: true
            },
    ]
    )

    const addItem = (
        code,
        description1,
        description2,
        itemType,
        unitPrice,
        issueCost,
        suppierId,
        itemImage,
        category,
        subCategory ) => {
            
            const newItem = {
                code: code,
                description1: description1,
                description2: description2,
                itemType: itemType,
                unitPrice: unitPrice,
                issueCost: issueCost,
                suppierId: suppierId,
                itemImage: itemImage,
                category: category,
                subCategory: subCategory,
                active: true
            }
            
            setItems(items => [...items, newItem])
    }

    const inactivateItem = (code) => {
        let modifiedItems = items.map(item => 
            item.code === code ? { ...item, active: false } : item
        );    

        setItems(modifiedItems);
    } 

    return(
        <div className='mt-5 container'>

            <ItemTableSection 
                addItem={addItem}
                items={items} 
                inactivateItem={inactivateItem}
                setShowEntryForm={setShowEntryForm}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
            />

            <div className='card mt-3'>
                <div className='card-body'>

                    <button className='btn btn-primary' 
                        onClick={() => {setShowEntryForm(true)}}
                        disabled={showEntryForm}
                    >Add New Item</button>    
                </div>
            </div>
            

            {showEntryForm && (

                <div className='card mt-5'>
                    <div className='card-header'>
                        New Item Entry Form
                    </div>
                    <div className='card-body'>
                        <NewItemForm 
                            isNew={true}
                            selectedCode={''}
                            addItem={addItem} 
                            items={items} 
                            
                            setShowEntryForm={setShowEntryForm}
                            setShowDetail={setShowDetail}
                            caption={'Add New Item'}
                            
                        />
                    </div>
                </div>

            )}
        </div>
        
    )
}

export default ItemModuleComponent;