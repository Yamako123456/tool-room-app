import React, {useState} from 'react'
import { useReactToPrint } from 'react-to-print';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {PrintComponent} from './PrintComponent';


interface ItemCodeBarcodeProps {
    selectedCode: string;
}
    
    export const ItemCodeBarcode: React.FC<ItemCodeBarcodeProps> = ({selectedCode}) => {
    return (
        <div id={'printing-' + selectedCode}  >
            <Link className='accordion-body  libre-barcode-39-text-regular' to={`/print/${selectedCode}`}>
                {`*${selectedCode}*`}
            </Link>
        </div>
        
    )
}