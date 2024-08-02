import React, { useRef } from 'react'
import {ReactToPrint} from 'react-to-print';
import { useNavigate } from 'react-router-dom';

interface PrintComponentProps {
    barcode: string;
}

export const PrintComponent: React.FC<PrintComponentProps> = ({barcode}) => {
    const componentRef = useRef<HTMLDivElement>(null);
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/items');
    }

    return (
        <div>
            <div className='row'>
                <h1 className='col-10'>Print Barcode Module {barcode}</h1>
                <div className='col-2'>
                    <button onClick={handleGoBack}>Go Back to Items</button>
                </div>
            </div>
            <ReactToPrint
                trigger={() => <button className='btn btn-primary'> Print the barcode</button>}
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