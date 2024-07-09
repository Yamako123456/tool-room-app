import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDropdownList from "./ItemDropdownList";
import NewItemForm from "./NewItemForm";
import ItemRows from "./ItemRows";

function ItemTableSection(props) {
    const [sortBy, setSortBy] = useState('code');
    const [selectedCode, setSelectedCode] = useState('')
    const [showModal2, setShowModal2] = useState(false);
    const [modalTitle2, setModalTitle2] = useState('')
    const [modalMsg2, setModalMsg2] = useState('') 

    const handleRadioChange = (e) => {
        setSortBy(e.target.value);
    }

    const showDetail = (e) => {
        e.preventDefault();

        console.log()
        if (props.items.filter(item => item.active === true).length < 1) {
            setSelectedCode('')
            setModalTitle2('Item Not Available')
            setModalMsg2('There is no item available')
            setShowModal2(true)

        } else if (selectedCode === '') {
            setModalTitle2('Item Selection Required')
            setModalMsg2('Please select item first')
            setShowModal2(true)
        } else
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
                                    deleteItem={props.deleteItem}
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
                        <table >
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px' }} scope="col">Item Code</th>
                                    <th style={{ padding: '10px' }} scope="col">Description 1</th>
                                    <th style={{ padding: '10px' }} scope="col">Item Type</th>
                                    <th style={{ padding: '10px' }} scope="col">Supplier ID</th>
                                    <th style={{ padding: '10px' }} scope="col">Category</th>
                                    <th style={{ padding: '10px' }} scope="col">Sub Category</th>
                                </tr>
                            </thead>
                            <ItemRows
                                items={props.items}
                                isShowDetail={props.isShowDetail}
                                setIsSelectedCode={setSelectedCode}
                                selectedCode={selectedCode}
                                setSelectedCode={setSelectedCode}
                                sortBy={sortBy}
                            />
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={showModal2} onHide={() => setShowModal2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle2}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMsg2}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setShowModal2(false)
                        setModalTitle2('')
                        setModalTitle2('')
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ItemTableSection