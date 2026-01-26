import React, {useState} from 'react'
import {ItemRowItem} from "./ItemRowItem"

export const ItemRows: React.FC<{
    activeItems: ItemModel[],
    isShowDetail: boolean,
    setIsSelectedCode:  (code: string) => void,
    selectedCode: string,
    setSelectedCode:  (code: string) => void,
    sortBy: string,
    showingDetail:  (b: boolean) => void
}> = (props) => {
    return (
        <tbody>
            {/* {props.items.filter(item => item.active === true) */}
            {props.activeItems
                .sort((a, b) => {
                    if (props.sortBy === 'description1')
                        return a.description1.localeCompare(b.description1) 
                    else    
                        return a.code.localeCompare(b.code)
                })
                .map((item, index) =>(
                    <ItemRowItem 
                        isDisableClick={props.isShowDetail}
                        index={index}
                        key={item.code} //React Key
                        item={item} 
                        setSelectedCode={props.setSelectedCode}
                        selectedCode={props.selectedCode}
                        isShowDetail={props.isShowDetail}
                        showingDetail={props.showingDetail}
                    />
            ))}
        </tbody>
    )
}
