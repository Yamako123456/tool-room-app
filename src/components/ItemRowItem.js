import React, {useState} from 'react'

function ItemRowItem(props) {

    const [selectedRow, setSelectedRow] = useState(0);

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleRowDblClick= () => {
        if (props.isDisableClick)
            return;

        //console.log(props.index, props.item.code)
        props.setSelectedCode(props.item.code)
        setSelectedRow(props.index)
    }

    return (
         <tr 
            key={props.item.code}   
            onDoubleClick={() => handleRowDblClick(props.index)}
            style={{
                backgroundColor: props.selectedCode === props.item.code ? 'papayawhip' : 'transparent',
                border: props.selectedCode === props.item.code ? '2px solid #000' : 'none'
              }}
        >
            <td>{props.item.code}</td>
            <td>{props.item.description1}</td>
            <td>{props.item.itemType}</td>
            <td>{props.item.suppierId}</td>
            <td>{props.item.cateory}</td>
            <td>{props.item.subCategory}</td>     
        </tr>  
    )
}

export default ItemRowItem

