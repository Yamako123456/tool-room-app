import React, {useState} from 'react'
import { ItemCodeBarcode } from './ItemCodeBarcode';

export const ItemRowItem: React.FC<{
    isDisableClick: boolean,
    index: number,
    key: string,
    item: ItemModel,
    setSelectedCode: Function,
    selectedCode: string,
    // className: string
}> = (props) => {

    const [selectedRow, setSelectedRow] = useState(0);

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleRowDblClick= (theIndex: number) => {
        if (props.isDisableClick)
            return;

        //console.log(props.index, props.item.code)
        props.setSelectedCode(props.item.code)
        setSelectedRow(theIndex)
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
            <td style={{ padding: '10px' }}>{props.item.code}</td>
            <td style={{ padding: '10px' }}>{props.item.description1}</td>
            <td style={{ padding: '10px' }}>{props.item.itemType}</td>
            <td style={{ padding: '10px' }}>{props.item.supplierId}</td>
            <td style={{ padding: '10px' }}>{props.item.category}</td>
            <td style={{ padding: '10px' }}>{props.item.subCategory}</td>     
            <td style={{ padding: '10px' }}><ItemCodeBarcode selectedCode={props.item.code} /></td>     
        </tr>  
    )
}

