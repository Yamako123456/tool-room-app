import React, {useState, useEffect} from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemDropdownList} from "./ItemDropdownList";
import {NewItemForm} from "./NewItemForm";
import {ItemRows} from "./ItemRows";

export const ItemTableSection: React.FC<
{
    addItem: Function,
    updateItem: Function,
    deleteItem: Function,
    items: ItemModel[], 
    inactivateItem: Function
    setIsShowEntryForm: Function,
    isShowDetail: boolean,
    setIsShowDetail: Function
   
}
> = (props) => {
    
    const activeItems =  props.items.filter(item => item.active === true);
    
    const [sortBy, setSortBy] = useState('code');
    const [selectedCode, setSelectedCode] = useState<string>(
        // activeItems.length > 0 ?  activeItems[0].code : '');

     () => {
         const savedCode = localStorage.getItem('selectedCode');
        return savedCode || (activeItems.length > 0 ?  activeItems[0].code : '');
    });

    useEffect(() => {
        if (selectedCode) {
          localStorage.setItem('selectedCode', selectedCode);
        }
      }, [selectedCode]);
      
    const [showModal2, setShowModal2] = useState(false);
    const [modalTitle2, setModalTitle2] = useState('')
    const [modalMsg2, setModalMsg2] = useState('') 

    const handleRadioChange = (e: any) => {
        setSortBy(e.target.value);
    }

    const showingDetail = (e: any) => {
        e.preventDefault();

        console.log()
        // if (props.items.filter(item => item.active === true).length < 1) {
        if (activeItems.length < 1) {
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
    
    const getItemByCode = (code: string)  => {
        // return props.items.filter((item) => { 
        return activeItems.filter((item) => { 
            return item.code === code  
        });
    }

    return(
        <div>
            <div className=" mt-5 ">
                <div className="card">
                    <div className="card-header">
                        Selected Item: {selectedCode}
                    </div>

                    <div className="card-body"> 
                        
                        
                        {props.isShowDetail && (
                            <div className="card mt-3" style={{ backgroundColor: '#E6F8DC' }}>

                                <div className="card-header">Detail View</div>
                                <div className="card-body">
                                    <h5 className="card-text">Item: {selectedCode} </h5>
                                    <div  className="card-body">
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
                                    </div>
                                </div>
                                <div className="card-footer text=muted">
                                    --- Item Code = {selectedCode} ----
                                </div>
                            </div>    
                        )}
                        <hr/>
                        <form>
                            {/* <ItemDropdownList 
                                isDisableClick={props.isShowDetail}
                                items={props.items} 
                                sortBy={sortBy} 
                                selectedCode={selectedCode}
                                setSelectedCode={setSelectedCode}
                            /> */}
                            
                            {/* <button className="btn btn-primary"
                                onClick={showingDetail}
                                disabled={props.isShowDetail}
                            >
                                Show Detail
                            </button> */}
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
                        <hr/>
                    </div>
                    
                    
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table-borderd">
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px' }} scope="col">Item Code</th>
                                        <th style={{ padding: '10px' }} scope="col">Description 1</th>
                                        <th style={{ padding: '10px' }} scope="col">Item Type</th>
                                        <th style={{ padding: '10px' }} scope="col">Supplier ID</th>
                                        <th style={{ padding: '10px' }} scope="col">Category</th>
                                        <th style={{ padding: '10px' }} scope="col">Click To Print Barcode</th>
                                        <th style={{ padding: '10px' }} scope="col">View Detail</th>
                                    </tr>
                                </thead>
                                <ItemRows
                                    // items={props.items}
                                    activeItems={activeItems}
                                    isShowDetail={props.isShowDetail}
                                    setIsSelectedCode={setSelectedCode}
                                    selectedCode={selectedCode}
                                    setSelectedCode={setSelectedCode}
                                    sortBy={sortBy}
                                    showingDetail={showingDetail}
                                    
                                />
                            </table>
                        </div>
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
