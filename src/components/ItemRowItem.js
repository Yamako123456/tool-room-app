import React, {useState} from 'react'

function ItemRowItem(props) {

    const [selectedRow, setSelectedRow] = useState(0);

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleRowDblClick= () => {
        console.log(props.index, props.item.code)
        props.setSelectedCode(props.item.code)
        setSelectedRow(props.index)
    }

    return (
        <tr 
            key={props.item.code}   
        onDoubleClick={() => handleRowDblClick(props.index)}
        
        >
            <td>{props.item.code}</td>
            <td>{props.item.description1}</td>
            {/* <td>{props.item.description2}</td> */}
            <td>{props.item.itemType}</td>
            {/* <td>{usDollarFormatter.format(props.item.unitPrice)}</td> */}
            {/* <td>{usDollarFormatter.format(props.item.issueCost)}</td> */}
            <td>{props.item.suppierId}</td>
            {/* <td>{props.item.itemImage}</td> */}
            <td>{props.item.cateory}</td>
            <td>{props.item.subCategory}</td>     
        </tr>  
    )
}

export default ItemRowItem

