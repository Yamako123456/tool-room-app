import React, { useRef } from 'react'
import {ReactToPrint} from 'react-to-print';

interface PrintComponentProps {
    barcode: string;
}

export const PrintComponent: React.FC<PrintComponentProps> = ({barcode}) => {
    const componentRef = useRef<HTMLDivElement>(null);
    
    return (
        <div>
            <h1>Print Barcode Module {barcode}</h1>
             <ReactToPrint
                trigger={() => <button> Print the barcode</button>}
                content = {() => componentRef.current}
                documentTitle={`Barcode for ${barcode}`}
                pageStyle="print"
            />

            <div ref={componentRef}>
                <div className='accordion-collapse collapse show' id={`printing-${barcode}`}>
                    <div className='accordion-body  libre-barcode-39-text-regular' style={{ fontSize: '80px' }}>
                        {`*${barcode}*`}
                    
                    </div>
                </div> 
            </div>
        </div>
    )
}