import React, {useState} from 'react'

interface ItemCodeBarcodeProps {
    selectedCode: string;
}

export const ItemCodeBarcode: React.FC<ItemCodeBarcodeProps> = ({selectedCode}) => {
    return (
    <div>
        <span className="libre-barcode-39-text-regular">
            {`*${selectedCode}*`}
        </span>
    </div> 
    )
}