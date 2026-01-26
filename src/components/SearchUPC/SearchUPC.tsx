import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    searchUPC: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement> ) => void;
};

const SearchUPC  : React.FC<Props> = ({onClick, searchUPC, handleChange}: Props): JSX.Element => {
    return (
        <div>
            <h6>Enter UPC or scan barcode (Optional): </h6>
            <input value={searchUPC} onChange={(e) => handleChange(e)}></input>
            <button className='btn btn-dark' onClick={(e) => onClick(e)}>API</button>
        </div>
    )  
  
}


export default SearchUPC;