import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

interface ItemCodeDetailProps {
    selectedCode: string;
}
    
    export const DetailButtonColumn: React.FC<ItemCodeDetailProps> = ({selectedCode}) => {
    return (
        <div id={'printing-' + selectedCode}  >
            <Link className='btn btn-light' to={`/item/`}>
                {/* {`${selectedCode}`} */}
                View
            </Link>
        </div>
        
    )
}