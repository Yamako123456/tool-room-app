import React, {useState} from 'react'

function NewItemForm(props) {

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
    const [code, setCode] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [itemType, setItemType] = useState(ItemTypes.EXPENDABLE);
    const [unitPrice, setUnitPrice] = useState('0');
    const [issueCost, setIssueCost] = useState('0');
    const [suppierId, setSuppierId] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [cateory, setCateory] = useState(ItemCategories.TOOL);
    const [subCategory, setSubCategory] = useState('');

    const submitItem = () => {
        
        if ( code !== '' &&
            description1 !== '' &&
            unitPrice!== '' &&
            issueCost !== '' &&
            suppierId !== '' &&
            itemImage !== '' 
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
                cateory,
                subCategory 
            );

            resetForm();
        }
    }

    const resetForm = () => {
        setCode('');
        setDescription1('');
        setDescription2('');
        setItemType(ItemTypes.EXPENDABLE);
        setUnitPrice('0');
        setIssueCost('0');
        setSuppierId('');
        setItemImage('');
        setCateory(ItemCategories.TOOL);
        setSubCategory('');
    }

    return (
        <div className='container mt-5 mb-3'>
            <form>
                <div className='mb-3'>
                    <label className='form label'>Item Code</label>
                    <input className='form control' type='text' required 
                        value={code}
                        onChange={(event) => setCode(event.target.value)}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Description 1</label>
                    <textarea className='form control' rows={3} required 
                        value={description1}
                        onChange={(event) => setDescription1(event.target.value)}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Description 2</label>
                    <textarea className='form control'  rows={3} 
                        value={description2}
                        onChange={(event) => setDescription2(event.target.value)}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Item Type</label>
                    <select className='form control' 
                        value={itemType} 
                        onChange={(event) => setItemType(event.target.vagitlue)}
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
                    <label className='form label'>Unit Price</label>
                    <input className='form control' type='text'  
                        value={unitPrice}
                        onChange={(event) => setUnitPrice(event.target.value)}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Issue Cost</label>
                    <input className='form control' type='text' 
                        value={issueCost}
                        onChange={(event) => setIssueCost(event.target.value)}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Supplier ID</label>
                    <input className='form control' type='text' required
                        value={suppierId}
                        onChange={(event) => setSuppierId(event.target.value)}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Item Image URL</label>
                    <input className='form control' type='text' 
                        value={itemImage}
                        onChange={(event) => setItemImage(event.target.value)}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form label'>Category</label>
                    <select className='form control' type='text' 
                        value={cateory}
                        onChange={(event) => setCateory(event.target.value)}
                    >
                        {Object.entries(ItemCategories).map(([key, value]) => (
                            <option key={key} value={value}>
                                {value}
                            </option>
                        ))}

                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form label'></label>
                    <input className='form control' type='text' 
                        value={subCategory}
                        onChange={(event) => setSubCategory(event.target.value)}
                        ></input>
                </div>
                
            </form>
            <button className='btn btn-primary' onClick={submitItem}>Add New Item</button>

        </div>
    )
}

export default NewItemForm