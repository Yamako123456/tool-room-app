function ItemDropdownList(props) {
    return (
       <div>
            <label className="form-label">Select Item From Dropdown</label>
            <select className="form-control">
                    {props.items
                        .filter(item => item.active === true)
                        .sort((a, b) => {
                            if (props.sortBy === 'description1')
                                return a.description1.localeCompare(b.description1) 
                            else    
                                return a.code.localeCompare(b.code)
                        })
                        .map(item => (
                            <option key={item.code} value={item.description1}>
                                {item.code} - {item.description1}
                            </option>
                    ))
        
                    }
            </select>
        </div>
    )
}

export default ItemDropdownList