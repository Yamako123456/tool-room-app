import React, { useState, useEffect } from 'react'
import { ItemCodeBarcode } from './ItemCodeBarcode';
import { DetailButtonColumn } from './DetailButtonColumn';


import { useReactToPrint } from 'react-to-print';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { PrintComponent } from './PrintComponent';




export const ItemRowItem: React.FC<{
    isDisableClick: boolean,
    index: number,
    key: string,
    item: ItemModel,
    setSelectedCode: (code: string) => void,
    selectedCode: string,
    showingDetail: (e: any) => void,
    isShowDetail: boolean
    // className: string
}> = (props) => {

    const [selectedRow, setSelectedRow] = useState(0);

    const [triggerPrint, setTriggerPrint] = useState(false); // State to trigger navigation

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleRowClick = (theIndex: number) => {
        if (props.isDisableClick)
            return;

        //console.log(props.index, props.item.code)
        props.setSelectedCode(props.item.code)
        setSelectedRow(theIndex)
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (triggerPrint && props.selectedCode) {
            navigate(`/print/${props.selectedCode}`);
            setTriggerPrint(false); // Reset the trigger
        }
    }, [triggerPrint, props.selectedCode, navigate]);

    const handleBarcodeClick = (iCode: string) => {
        props.setSelectedCode(iCode);

        setTriggerPrint(true);
        // navigate(`/print/${props.item.code}`);
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




            <td style={{ padding: '10px' }}>
                <div>
                    <button className='libre-barcode-39-text-regular' onClick={() => { handleBarcodeClick(props.item.code) }} >
                        {`*${props.item.code}*`}
                    </button>

                </div>
            </td>

            {/* <td style={{ padding: '10px' }}><ItemCodeBarcode selectedCode={props.item.code} setSelectedCode={props.setSelectedCode}/></td>      */}

            <td style={{ padding: '10px' }}>
                {/* <DetailButtonColumn selectedCode={props.item.code} /> */}
                <button className="btn btn-primary"
                    onClick={props.showingDetail}
                    disabled={props.isShowDetail}
                >
                    Show Detail
                </button>
            </td>

            <td style={{ padding: "10px", width: 60 }}>
                {props.item.itemImage ? (
                    <img
                        src={props.item.itemImage}
                        alt={`${props.item.code} thumbnail`}
                        style={{
                            width: 40,
                            height: 40,
                            objectFit: "cover",
                            borderRadius: 6,
                        }}
                    />
                ) : null}
            </td>
        </tr>
    )
}

