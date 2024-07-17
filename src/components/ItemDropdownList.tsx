import React, {useState} from 'react'

export const ItemDropdownList: React.FC<
{
    isDisableClick: boolean,
    items: ItemModel[],
    sortBy: string,
    selectedCode: string,
    setSelectedCode: Function
}
> = (props) => {
    const sortedList = props.items.filter(item => item.active === true)
                            .sort((a, b) => {
                                if (props.sortBy === 'description1')
                                    return a.description1.localeCompare(b.description1) 
                                else    
                                    return a.code.localeCompare(b.code)
                            });

    const selectedChange = (e: any) => {
        
        props.setSelectedCode(e.target.value)
    }


    return (
       <div>
        
            <label className="form-label">Code - Description 1</label>
            <select className="form-control" 
                value={props.selectedCode}
                onChange={selectedChange}
                disabled={props.isDisableClick}
            >
                <option value="" disabled>Please select Item</option>
                { 
                    sortedList.map(item => (
                    <option key={item.code} value={item.code}>
                            {item.code} - {item.description1}
                        </option>
                ))
    
                }
            </select>
        </div>
    )
}
