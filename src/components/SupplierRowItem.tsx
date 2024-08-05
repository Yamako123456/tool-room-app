import React, {useState, useEffect} from 'react'

import { useReactToPrint } from 'react-to-print';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';




export const SupplierRowItem: React.FC<{
    isDisableClick: boolean,
    index: number,
    key: string,
    supplier: SupplierModel,
    setSelectedMyNo:  (myNo: string) => void,
    selectedMyNo: string,
    showingDetail:  (e: any) => void,
    isShowDetail: boolean
    // className: string
}> = (props) => {
    // alert('isDisableClick = ' + props.isDisableClick)

    const [selectedRow, setSelectedRow] = useState(0);

    // const [triggerPrint, setTriggerPrint] = useState(false); // State to trigger navigation

    // const usDollarFormatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    // });

    const handleRowClick= (theIndex: number) => {
        if (props.isDisableClick)
            return;

        props.setSelectedMyNo(props.supplier.myNo)
        setSelectedRow(theIndex)
    }

    const navigate = useNavigate();


    return (
         <tr 
            key={props.supplier.myNo}   
            onClick={() => handleRowClick(props.index)}
            style={{
                backgroundColor: props.selectedMyNo === props.supplier.myNo ? 'papayawhip' : 'transparent',
                border: props.selectedMyNo === props.supplier.myNo ? '2px solid #000' : 'none'
              }}
        >
            <td style={{ padding: '10px' }}>{props.supplier.myNo}</td>
            <td style={{ padding: '10px' }}>{props.supplier.myName}</td>
            <td style={{ padding: '10px' }}>{props.supplier.email}</td>
            <td style={{ padding: '10px' }}>{props.supplier.phone}</td>
            <td style={{ padding: '10px' }}>{
               
               props.supplier.calibrator ? (<span>Yes</span>)
                                         : (<span>No</span>)
            }</td>
            <td style={{ padding: '10px' }}>{
                props.supplier.regrinder ? (<span>Yes</span>)
                                         : (<span>No</span>)
            }</td>
            
            <td style={{ padding: '10px' }}>
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

