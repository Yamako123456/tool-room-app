import React, {useState} from 'react'
import { useReactToPrint } from 'react-to-print';
import {PrintComponent} from './PrintComponent';


interface ItemCodeBarcodeProps {
    selectedCode: string;
}

export const ItemCodeBarcode: React.FC<ItemCodeBarcodeProps> = ({selectedCode}) => {
    return (
    <div className='accordion'>
        <div className='accordion-item'>
            <div className="accordion-header">
                <button className='accordion-button' type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={'#printing-' + selectedCode} >
                    Print
                </button>
                <div className='accordion-collapse collapse hide' id={'printing-' + selectedCode}  >
                    <a className='accordion-body  libre-barcode-39-text-regular' href='#'>
                    {`*${selectedCode}*`}
                    
                    </a>
                </div>
            </div>
        </div>
    </div> 
    )
}