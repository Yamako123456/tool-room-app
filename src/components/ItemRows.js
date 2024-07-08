import React, {useState} from 'react'

import ItemRowItem from "./ItemRowItem"

function ItemRows(props) {
    return (
        <div>
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
                        className={props.items.indexOf}
                    />
            ))}
        </div>
    )
}

export default ItemRows