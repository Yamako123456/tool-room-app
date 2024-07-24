import React, {useState} from 'react'
import { ItemCodeBarcode } from './ItemCodeBarcode';
import { DetailButtonColumn } from './DetailButtonColumn';

export const ItemRowItem: React.FC<{
    isDisableClick: boolean,
    index: number,
    key: string,
    item: ItemModel,
    setSelectedCode:  (code: string) => void,
    selectedCode: string,
    showingDetail:  (e: any) => void,
    isShowDetail: boolean
    // className: string
}> = (props) => {

    const [selectedRow, setSelectedRow] = useState(0);

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleRowClick= (theIndex: number) => {
        if (props.isDisableClick)
            return;

        //console.log(props.index, props.item.code)
        props.setSelectedCode(props.item.code)
        setSelectedRow(theIndex)
    }

    return (
         <tr 
            key={props.item.code}   
            onClick={() => handleRowClick(props.index)}
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
            <td style={{ padding: '10px' }}><ItemCodeBarcode selectedCode={props.item.code} /></td>     
            <td style={{ padding: '10px' }}>
                {/* <DetailButtonColumn selectedCode={props.item.code} /> */}
                <button className="btn btn-primary"
                                onClick={props.showingDetail}
                                disabled={props.isShowDetail}
                            >
                                Show Detail
                </button>  
            </td>        
        </tr>  
    )
}

