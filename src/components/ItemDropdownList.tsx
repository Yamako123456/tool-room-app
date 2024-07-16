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
            <div className='dropdown'>
                <button 
                    className='btn btn-secondary dropdown-toggle'
                    data-bs-toggle='dropdown'
                >
                    Code - Description 1
                </button>
                <ul className='dropdown-menu'
                    // onChange={(event) => setCategory(event.target.value.trim())}
                    // disabled={isReadOnly}
                >
                    {sortedList.map(item => (
                        <li key={item.code} value={item.code}>
                                <a className='dropdown-item' >
                                    {item.code} - {item.description1} 
                                </a>
                        </li>
                    ))}
                </ul>
            </div>
        
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
