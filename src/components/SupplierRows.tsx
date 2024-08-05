import React, {useState} from 'react'

import {SupplierRowItem} from "./SupplierRowItem"



export const SupplierRows: React.FC<{
    activeSuppliers: SupplierModel[],
    isShowDetail: boolean,
    selectedMyNo: string,
    setSelectedMyNo:  (myNo: string) => void,
    sortBy: string,
    showingDetail:  (b: boolean) => void
}> = (props) => {
    return (
        <tbody>
            {props.activeSuppliers
                .sort((a, b) => {
                    if (props.sortBy === 'myName')
                        return a.myName.localeCompare(b.myName) 
                    else    
                        return a.myNo.localeCompare(b.myNo)
                })
                .map((supplier, index) =>(
                    <SupplierRowItem 
                        isDisableClick={props.isShowDetail}
                        index={index}
                        key={supplier.myNo} //React Key
                        supplier={supplier} 
                        setSelectedMyNo={props.setSelectedMyNo}
                        selectedMyNo={props.selectedMyNo}
                        isShowDetail={props.isShowDetail}
                        showingDetail={props.showingDetail}
                    />
            ))}
        </tbody>
    )
}
