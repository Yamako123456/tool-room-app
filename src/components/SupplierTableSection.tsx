import React, {useState, useEffect} from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SupplierRows} from "./SupplierRows";
import {NewSupplierForm} from "./NewSupplierForm";


export const SupplierTableSection: React.FC<
{
    addSupplier: Function,
    updateSupplier: Function,
    deleteSupplier: Function,
    suppliers: SupplierModel[], 
    inactivateSupplier: Function
    setIsShowEntryForm: Function,
    isShowDetail: boolean,
    setIsShowDetail: Function
   
}
> = (props) => {
    
    const activeSuppliers =  props.suppliers.filter(supplier => supplier.active === true);
    
    const [sortBy, setSortBy] = useState('myNo');
    const [selectedMyNo, setSelectedMyNo] = useState<string>(
     () => {
         const savedMyNo = localStorage.getItem('selectedMyNo');
        return savedMyNo || (activeSuppliers.length > 0 ?  activeSuppliers[0].myNo : '');
    });

    useEffect(() => {
        if (selectedMyNo) {
          localStorage.setItem('selectedMyNo', selectedMyNo);
        }
      }, [selectedMyNo]);
      
    const [showModal2, setShowModal2] = useState(false);
    const [modalTitle2, setModalTitle2] = useState('')
    const [modalMsg2, setModalMsg2] = useState('') 

    const handleRadioChange = (e: any) => {
        setSortBy(e.target.value);
    }

    const showingDetail = (e: any) => {
        e.preventDefault();

        if (activeSuppliers.length < 1) {
            setSelectedMyNo('')
            setModalTitle2('Supplier Not Available')
            setModalMsg2('There is no supplier available')
            setShowModal2(true)

        } else if (selectedMyNo === '') {
            setModalTitle2('Supplier Selection Required')
            setModalMsg2('Please select Supplier first')
            setShowModal2(true)
        } else
            props.setIsShowDetail(true);
    }
    
    const getSupplierByMyNo = (myNo: string)  => {
        return activeSuppliers.filter((supplier) => { 
            return supplier.myNo === myNo  
        });
    }

    return(
        <div>
            <div className=" mt-5 ">
                <div className="card">
                    <div className="card-header">
                        Selected Item: {selectedMyNo}
                    </div>

                    <div className="card-body"> 
                        
                        
                        {props.isShowDetail && (
                            <div className="card mt-3" style={{ backgroundColor: '#E6F8DC' }}>

                                <div className="card-header">Detail View</div>
                                <div className="card-body">
                                    <h5 className="card-text">Item: {selectedMyNo} </h5>
                                    <div  className="card-body">
                                        <NewSupplierForm 
                                            isNew={false}
                                            selectedMyNo={selectedMyNo}
                                            addSupplier={props.addSupplier} 
                                            updateSupplier={props.updateSupplier}
                                            deleteSupplier={props.deleteSupplier}
                                            suppliers={props.suppliers} 
                                            setIsShowEntryForm={props.setIsShowEntryForm}
                                            setIsShowDetail={props.setIsShowDetail}
                                            caption={'Edit'}
                                        /> 
                                    </div>
                                </div>
                                <div className="card-footer text=muted">
                                    --- Supplier ID = {selectedMyNo} ----
                                </div>
                            </div>    
                        )}
                        <hr/>
                        <form>                                                      
                           
                            <div className="mt-3">
                                <label className="form-label">Sort:</label>    

                                <div className="form-check">
                                    <input  
                                        type="radio"
                                        value="myName"
                                        checked={sortBy === 'myName'}
                                        onChange={handleRadioChange}
                                    />
                                    By Supplier Name
                                </div>
                                <div className="form-check">
                                    <input 
                                        type="radio"
                                        value="myNo"
                                        checked={sortBy === 'myNo'}
                                        onChange={handleRadioChange}
                                    />
                                    By Supplier ID
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
                                        <th style={{ padding: '10px' }} scope="col">Supplier ID</th>
                                        <th style={{ padding: '10px' }} scope="col">Supplier Name</th>
                                        <th style={{ padding: '10px' }} scope="col">Supplier Email</th>
                                        <th style={{ padding: '10px' }} scope="col">Supplier Phone</th>
                                        <th style={{ padding: '10px' }} scope="col">Calibrator?</th>
                                        <th style={{ padding: '10px' }} scope="col">Regrinder?</th>
                                    </tr>
                                </thead>
                                <SupplierRows
                                    activeSuppliers={activeSuppliers}
                                    isShowDetail={props.isShowDetail}
                                    
                                    selectedMyNo={selectedMyNo}
                                    setSelectedMyNo={setSelectedMyNo}
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
