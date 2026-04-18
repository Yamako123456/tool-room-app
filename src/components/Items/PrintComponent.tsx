import React, { useRef } from 'react'
import {ReactToPrint} from 'react-to-print';
import { useNavigate } from 'react-router-dom';
import { ItemModel } from '../../models/ItemModel';

interface PrintComponentProps {
    barcode: string;
    items: ItemModel[];
}

export const PrintComponent: React.FC<PrintComponentProps> = ({barcode, items}) => {
    const componentRef = useRef<HTMLDivElement>(null);
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/items');
    }

    const item = items.find(item => item.code == barcode);
    
    return (
        <div>
            <div className='row'>
                <h1 className='pb-3'>Print Barcode</h1>
                <div className='mb-3 text-lg font-semibold'>Item: {barcode} - {item?.description1} </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <button 
                    className="my-2 btn btn-outline-secondary w-20"
                    onClick={handleGoBack}
                >
                    ← Back
                </button>
            </div>
            <ReactToPrint
            trigger={() => <button className='btn btn-primary'>Print the barcode</button>}
            content={() => componentRef.current}
            documentTitle={`Barcode for ${barcode}`}
            pageStyle={`
                @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

                @page {
                margin: 12mm;
                }

                body {
                font-family: Arial, sans-serif;
                }
            `}
            />

            <div ref={componentRef} className="container text-center mt-4">
                <div className="border p-4">
                    <h3 className="mb-3">{item?.description1}</h3>

                    <div
                    style={{
                        fontFamily: '"Libre Barcode 39 Text", cursive',
                        fontSize: '50px'
                    }}
                    >
                    {`*${barcode}*`}
                    </div>
                </div>
                
            </div>
        </div>
    )
}