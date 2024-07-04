import ItemRowItem from "./ItemRowItem"

function ItemTableSection(props) {

    return(
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                {/* <ItemTableHead /> */}
                                <tr>
                                    <th scope="col">Item Code</th>
                                    <th scope="col">Description 1</th>
                                    <th scope="col">Description 2</th>
                                    <th scope="col">Item Type</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Issue Cost</th>
                                    <th scope="col">Supplier ID</th>
                                    <th scope="col">Item Image URL</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items
                                    .filter(item => item.active === true)
                                    .map(item=>(
                                        <ItemRowItem 
                                            //React Key
                                            key={item.code} 
                                            item={item} 
                                        />
                                ))}
                                
                            </tbody>
                        </table>

                        <form>
                            <select className="form-control">
                                {Object.entries(props.items.map( (item) => (
                                    <option key='code' value={item.code}></option>
                                )

                                ))}
                            </select>
                        </form> 
                        
                        {/* <button className="btn btn-primary"
                            onClick={()}
                        >Inactivate Selected Item</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTableSection