import React, {useState} from "react";

import ItemDropdownList from "./ItemDropdownList";
import NewItemForm from "./NewItemForm";
import ItemRows from "./ItemRows";

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
            props.setIsShowDetail(true);
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
                                isDisableClick={props.isShowDetail}
                                items={props.items} 
                                sortBy={sortBy} 
                                selectedCode={selectedCode}
                                setSelectedCode={setSelectedCode}
                            />
                            
                            <button className="btn btn-primary"
                                onClick={showDetail}
                                disabled={props.isShowDetail}
                            >
                                Show Detail
                            </button>
                            <div className="mt-3">
                                <label className="form-label">Sort:</label>    

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
                        </form> 
                            
                        {props.isShowDetail && (
                            // <div  className="card-body">
                                <NewItemForm 
                                    isNew={false}
                                    selectedCode={selectedCode}
                                    addItem={props.addItem} 
                                    updateItem={props.updateItem}
                                    items={props.items} 
                                   
                                    setIsShowEntryForm={props.setIsShowEntryForm}
                                    setIsShowDetail={props.setIsShowDetail}
                                    caption={'Edit'}
                            />
                            // </div>
                        )}
       
                    </div>
                    <hr/>
                    <div className="card-body">
                        <table 
                            // className="table table-hover"
                            disabled={props.isShowDetail}
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Item Code</th>
                                    <th scope="col">Description 1</th>
                                    <th scope="col">Item Type</th>
                                    <th scope="col">Supplier ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ItemRows
                                    items={props.items}
                                    isShowDetail={props.isShowDetail}
                                    setIsSelectedCode={setSelectedCode}
                                    selectedCode={selectedCode}
                                    setSelectedCode={setSelectedCode}
                                    sortBy={sortBy}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTableSection