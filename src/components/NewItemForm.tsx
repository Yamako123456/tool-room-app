import React, {useState} from 'react'

import { Modal, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NewItemForm: React.FC<{
    isNew: boolean,
    selectedCode: string,
    addItem: Function,
    deleteItem: Function,
    updateItem: Function,
    items: ItemModel[],
    setIsShowEntryForm: Function,
    setIsShowDetail: Function,
    caption: string
}> = (props) => {
    // console.log(props.selectedItem)
    
    const ItemTypes = {
        EXPENDABLE: 'Expendable',
        DURABLE: 'Durable',
        PERISHABLE: 'Perishable',
        SERIAL: 'Serial',
        GAGE: 'Gage'
    }

    const ItemCategories = {
        TOOL: 'Tool',
        FASTENER: 'Bolts, Screws, Nails, etc',
        MACHINERY: 'End Mills, Drill Bits, Threading Tools, etc',
        PIPE: 'Pipes, Hose, Tube & Fittings',
        WELDING: 'Welding',
        ELECTRICAL: 'Lighting & Electrical',
        PLUMBING: 'Plumbing & Pumps',
        ADHESIVE: 'Tape, sealants, Glue',
        MATERIAL_HANDLING: 'Ladder, Cart, Storage, Lift equipment',
        TEST_INSTRUMENT: 'Multimeters, Voltage, Power Tester',
        RAW_MATERIAL: 'Raw Material',
        SAFTY: 'Safty item',
        OFFICE_SUPPLY: 'Office Supplies',

    }   
          
    const selectedItem = props.items.filter((itm) => itm.code === props.selectedCode)[0];
    const [itemCode, setItemCode] = useState(props.isNew ? '' : props.selectedCode);
    const [description1, setDescription1] = useState(props.isNew ? '' : selectedItem.description1);
    const [description2, setDescription2] = useState(props.isNew ? '' : selectedItem.description2);
    const [itemType, setItemType] = useState(props.isNew ? ItemTypes.EXPENDABLE : selectedItem.itemType);
    const [unitPrice, setUnitPrice] = useState(props.isNew ? 0.00 : selectedItem.unitPrice);
    const [issueCost, setIssueCost] = useState(props.isNew ? 0.00 : selectedItem.issueCost);
    const [supplierId, setSupplierId] = useState(props.isNew ? '' : selectedItem.supplierId);
    const [itemImage, setItemImage] = useState(props.isNew ? '' : selectedItem.itemImage);
    const [category, setCategory] = useState(props.isNew ? ItemCategories.TOOL: selectedItem.category);
    const [subCategory, setSubCategory] = useState(props.isNew ? '' : selectedItem.subCategory);

    const [isReadOnly, setIsReadOnly] = useState(!props.isNew)
    const [btnCaption, setBtnCaption] = useState(props.caption);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const [modalMsg, setModalMsg] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    const CODE_MAX = 30;
    const DESCRIPTION1_MAX = 50;
    const DESCRIPTION2_MAX = 200;
    const SUPLIER_MAX = 50;
    // URL_MAX = is unlimited Text data type in database;
    const CURRENCY_MAX = 25;
    const CATEGORY_MAX = 40;

    const submitItem = () => {
        if (btnCaption === 'Edit') {
            setIsReadOnly(false);
            setBtnCaption('Save')
            return;
        }


        // Check if items is defined before using find
        if (!props.items) {
            console.log('Items prop is undefined or null in submitItem().');
            return;
        }

        if( 
            itemCode === '' || 
            description1 === '' || 
            supplierId === '' 
        ){
            if (props.isNew) {
                setModalTitle('Incomplete Form');
            }else
                setModalTitle('Update Aborted')
            
            setModalMsg('Code, Description1 and SupplierId are required!')
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
        if(itemCode.length > CODE_MAX) 
            msg = 'Code length cannot exceed ' + CODE_MAX;
        
        if(description1.length > DESCRIPTION1_MAX) {
            msg = 'Description 1 length cannot exceed ' + DESCRIPTION1_MAX;
        }
        if(description2.length > DESCRIPTION2_MAX) {
            msg = 'Description 2 length cannot exceed ' + DESCRIPTION2_MAX;
        }
    

        if(unitPrice.toString().length > CURRENCY_MAX || issueCost.toString().length > CURRENCY_MAX)
            msg = 'Currency digits length cannot exceed ' + CURRENCY_MAX;
        if (supplierId.length > SUPLIER_MAX)
            msg = 'SupplierId length cannot exceed ' + SUPLIER_MAX;

        if(subCategory.length > CATEGORY_MAX)    
            msg = 'Category length cannot exceed ' + CATEGORY_MAX;
        
        if (msg.length > 0) {
            setModalTitle('Corrections Required')
            setModalMsg(msg);
            setIsDelete(false)
            setShowModal(true)
            return;
        }

        if (!props.isNew ) { //Update existed item
            if (props.selectedCode !== itemCode && props.items.find(item => item.code === itemCode )) {
                setModalMsg('Unique Code Required');
                setModalMsg(`Code: "${itemCode}" already exists. Please enter unique item code.`);
                setIsDelete(false);
                setShowModal(true);
            } else {
                props.updateItem(
                    props.selectedCode,
                    itemCode,
                    description1,
                    description2,
                    itemType,
                    unitPrice,
                    issueCost,
                    supplierId,
                    itemImage,
                    category,
                    subCategory 
                );

                resetForm();
                props.setIsShowEntryForm(false);
                props.setIsShowDetail(false);
            }

        } else if (props.items.find(item => item.code === itemCode )) {
            console.log(itemCode)
            setModalMsg('Unique Code Required');
            setModalMsg(`Code: "${itemCode}" already exists. Please enter unique item code.`);
            setIsDelete(false);
            setShowModal(true);
        } else {
            props.addItem(
                itemCode,
                description1,
                description2,
                itemType,
                unitPrice,
                issueCost,
                supplierId,
                itemImage,
                category,
                subCategory 
            );

            resetForm();
            props.setIsShowEntryForm(false);
            props.setIsShowDetail(false);
        }    
    }

    const resetForm = () => {
        setItemCode('');
        setDescription1('');
        setDescription2('');
        setItemType(ItemTypes.EXPENDABLE);
        setUnitPrice(0.00);
        setIssueCost(0.00);
        setSupplierId('');
        setItemImage('');
        setCategory(ItemCategories.TOOL);
        setSubCategory('');
    }

    const closeForm = () => {
        resetForm();
        props.setIsShowEntryForm(false);
        props.setIsShowDetail(false);
    }


    const proceedDelete = () => {
        props.deleteItem(props.selectedCode);
        setModalTitle('')
        setModalMsg('')
        setIsDelete(false)
        setShowModal(false)
        setIsDelete(false)
        resetForm();
        props.setIsShowEntryForm(false);
        props.setIsShowDetail(false);
    }

    const deleteConfirmation = () => {
        setModalTitle('Confirm Delete')
        setIsDelete(true)
        setModalMsg('Are you sure you want to delete the item "' + props.selectedCode + '"?')
        setShowModal(true)
  
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>
                        Item Code
                        {(<span style={{ fontSize: '0.6rem' }}> ( max length: {CODE_MAX} )</span>)}
                        {props.isNew && (<span className='text-danger small'> (required)</span>)}
                    </label>
                    <input type='text' className='form-control' required 
                        value={itemCode}
                        onChange={(event) => setItemCode(event.target.value.trim())}
                        readOnly={isReadOnly || (!props.isNew && selectedItem.isUsedInTransactions)}
                        ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Description 1
                        {(<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION1_MAX} )</span>)}
                        {props.isNew && (<span className='text-danger small'> (required)</span>)}
                    </label>
                    <input className='form-control' type='text' required 
                        value={description1}
                        onChange={(event) => setDescription1(event.target.value.trim())}
                        readOnly={isReadOnly}
                        ></input>
                    
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description 2</label>
                    {(<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION2_MAX} )</span>)}
                    <textarea className='form-control'  rows={3} 
                        value={description2}
                        onChange={(event) => setDescription2(event.target.value.trim())}
                        readOnly={isReadOnly}
                        ></textarea>
                </div>
                <div className='mb-3'>

                    <div className='dropdown'>
                        <button 
                            className='btn btn-secondary dropdown-toggle'
                            data-bs-toggle='dropdown'
                        >
                            Item Type
                        </button>
                        <ul className='dropdown-menu'
                            // value={itemType} 
                            // onChange={(event) => setItemType(event.target.value.trim())}
                            // disabled={isReadOnly}
                        >
                            {Object.entries(ItemTypes).map(([key, value]) =>
                            (
                                <li key={key} value={value}>
                                     <a className='dropdown-item' >{value}</a>
                                </li>
                            ))}
                        </ul>
                    </div> 


                    <label className='form-label'>Item Type</label>
                    <select className='form-control' 
                        value={itemType} 
                        onChange={(event) => setItemType(event.target.value.trim())}
                        disabled={isReadOnly}
                        >
                        {Object.entries(ItemTypes).map(([key, value]) =>
                        (
                            <option key={key} value={value}>
                                {value}
                            </option>        
                        ))}
                    </select>   
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Unit Price</label>
                    <input className='form-control' type='number'  
                        value={unitPrice}
                        onChange={e => setUnitPrice(Number(e.target.value.trim()))}

                        readOnly={isReadOnly}
                        ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Issue Cost</label>
                    <input className='form-control' type='number' 
                        value={issueCost}
                        onChange={(e) => setIssueCost(Number(e.target.value.trim()))}
                        readOnly={isReadOnly}
                        ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Supplier ID
                        {(<span style={{ fontSize: '0.6rem' }}> ( max length: {SUPLIER_MAX} )</span>)}
                        {props.isNew && (<span className='text-danger small'> (required)</span>)}
                    </label>
                    <input className='form-control' type='text' required
                        value={supplierId}
                        onChange={(event) => setSupplierId(event.target.value.trim())}
                        readOnly={isReadOnly || (!props.isNew && selectedItem.isUsedInTransactions)}
                        ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Item Image URL</label>
                    <textarea className='form-control' rows={10} 
                        value={itemImage}
                        onChange={(event) => setItemImage(event.target.value.trim())}
                        readOnly={isReadOnly}
                        ></textarea>
                </div>
                <div className='mb-3'>

                    <div className='dropdown'>
                        <button 
                            className='btn btn-secondary dropdown-toggle'
                            data-bs-toggle='dropdown'
                        >
                            Category
                        </button>
                        <ul className='dropdown-menu'
                            // onChange={(event) => setCategory(event.target.value.trim())}
                            // disabled={isReadOnly}
                        >
                            {Object.entries(ItemCategories).map(([key, value]) =>
                            (
                                <li key={key} value={value}>
                                     <a className='dropdown-item' >{value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <label className='form-label'>Category</label>
                    <select className='form-control' 
                        onChange={(event) => setCategory(event.target.value.trim())}
                        disabled={isReadOnly}
                        >
                        {Object.entries(ItemCategories).map(([key, value]) => (
                            <option key={key} value={value}>
                                {value}
                            </option>
                        ))}

                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Sub-catetory</label>
                    {(<span style={{ fontSize: '0.6rem' }}>( max length: {CATEGORY_MAX} )</span>)}
                    <input className='form-control' type='text' 
                        value={subCategory}
                        onChange={(event) => setSubCategory(event.target.value.trim())}
                        readOnly={isReadOnly}
                        ></input>
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
            </Modal>
        </div>

    )
}


