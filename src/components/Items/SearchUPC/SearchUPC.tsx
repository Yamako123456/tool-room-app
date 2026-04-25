import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
    onSearchUPCSubmit: (e: SyntheticEvent) => void;
    searchUPC: string | undefined;
    handleSearchUPCChange: (e: ChangeEvent<HTMLInputElement> ) => void;
};

const SearchUPC  : React.FC<Props> = ({onSearchUPCSubmit, searchUPC, handleSearchUPCChange}: Props): JSX.Element => {
    return (
    //     <div>
    //         <form onSubmit={onSearchUPCSubmit}>
    //             <h6>Try scan barcode to see if your <strong><i>common supermarket item</i></strong> (e.g. Lysol) is listed in the external API for UPC database: </h6>
    //             <input value={searchUPC} onChange={handleSearchUPCChange}></input>
    //             <button className='btn btn-dark' type='submit'>Click here to Search in UPC API (click again if not shown up in first try.)</button>
    //         </form>
            
    //     </div>
    // )  
        <div className="max-w-md mx-auto mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <form onSubmit={onSearchUPCSubmit} className="space-y-4">
        <div>
            <h2 className="text-lg font-semibold text-gray-900">
            UPC Barcode Lookup
            </h2>

            <p className="mt-2 text-sm text-gray-600">
            Scan or enter a barcode to check whether your{" "}
            <strong className="font-semibold text-gray-900">
                common supermarket item
            </strong>{" "}
            is listed in the UPC database.
            </p>

            <p className="mt-1 text-xs text-gray-500">
            Example: Lysol or another household product
            </p>
        </div>

        <div>
            <label
            htmlFor="upc-input"
            className="mb-1 block text-sm font-medium text-gray-700"
            >
            UPC Code
            </label>

            <input
            id="upc-input"
            name="upc"
            type="text"
            value={searchUPC}
            onChange={handleSearchUPCChange}
            placeholder="Enter or scan UPC code"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
            />
        </div>

        <button
            className="w-full rounded-lg bg-gray-900 px-4 py-2 font-medium text-white transition hover:bg-gray-700"
            type="submit"
        >
            Search UPC API
        </button>
        </form>
    </div>
  )    
}


export default SearchUPC;