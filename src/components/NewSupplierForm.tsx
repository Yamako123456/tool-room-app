import React, {useState} from 'react'

import { Modal, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NewSupplierForm: React.FC<{
    isNew: boolean,
    selectedMyNo: string,
    addSupplier: Function,
    deleteSupplier: Function,
    updateSupplier: Function,
    suppliers: SupplierModel[],
    setIsShowEntryForm: Function,
    setIsShowDetail: Function,
    caption: string
}> = (props) => {

    const selectedSupplier = props.suppliers.filter((sup) => sup.myNo === props.selectedMyNo)[0];
    
    const [myNo, setMyNo] = useState(props.isNew ? '' : props.selectedMyNo);
    const [myName, setMyName] = useState(props.isNew ? '' : selectedSupplier.myName);
    const [addr1, setAddr1] = useState(props.isNew ? '' : selectedSupplier.addr1);
    const [addr2, setAddr2] = useState(props.isNew ? '' : selectedSupplier.addr2);
    const [city, setCity] = useState(props.isNew ? '' : selectedSupplier.city);
    const [myState, setMyState] = useState(props.isNew ? '' : selectedSupplier.myState);
    const [zip, setZip] = useState(props.isNew ? '' : selectedSupplier.zip);
    const [country, setCountry] = useState(props.isNew ? '' : selectedSupplier.country);
    const [phone, setPhone] = useState(props.isNew ? '' : selectedSupplier.phone);
    const [fax, setFax] = useState(props.isNew ? '' : selectedSupplier.fax);
    const [contact, setContact] = useState(props.isNew ? '' : selectedSupplier.contact);
    const [email, setEmail] = useState(props.isNew ? '' : selectedSupplier.email);
    const [email2, setEmail2] = useState(props.isNew ? '' : selectedSupplier.email2);
    const [email3, setEmail3] = useState(props.isNew ? '' : selectedSupplier.email3);
    const [autoPo, setAutoPo]= useState(props.isNew ? false : selectedSupplier.autoPo);
    const [faxPo, setFaxPo] = useState(props.isNew ? false : selectedSupplier.faxPo);
    const [emailPo, setEmailPo] = useState(props.isNew ? true : selectedSupplier.emailPo);
    const [blanketPo, setBlanketPo] = useState(props.isNew ? '' : selectedSupplier.blanketPo);
    const [custPoRepPath, setCustPoRepPath ] = useState(props.isNew ? '' : selectedSupplier.custPoRepPath);
    const [notes, setNotes ] = useState(props.isNew ? '' : selectedSupplier.notes);
    const [regrinder, setRegrinder ] = useState(props.isNew ? false : selectedSupplier.regrinder);
    const [calibrator, setCalibrator ] = useState(props.isNew ? false : selectedSupplier.calibrator);
    const [serviceFee, setServiceFee ] = useState(props.isNew ? 0 : selectedSupplier.serviceFee);
    const [stateTaxRate, setStateTaxRate ] = useState(props.isNew ? 0 : selectedSupplier.stateTaxRate);
    const [currencyType, setCurrencyType ] = useState(props.isNew ? 'USD' : selectedSupplier.currencyType);
    const [shipMethod, setShipMethod ] = useState(props.isNew ? '' : selectedSupplier.shipMethod);
    const [useOrdQty, setUseOrdQty ] = useState(props.isNew ? false : selectedSupplier.useOrdQty);
    const [approval, setApproval ] = useState(props.isNew ? '' : selectedSupplier.approval);
    const [approveEmail, setApproveEmail ] = useState(props.isNew ? '' : selectedSupplier.approveEmail);
    const [authenticationAddr, setAuthenticationAddr ] = useState(props.isNew ? '' : selectedSupplier.authenticationAddr);

    const [isReadOnly, setIsReadOnly] = useState(!props.isNew)
    const [btnCaption, setBtnCaption] = useState(props.caption);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const [modalMsg, setModalMsg] = useState('')
    const [isDelete, setIsDelete] = useState(false)

    const MYNO_MAX = 50;
    const MYNAME_MAX = 50;
    const COUNTRY_MAX = 50;
    const BLACNKET_PO_MAX = 50;


    const submitItem = () => {
        if (btnCaption === 'Edit') {
            setIsReadOnly(false);
            setBtnCaption('Save')
            return;
        }
        
        // Check if items is defined before using find
        if (!props.suppliers) {
            console.log('Suppliers prop is undefined or null in submitItem().');
            return;
        }
        
        if( 
            myNo === '' || 
            myName === '' || 
            phone === '' || 
            email === '' 
        ){
            if (props.isNew) {
                setModalTitle('Incomplete Form');
            }else
                setModalTitle('Update Aborted')
            
            setModalMsg('Supplier ID, Name, Phone and Email are required!')
            setIsDelete(false)
            setShowModal(true)

            if (!props.isNew){
                resetForm();
                props.setIsShowEntryForm(false);
                props.setIsShowDetail(false);
            }
            return;
        }   
    
        let msg = '';
    if ((serviceFee !== undefined && isNaN(serviceFee)) || (stateTaxRate !== undefined && isNaN(stateTaxRate)) ){
        msg = 'Numeric value cannot be empty.';
    }else if(myNo.length > MYNO_MAX) {
            msg = 'Supplier ID length cannot exceed ' + MYNO_MAX;
        }else if(myName.length > MYNAME_MAX) {
            msg = 'Supplier Name length cannot exceed ' + MYNAME_MAX;
        }else if(country !== undefined && country.length > COUNTRY_MAX) {
            msg = 'Country length cannot exceed ' + COUNTRY_MAX;
        }else if(blanketPo !== undefined && blanketPo.length > BLACNKET_PO_MAX) {
            msg = 'Blanket PO length cannot exceed ' + BLACNKET_PO_MAX;
        }

        if (msg.length > 0) {
            setModalTitle('Corrections Required')
            setModalMsg(msg);
            setIsDelete(false)
            setShowModal(true)
            return;
        }

        if (!props.isNew ) { //Update existed item
            if (props.selectedMyNo !== myNo && props.suppliers.find(supplier => supplier.myNo === myNo )) {
                setModalTitle('Unique Supplier ID Required');
                setModalMsg(`Supplier ID: "${myNo}" already exists. Please enter unique Supplier ID.`);
                setIsDelete(false);
                setShowModal(true);
            } else {
                props.updateSupplier(
                    props.selectedMyNo,
                    myNo,
                    myName,
                    phone,
                    email, 
                    autoPo,
                    faxPo,
                    emailPo,
                    custPoRepPath, 
                    regrinder,
                    calibrator,
                    useOrdQty,
                    approval,
                    serviceFee,
                    stateTaxRate, 
            
                    addr1, 
                    addr2,
                    city,
                    myState,  
                    zip,
                    country,
                    fax,
                    contact,
                    email2,
                    email3, 
                    blanketPo,
                    notes,
            
            
                    currencyType,
                    shipMethod,
                    approveEmail,
                    authenticationAddr
                );
               
                setModalTitle('Success');
                setModalMsg(`Data Saved.`);
                setIsDelete(false);
                setShowModal(true);
            }

        } else if (props.suppliers.find(supplier => supplier.myNo === myNo )) {
            setModalMsg('Unique Code Required');
            setModalMsg(`Supplier ID: "${myNo}" already exists. Please enter unique Supplier ID.`);
            setIsDelete(false);
            setShowModal(true);
        } else {
            props.addSupplier(
                myNo,
                myName,
                phone,
                email, 
                autoPo,
                faxPo,
                emailPo,
                custPoRepPath, 
                regrinder,
                calibrator,
                useOrdQty,
                approval,
                serviceFee,
                stateTaxRate, 

                addr1, 
                addr2,
                city,
                myState,  
                zip,
                country,
                fax,
                contact,
                email2,
                email3, 
                blanketPo,
                notes,

                
                currencyType,
                shipMethod,
                approveEmail,
                authenticationAddr,
            );

            resetForm();
            props.setIsShowEntryForm(false);
            props.setIsShowDetail(false);
        }    
    }

    const resetForm = () => {
        setMyNo('');
        setMyName('');
        setAddr1('');
        setAddr2('');
        setCity('');
        setMyState('');
        setZip('');
        setCountry('');
        setPhone('');
        setFax('');
        setContact('');
        setEmail('');
        setEmail2('');
        setEmail3('');
        setAutoPo(false);
        setFaxPo(false);
        setEmailPo(true);
        setBlanketPo('');
        setCustPoRepPath('');
        setNotes('');
        setRegrinder(false);
        setCalibrator(false);
        setServiceFee(0);
        setStateTaxRate(0);
        setCurrencyType('USD');
        setShipMethod('');
        setUseOrdQty(false);
        setApproval('');
        setApproveEmail('');
        setAuthenticationAddr('');

    }

    const closeForm = () => {
        resetForm();
        props.setIsShowEntryForm(false);
        props.setIsShowDetail(false);
    }


    const proceedDelete = () => {
        props.deleteSupplier(props.selectedMyNo);
        setModalTitle('');
        setModalMsg('');
        setIsDelete(false);
        setShowModal(false);
        setIsDelete(false);
        resetForm();
        props.setIsShowEntryForm(false);
        props.setIsShowDetail(false);
    }

    const deleteConfirmation = () => {
        setModalTitle('Confirm Delete');
        setIsDelete(true);
        setModalMsg('Are you sure you want to delete the supplier "' + props.selectedMyNo + '"?');
        setShowModal(true);
  
    }

    return (
        <div>
            {/* <form>
                <div className='row'>

                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12  mb-3' >
                        <label className='form-label'>
                            Item Code:
                            {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {CODE_MAX} )</span>)}
                            {props.isNew && (<span className='text-danger small'> (required)</span>)}
                        </label>
                        <input type='text' className='form-control' required 
                            value={itemCode}
                            onChange={(event) => setItemCode(event.target.value.trim())}
                            readOnly={isReadOnly || (!props.isNew && selectedItem.assigned)}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                            ></input>
                    </div>
                    <div className='col-xl-7 col-lg-10 col-md-12 mb-3'>
                        <label className='form-label'>
                            Description 1:
                            {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION1_MAX} )</span>)}
                            {props.isNew && (<span className='text-danger small'> (required)</span>)}
                        </label>
                        <input className='form-control' type='text' required 
                            value={description1}
                            onChange={(event) => setDescription1(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                        
                    </div>
                    <div className='col-12 mb-3'>
                        <label className='form-label'>Description 2:</label>
                        {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION2_MAX} )</span>)}
                        <textarea className='form-control'  rows={3} 
                            value={description2}
                            onChange={(event) => setDescription2(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2 col-md- col-sm-4 col-xs-6  mb-3'>
                        
                        <label className='form-label'>Item Type:</label>
                        <select className='form-control' 
                            value={itemType} 
                            onChange={(event) => setItemType(event.target.value.trim())}
                            disabled={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            >
                            {Object.entries(ItemTypes).map(([key, value]) =>
                            (
                                <option key={key} value={value}>
                                    {value}
                                </option>        
                            ))}
                        </select>   
                    </div>
                    <div className='col-lg-2 col-md- col-sm-4 col-xs-6  mb-3'>
                        
                        <label className='form-label'>UOM:</label>
                        <select className='form-control' 
                            value={uom} 
                            onChange={(event) => setUom(event.target.value.trim())}
                            disabled={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            >
                            {Object.entries(UnitOfMeasure).map(([key, value]) =>
                            (
                                <option key={key} value={value}>
                                    {value}
                                </option>        
                            ))}
                        </select>   
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Unit Price:</label>
                        <input className='form-control' type='number'  
                            value={unitPrice}
                            onChange={(e) =>  {
                                const num = parseFloat(e.target.value.trim());
                                setUnitPrice(Number(num.toFixed(2)));
                            }}

                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Issue Cost:</label>
                        <input className='form-control' type='number' 
                            value={issueCost}
                            onChange={(e) =>  {
                                const num = parseFloat(e.target.value.trim());
                                setIssueCost(Number(num.toFixed(2)));
                            }}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>

                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Pack Quantity:</label>
                        <input className='form-control' type='number' 
                            value={packQty}
                            onChange={(e) => setPackQty(parseInt(e.target.value.trim()))}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Order Quantity:</label>
                        <input className='form-control' type='number' 
                            value={orderQty}
                            onChange={(e) => setOrderQty(parseInt(e.target.value.trim()))}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                            ></input>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Lead Time:</label>
                        <input className='form-control' type='number' 
                            value={leadTime}
                            onChange={(e) => setLeadTime(parseInt(e.target.value.trim()))}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>

                    <div className='col-xl-7 col-lg-10 col-md-12 mb-3'>
                        <label className='form-label'>
                            Supplier ID:
                            {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {SUPLIER_MAX} )</span>)}
                            {props.isNew && (<span className='text-danger small'> (required)</span>)}
                        </label>
                        <input className='form-control' type='text' required
                            value={supplierId}
                            onChange={(event) => setSupplierId(event.target.value.trim())}
                            readOnly={isReadOnly || (!props.isNew && selectedItem.assigned)}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Item Image URL:</label>
                        <textarea className='form-control' rows={3} 
                            value={itemImage}
                            onChange={(event) => setItemImage(event.target.value.trim())}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></textarea>
                    </div>                    
                    <div className='mb-3'>
                        <label className='form-label'>Notes:</label>
                        <textarea className='form-control' rows={3} 
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></textarea>
                    </div>
                    <div className='col-lg-5 col-md-7 col-sm-10 col-xs-12  mb-3'>

                        <label className='form-label'>Currency Type:</label>
                        <select className="form-control" 
                            id="currencyType"
                            value={currencyType}
                            onChange={(event) => setCurrencyType(event.target.value.trim())}
                            disabled={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                        >
                            <option value="USD">USD - United States Dollar ($)</option>
                            <option value="EUR">EUR - Euro (€)</option>
                            <option value="GBP">GBP - British Pound (£)</option>
                            <option value="JPY">JPY - Japanese Yen (¥)</option>
                            <option value="CNY">CNY - Chinese Yuan (¥)</option>
                            <option value="INR">INR - Indian Rupee (₹)</option>
                            <option value="BRL">BRL - Brazilian Real (R$)</option>
                            <option value="MXN">MXN - Mexican Peso ($)</option>
                            <option value="ZAR">ZAR - South African Rand (R)</option>
                            <option value="KRW">KRW - South Korean Won (₩)</option>
                            <option value="CAD">CAD - Canadian Dollar (C$)</option>
                            <option value="AUD">AUD - Australian Dollar (A$)</option>
                            <option value="NZD">NZD - New Zealand Dollar (NZ$)</option>
                        </select>
                    </div>

                    <div className='col-xl-7 col-lg-10 col-md-12 mb-3'>
                        <label className='form-label'>
                            State/Prefecture:
                            {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {MYSTATE_MAX} )</span>)}
                            {props.isNew && (<span className='text-danger small'> (required)</span>)}
                        </label>
                        <input className='form-control' type='text' required
                            value={myState}
                            onChange={(event) => setMyState(event.target.value)}
                            readOnly={isReadOnly || (!props.isNew && selectedSupplier.assigned)}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                            ></input>
                    </div>
 //////////////////////////////////////////////////////////////////////////////////////                   
                    <div className='col-lg-5 col-md-7 col-sm-10 col-xs-12  mb-3'>
                        <label className='form-label'>State</label>
                        <select className="form-control" 
                            id="state"
                            value={myState}
                            onChange={(event) => setCurrencyType(event.target.value)}
                            disabled={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none' , pointerEvents: 'none'} : {}}
                        > 
                         
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

 //////////////////////////////////////////////////////////////////////////////////////




                    
                </div>
            </form>

            <button 
                className={btnCaption === 'Save' || btnCaption === 'Add' ? 'btn btn-success me-2' : 'btn btn-primary me-2'} 
                onClick={submitItem}>
                    {btnCaption}
            </button>
            
            {!props.isNew && props.setIsShowDetail &&
                <button className='btn btn-warning me-2' onClick={deleteConfirmation}>Delete</button>    
            }

            <button className='btn btn-dark' onClick={closeForm}>Close</button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMsg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setShowModal(false)
                        setModalTitle('')
                        setModalTitle('')
                    }}>
                    {isDelete ? 'Cancel' : 'Close'}
                    
                    </Button>

                    {isDelete && (
                        <Button variant="danger" onClick={proceedDelete}>
                            Delete
                        </Button>
                    )}
                </Modal.Footer>
            </Modal> */}
        </div>

    )
}


