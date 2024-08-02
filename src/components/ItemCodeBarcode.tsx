import React, {useState} from 'react'
import { useReactToPrint } from 'react-to-print';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import {PrintComponent} from './PrintComponent';

interface ItemCodeBarcodeProps {
    selectedCode: string;
    setSelectedCode: Function;
}
    
    export const ItemCodeBarcode: React.FC<ItemCodeBarcodeProps> = ({selectedCode}) => {
    // export const ItemCodeBarcode: React.FC<ItemCodeBarcodeProps> = ({selectedCode, setSelectedCode}) => {
 
        const navigate = useNavigate();

        const handleBarcodeClick = () => {
            // setSelectedCode(selectedCode);
            navigate(`/print/${selectedCode}`);
        }    
 
        return (
        <div id={'printing-' + selectedCode}  >
            <button className='libre-barcode-39-text-regular' onClick={handleBarcodeClick}>
             {`*${selectedCode}*`}
            </button>

            {/* <Link className='accordion-body  libre-barcode-39-text-regular' to={`/print/${selectedCode}`}>
                {`*${selectedCode}*`}
            </Link> */}
        </div>
        
    )
}