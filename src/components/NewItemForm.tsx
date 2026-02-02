import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

import { Modal, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CODE_MAX, CURRENCY_MAX, DESCRIPTION1_MAX, DESCRIPTION2_MAX, ItemCategories, ItemTypes, SUPLIER_MAX, UnitOfMeasure } from '../constants/product';
import SearchUPC from './SearchUPC/SearchUPC';
import { BarcodeSpiderLookupResponse } from '../data/product';
import { searchProductByUPC } from '../api';

export const NewItemForm: React.FC<{
    isNew: boolean,
    selectedCode: string,
    addItem: Function,
    deleteItem: Function,
    updateItem: Function,
    items: ItemModel[],
    setIsShowEntryForm: Function,
    setIsShowDetail: Function,
    caption: string,
    isShowDetail: boolean
    }> = (props) => {
    
    const selectedItem = props.items.filter((itm) => itm.code === props.selectedCode)[0];

    const [itemCode, setItemCode] = useState(props.isNew ? '' : props.selectedCode);
    const [description1, setDescription1] = useState(props.isNew ? '' : selectedItem.description1);
    const [description2, setDescription2] = useState(props.isNew ? '' : selectedItem.description2);
    const [itemType, setItemType] = useState(props.isNew ? ItemTypes.EXPENDABLE : selectedItem.itemType);
    const [unitPrice, setUnitPrice] = useState(props.isNew ? 0 : selectedItem.unitPrice);
    const [issueCost, setIssueCost] = useState(props.isNew ? 0 : selectedItem.issueCost);
    const [supplierId, setSupplierId] = useState(props.isNew ? '' : selectedItem.supplierId);
    const [itemImage, setItemImage] = useState(props.isNew ? '' : selectedItem.itemImage);
    const [category, setCategory] = useState(props.isNew ? ItemCategories.TOOL : selectedItem.category);

    const [packQty, setPackQty] = useState(props.isNew ? 1 : selectedItem.packQty);
    const [orderQty, setOrderQty] = useState(props.isNew ? 1 : selectedItem.orderQty);
    const [weigh, setWeigh] = useState(props.isNew ? false : selectedItem.weigh);
    const [weight, setWeight] = useState(props.isNew ? 0 : selectedItem.weight);
    const [uom, setUom] = useState(props.isNew ? 'qty' : selectedItem.uom);
    const [mfg, setMfg] = useState(props.isNew ? '' : selectedItem.mfg);
    const [mfgItem, setMfgItem] = useState(props.isNew ? '' : selectedItem.mfgItem);
    const [notes, setNotes] = useState(props.isNew ? '' : selectedItem.notes);
    const [leadTime, setLeadTime] = useState(props.isNew ? 0 : selectedItem.leadTime);

    const [isReadOnly, setIsReadOnly] = useState(!props.isNew)
    const [btnCaption, setBtnCaption] = useState(props.caption);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const [modalMsg, setModalMsg] = useState('')
    const [isDelete, setIsDelete] = useState(false)



    const productAPISearch = () => { console.log('productAPISearch process') }

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

        if (
            itemCode === '' ||
            description1 === '' ||
            supplierId === ''
        ) {
            if (props.isNew) {
                setModalTitle('Incomplete Form');
            } else
                setModalTitle('Update Aborted')

            setModalMsg('Code, Description1 and SupplierId are required!')
            setIsDelete(false)
            setShowModal(true)

            if (!props.isNew) {
                resetForm();
                props.setIsShowEntryForm(false);
                props.setIsShowDetail(false);
            }
            return;
        }

        let msg = '';
        if (isNaN(unitPrice) || isNaN(issueCost) || isNaN(packQty) || isNaN(orderQty) || isNaN(leadTime)) {
            msg = 'Numeric value cannot be empty.';
        } else if (itemCode.length > CODE_MAX) {

            msg = 'Code length cannot exceed ' + CODE_MAX;
        } else if (description1.length > DESCRIPTION1_MAX) {
            msg = 'Description 1 length cannot exceed ' + DESCRIPTION1_MAX;
        } else if (description2 !== undefined && description2.length > DESCRIPTION2_MAX) {
            msg = 'Description 2 length cannot exceed ' + DESCRIPTION2_MAX;
        } else if (unitPrice.toString().length > CURRENCY_MAX || issueCost.toString().length > CURRENCY_MAX) {

            msg = 'Currency digits length cannot exceed ' + CURRENCY_MAX;

        } else if (supplierId.length > SUPLIER_MAX) {

            msg = 'SupplierId length cannot exceed ' + SUPLIER_MAX;
        }

        // if(subCategory.length > CATEGORY_MAX)    
        //     msg = 'Category length cannot exceed ' + CATEGORY_MAX;

        if (msg.length > 0) {
            setModalTitle('Corrections Required')
            setModalMsg(msg);
            setIsDelete(false)
            setShowModal(true)
            return;
        }

        if (!props.isNew) { //Update existed item
            if (props.selectedCode !== itemCode && props.items.find(item => item.code === itemCode)) {
                setModalTitle('Unique Code Required');
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
                    packQty,
                    orderQty,
                    weigh,
                    weight,
                    uom,
                    leadTime,
                    mfg,
                    mfgItem,
                    notes
                );

                setModalTitle('Success');
                setModalMsg(`Data Saved.`);
                setIsDelete(false);
                setShowModal(true);


                // resetForm();
                // props.setIsShowEntryForm(false);
                // props.setIsShowDetail(false);
            }

        } else if (props.items.find(item => item.code === itemCode)) {
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
                packQty,
                orderQty,
                weigh,
                weight,
                uom,
                mfg,
                mfgItem,
                notes,
                leadTime
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

        setPackQty(1);
        setOrderQty(1);
        setWeigh(false);
        setWeight(0);
        setUom('qty');
        setMfg('');
        setMfgItem('');
        setNotes('');
        setLeadTime(0);
    }

    const closeForm = () => {
        resetForm();
        props.setIsShowEntryForm(false);
        props.setIsShowDetail(false);
    }


    const proceedDelete = () => {
        props.deleteItem(props.selectedCode);
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
        setModalMsg('Are you sure you want to delete the item "' + props.selectedCode + '"?');
        setShowModal(true);

    }
    const [showHint, setShowHint] = useState(false);
    const [searchUPC, setSearchUPC] = useState<string>("");
    const [searchUPCResult, setSearchUPCResult] = useState<BarcodeSpiderLookupResponse | null>(null);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchUPCChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchUPC(e.target.value);
        console.log(e);
    }

    const fillItemData = () => {
        if (searchUPCResult == null) return;
        
        setItemCode(searchUPCResult.item_attributes.upc);
        setDescription1(searchUPCResult.item_attributes.title);
        setDescription2(searchUPCResult.item_attributes.description);
        
        const highestPriceStr = searchUPCResult.item_attributes.highest_price;
        const storePriceStr = searchUPCResult.Stores?.[0]?.price;
        const priceStr =  highestPriceStr?.trim() ? highestPriceStr : storePriceStr?.trim() ? storePriceStr  : null;
        setUnitPrice(Number(priceStr));
        setIssueCost(Number(priceStr));
        setItemImage(searchUPCResult.item_attributes.image);
        setSupplierId(searchUPCResult.item_attributes.publisher);
    }

    const onSearchUPCSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchProductByUPC(searchUPC);
        
        if(typeof result === "string") {
            setServerError(result);
        } else {
            console.log("result.data", result.data);

            setSearchUPCResult(result.data);
            
            console.log("State: searchUPCResult: ", searchUPCResult);  
            
            fillItemData();
        }
    }

    return (
        <div>
            {!isReadOnly && (
                <div className="row g-1 align-items-center">
                    <div className="col-auto mb-3">
                        <SearchUPC  onSearchUPCSubmit={onSearchUPCSubmit} searchUPC={searchUPC} handleSearchUPCChange={handleSearchUPCChange}/>
                        {/* {serverError && <h1>serverError</h1>} */}
                    </div>
                </div>
            )} 
            
            <form>
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
                        {isReadOnly && <img src={itemImage} alt=""  style={{ maxWidth: "200px", height: "auto" }}/>}
                    </div>
                    <div className='col-12 mb-3'>    
                        <label className='form-label'>
                            Description 1:
                            {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION1_MAX} )</span>)}
                            {props.isNew && (<span className='text-danger small'> (required)</span>)}
                        </label>
                        <input className='form-control' type='text' required
                            value={description1}
                            onChange={(event) => setDescription1(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></input>

                    </div>
                    <div className='col-12 mb-3'>
                        <label className='form-label'>Description 2:</label>
                        {!isReadOnly && (<span style={{ fontSize: '0.6rem' }}> ( max length: {DESCRIPTION2_MAX} )</span>)}
                        <textarea className='form-control' rows={3}
                            value={description2}
                            onChange={(event) => setDescription2(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
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
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
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
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
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
                            onChange={(e) => {
                                const num = parseFloat(e.target.value.trim());
                                setUnitPrice(Number(num.toFixed(2)));
                            }}

                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></input>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Issue Cost:</label>
                        <input className='form-control' type='number'
                            value={issueCost}
                            onChange={(e) => {
                                const num = parseFloat(e.target.value.trim());
                                setIssueCost(Number(num.toFixed(2)));
                            }}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></input>
                    </div>

                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6  mb-3'>
                        <label className='form-label'>Pack Quantity:</label>
                        <input className='form-control' type='number'
                            value={packQty}
                            onChange={(e) => setPackQty(parseInt(e.target.value.trim()))}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
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
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
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
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Item Image URL:</label>
                        <textarea className='form-control' rows={3}
                            value={itemImage}
                            onChange={(event) => setItemImage(event.target.value.trim())}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Notes:</label>
                        <textarea className='form-control' rows={3}
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                            readOnly={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        ></textarea>
                    </div>
                    <div className='col-lg-5 col-md-7 col-sm-10 col-xs-12  mb-3'>

                        <label className='form-label'>Category:</label>
                        <select className='form-control'
                            value={category}
                            onChange={(event) => setCategory(event.target.value.trim())}
                            disabled={isReadOnly}
                            style={isReadOnly ? { backgroundColor: 'transparent', border: 'none', outline: 'none', pointerEvents: 'none' } : {}}
                        >
                            {Object.entries(ItemCategories).map(([key, value]) => (
                                <option key={key} value={value}>
                                    {value}
                                </option>
                            ))}

                        </select>
                    </div>

                </div>
                {/* <div className='mb-3'>
                    <label className='form-label'>Sub-catetory</label>
                    {(<span style={{ fontSize: '0.6rem' }}>( max length: {CATEGORY_MAX} )</span>)}
                    <input className='form-control' type='text' 
                        value={subCategory}
                        onChange={(event) => setSubCategory(event.target.value.trim())}
                        readOnly={isReadOnly}
                        ></input>
                </div>
                 */}
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


