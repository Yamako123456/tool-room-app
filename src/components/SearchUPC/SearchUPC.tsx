import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
    onSearchUPCSubmit: (e: SyntheticEvent) => void;
    searchUPC: string | undefined;
    handleSearchUPCChange: (e: ChangeEvent<HTMLInputElement> ) => void;
};

const SearchUPC  : React.FC<Props> = ({onSearchUPCSubmit, searchUPC, handleSearchUPCChange}: Props): JSX.Element => {
    return (
        <div>
            <form onSubmit={onSearchUPCSubmit}>
                <h6>Enter UPC or scan barcode (Optional): </h6>
                <input value={searchUPC} onChange={handleSearchUPCChange}></input>
                <button className='btn btn-dark' type='submit'>Search UPC API</button>
            </form>
            
        </div>
    )  
  
}


export default SearchUPC;