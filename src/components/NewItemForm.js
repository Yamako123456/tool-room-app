import React, {useState} from 'react'

function NewItemForm(props) {
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

    const selectedItem = props.items.filter((itm) => itm.code == props.selectedCode)[0];
    
    const [code, setCode] = useState(props.isNew ? '' : selectedItem.code);
    const [description1, setDescription1] = useState(props.isNew ? '' : selectedItem.description1);
    const [description2, setDescription2] = useState(props.isNew ? '' : selectedItem.description2);
    const [itemType, setItemType] = useState(props.isNew ? ItemTypes.EXPENDABLE : selectedItem.itemType);
    const [unitPrice, setUnitPrice] = useState(props.isNew ? 0.00 : selectedItem.unitPrice);
    const [issueCost, setIssueCost] = useState(props.isNew ? 0.00 : selectedItem.issueCost);
    const [suppierId, setSuppierId] = useState(props.isNew ? '' : selectedItem.suppierId);
    const [itemImage, setItemImage] = useState(props.isNew ? '' : selectedItem.itemImage);
    const [category, setCategory] = useState(props.isNew ? ItemCategories.TOOL: selectedItem.category);
    const [subCategory, setSubCategory] = useState(props.isNew ? '' : selectedItem.subCategory);
    // const selectedItem = props.items.filter((itm) => itm.code == props.selectedCode);
    
    // const [code, setCode] = useState(props.isNew ? '' : props.selectedItem.code);
    // const [description1, setDescription1] = useState(props.isNew ? '' : selectedItem.description1);
    // const [description2, setDescription2] = useState(props.isNew ? '' : selectedItem.description2);
    // const [itemType, setItemType] = useState(props.isNew ? ItemTypes.EXPENDABLE : selectedItem.itemType);
    // const [unitPrice, setUnitPrice] = useState(props.isNew ? 0.00 : selectedItem.unitPrice);
    // const [issueCost, setIssueCost] = useState(props.isNew ? 0.00 : selectedItem.issueCost);
    // const [suppierId, setSuppierId] = useState(props.isNew ? '' : selectedItem.suppierId);
    // const [itemImage, setItemImage] = useState(props.isNew ? '' : selectedItem.itemImage);
    // const [category, setCategory] = useState(props.isNew ? ItemCategories.TOOL: selectedItem.category);
    // const [subCategory, setSubCategory] = useState(props.isNew ? '' : selectedItem.subCategory);

    const [isReadOnly, setIsReadOnly] = useState(!props.isNew)

    const submitItem = () => {
       
        // Check if items is defined before using find
        if (!props.items) {
            console.log('Items prop is undefined or null.');
            return;
        }
       
        //const regex = '/^\d*\.?\d*$/'; 
       
        const codeFound = props.items.find(item => item.code === code );
       
        if (props.items.find(item => item.code === code )) {
            alert(`Code: "${code}" already exists. Please enter unique item code.`)

        }else if( 
            //regex.test(unitPrice) &&
            code !== '' && //!codeFound &&
            description1 !== '' &&
            suppierId !== '' 
        ){
            props.addItem(
                code,
                description1,
                description2,
                itemType,
                unitPrice,
                issueCost,
                suppierId,
                itemImage,
                category,
                subCategory 
            );

            resetForm();
            props.setShowEntryForm(false);
        }
    }

    const resetForm = () => {
        setCode('');
        setDescription1('');
        setDescription2('');
        setItemType(ItemTypes.EXPENDABLE);
        setUnitPrice('0.00');
        setIssueCost('0.00');
        setSuppierId('');
        setItemImage('');
        setCategory(ItemCategories.TOOL);
        setSubCategory('');
    }

    const closeForm = () => {
        resetForm();
        props.setShowEntryForm(false);
        props.setShowDetail(false);
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Item Code</label>
                    <input type='text' className='form-control' required 
                        // value={code}
                        onChange={(event) => setCode(event.target.value)}
                        readOnly={isReadOnly}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description 1</label>
                    <textarea className='form-control' rows={3} required 
                        value={description1}
                        onChange={(event) => setDescription1(event.target.value)}
                        readOnly={isReadOnly}
                    ></textarea>
                    
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description 2</label>
                    <textarea className='form-control'  rows={3} 
                        value={description2}
                        onChange={(event) => setDescription2(event.target.value)}
                        readOnly={isReadOnly}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Item Type</label>
                    <select className='form-control' 
                        value={itemType} 
                        onChange={(event) => setItemType(event.target.value)}
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
                        onChange={(event) => setUnitPrice(event.target.value)}
                        readOnly={isReadOnly}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Issue Cost</label>
                    <input className='form-control' type='number' 
                        value={issueCost}
                        onChange={(event) => setIssueCost(event.target.value)}
                        readOnly={isReadOnly}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Supplier ID</label>
                    <input className='form-control' type='text' required
                        value={suppierId}
                        onChange={(event) => setSuppierId(event.target.value)}
                        readOnly={isReadOnly}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Item Image URL</label>
                    <input className='form-control' type='text' 
                        value={itemImage}
                        onChange={(event) => setItemImage(event.target.value)}
                        readOnly={isReadOnly}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Category</label>
                    <select className='form-control' type='text' 
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
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
                    <input className='form-control' type='text' 
                        value={subCategory}
                        onChange={(event) => setSubCategory(event.target.value)}
                        readOnly={isReadOnly}
                        ></input>
                </div>
                
            </form>
            <button className='btn btn-primary' onClick={submitItem}>{props.caption}</button>
            <button className='btn btn-primary' onClick={closeForm}>Close</button>

        </div>
    )
}

export default NewItemForm