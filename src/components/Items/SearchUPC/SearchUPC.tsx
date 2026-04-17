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
                <h6>Try scan barcode to see if your <strong><i>common supermarket item</i></strong> (e.g. Lysol) is listed in the external API for UPC database: </h6>
                <input value={searchUPC} onChange={handleSearchUPCChange}></input>
                <button className='btn btn-dark' type='submit'>Click here to Search in UPC API (click again if not shown up in first try.)</button>
            </form>
            
        </div>
    )  
  
}


export default SearchUPC;