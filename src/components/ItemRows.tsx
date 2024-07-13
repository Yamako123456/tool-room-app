import React, {useState} from 'react'

import {ItemRowItem} from "./ItemRowItem"

// <ItemRows
//                                 items={props.items}
//                                 isShowDetail={props.isShowDetail}
//                                 setIsSelectedCode={setSelectedCode}
//                                 selectedCode={selectedCode}
//                                 setSelectedCode={setSelectedCode}
//                                 sortBy={sortBy}
//                             />

export const ItemRows: React.FC<{
    items: ItemModel[],
    isShowDetail: boolean,
    setIsSelectedCode: Function,
    selectedCode: string,
    setSelectedCode: Function,
    sortBy: string
}> = (props) => {
    return (
        <tbody>
            {props.items
                .filter(item => item.active === true)
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
                        // className={props.items.indexOf}
                    />
            ))}
        </tbody>
    )
}
