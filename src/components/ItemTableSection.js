import React, {useState} from "react";
import ItemRowItem from "./ItemRowItem"
import ItemDropdownList from "./ItemDropdownList";
import NewItemForm from "./NewItemForm";

function ItemTableSection(props) {
    const [sortBy, setSortBy] = useState('code');
    const [selectedCode, setSelectedCode] = useState('')
    

    const handleRadioChange = (e) => {
        setSortBy(e.target.value);
    }

    const showDetail = () => {
        //console.log('showDetail() selectedCode= ' + selectedCode)
        if (selectedCode === '')
            alert("Please select item from the dropdown list.")
        else
            props.setShowDetail(true);
    }
    
    const getItemByCode = (code)  => {
        return props.items.filter((item) => { 
            return item.code === code  
        });
    }

    return(
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">
                        Selected Item
                    </div>

                    <div className="card-body"> 
                        <form>
                            <ItemDropdownList 
                                isDisableClick={props.showDetail}
                                items={props.items} 
                                sortBy={sortBy} 
                                selectedCode={selectedCode}
                                setSelectedCode={setSelectedCode}
                            />
                            
                            <div className="mt-3">
                                <label className="form-label">Sort Dropdown List:</label>    

                                <div className="form-check">
                                    <input  
                                        type="radio"
                                        value="description1"
                                        checked={sortBy === 'description1'}
                                        onChange={handleRadioChange}
                                    />
                                    By Description1
                                </div>
                                <div className="form-check">
                                    <input 
                                        type="radio"
                                        value="code"
                                        checked={sortBy === 'code'}
                                        onChange={handleRadioChange}
                                    />
                                    By Code
                                </div>                              
                            </div>  
                            <button className="btn btn-primary"
                                onClick={showDetail}
                                disabled={props.showDetail}
                            >
                                Show Detail
                            </button>
                        </form> 
                            
                        {props.showDetail && (
                            // <div  className="card-body">
                                <NewItemForm 
                                    isNew={false}
                                    selectedCode={selectedCode}
                                    addItem={props.addItem} 
                                    updateItem={props.updateItem}
                                    items={props.items} 
                                   
                                    setShowEntryForm={props.setShowEntryForm}
                                    setShowDetail={props.setShowDetail}
                                    caption={'Edit'}
                            />
                            // </div>
                        )}
       
                    </div>
                    <hr/>
                    <div className="card-body">
                        <table 
                            // className="table table-hover"
                            disabled={props.showDetail}
                        >
                            <thead>
                                {/* <ItemTableHead /> */}
                                <tr>
                                    <th scope="col">Item Code</th>
                                    <th scope="col">Description 1</th>
                                    {/* <th scope="col">Description 2</th> */}
                                    <th scope="col">Item Type</th>
                                    {/* <th scope="col">Unit Price</th> */}
                                    {/* <th scope="col">Issue Cost</th> */}
                                    <th scope="col">Supplier ID</th>
                                    {/* <th scope="col">Item Image URL</th> */}
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items
                                    .filter(item => item.active === true)
                                    .map((item, index) =>(
                                        <ItemRowItem 
                                            isDisableClick={props.showDetail}
                                            index={index}
                                            key={item.code} //React Key
                                            item={item} 
                                            setSelectedCode={setSelectedCode}
                                            selectedCode={selectedCode}
                                            className={props.items.indexOf}
                                        />
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTableSection