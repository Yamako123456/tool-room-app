import React, {useState} from 'react'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

import ItemTableSection from "./ItemTableSection";
import NewItemForm from './NewItemForm';

function ItemModuleComponent() {
    const [items, setItems] = useState([
            {
                code: "53KJ83",
                description1: "Makita Cordless Pistol-Grip Drills",
                description2: "Tools using lower-voltage batteries are generally lighter and more compact but less powerful than tools using higher-voltage batteries.",
                itemType: "Durable",
                unitPrice: "161.54",
                issueCost: "5.00",
                suppierId: "XFD12Z",
                itemImage: "https://d3jdpongi7ohqb.cloudfront.net/drill_codeless_green.jpg",
                cateory: "Tool",
                subCategory: "Power Tool",
                
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
                cateory: "Tool",
                subCategory: "Power Tool",
            },
            {
                code: "150F44",
                description1: "CHANNELLOCK Wrench",
                description2: "Slim Jaw,8 Chrome, 8 in Overall Lg, 1 1/2 in Jaw Capacity",
                itemType: "Durable",
                unitPrice: "48.79",
                issueCost: "5.00",
                suppierId: "8SWCB",
                itemImage: "https://d3jdpongi7ohqb.cloudfront.net/wrench_150F44.jpg",
                cateory: "Tool",
                subCategory: "Hand Tool",
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
        cateory,
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
                cateory:cateory,
                subCategory:subCategory
            }
            
            setItems(items => [...items, newItem])
    }

    return(
        <div className='mt-5 container'>

            <ItemTableSection items={items}/>

            <div className='card mt-5'>
                <div className='card-header'>
                    New Item Entry Form
                </div>
                <div className='card-body'>
                    <NewItemForm addItem={addItem} />
                </div>
            </div>
        </div>
        
    )
}

export default ItemModuleComponent;