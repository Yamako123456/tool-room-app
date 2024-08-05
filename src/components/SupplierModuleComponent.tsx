import React, {useState} from 'react'
import {SupplierTableSection} from "./SupplierTableSection";
// import {NewItemForm} from "./NewItemForm";

export const SupplierModuleComponent = () => {
    const [isShowEntryForm, setIsShowEntryForm] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);

    const [suppliers, setSuppliers] = useState<SupplierModel[]>([
            {
                recordId: undefined,       
                myNo: "GRNGR1234",
                myName: "Grainger",
                addr1: "123 E. Ball Rd.",
                addr2: "",
                city: "Anaheim",
                myState: "CA",  
                zip: "92805-6312",  
                country: "USA",
                phone: "949-555-1234",
                fax: "949-555-5678",
                contact: "John Snow",
                email: "john.snow@mygranger.com",
                email2: "",
                email3: "", 
                autoPo: true,
                faxPo: false,
                emailPo: true,
                blanketPo: "",
                custPoRepPath: "",
                notes: "rainger is America’s trusted source for MRO supplies and industrial products. ",
                regrinder: false,
                calibrator: false,
                serviceFee: 0,
                stateTaxRate: 7.25,
                currencyType: "USD",
                shipMethod: "",
                useOrdQty: false,
                approval: false, 
                approveEmail: "",
                authenticationAddr: "",
                assigned: false,
                active: true
            },
            {
                recordId: undefined,       
                myNo: "LANISTER12345",
                myName: "Lanister CORP",
                addr1: "876 Main St.",
                addr2: "",
                city: "Atlanta",
                myState: "GA",  
                zip: "30304-1234",  
                country: "USA",
                phone: "404-555-1234",
                fax: "404-555-5678",
                contact: "Tyrion Lanister",
                email: "tyrion.lanister@mylanister.com",
                email2: "",
                email3: "", 
                autoPo: true,
                faxPo: false,
                emailPo: true,
                blanketPo: "",
                custPoRepPath: "",
                notes: "An industry leader with hundreds of thousands of productss. ",
                regrinder: false,
                calibrator: false,
                serviceFee: 0,
                stateTaxRate: 6.25,
                currencyType: "USD",
                shipMethod: "",
                useOrdQty: false,
                approval: false, 
                approveEmail: "",
                authenticationAddr: "",
                assigned: false,
                active: true
            },
            {
                recordId: undefined,       
                myNo: "STARK12345",
                myName: "Stark CORP",
                addr1: "876 Main St.",
                addr2: "",
                city: "Atlanta",
                myState: "GA",  
                zip: "30304-1234",  
                country: "USA",
                phone: "404-555-1234",
                fax: "404-555-5678",
                contact: "Arya Stark",
                email: "arya.stark@mystark.com",
                email2: "",
                email3: "", 
                autoPo: true,
                faxPo: false,
                emailPo: true,
                blanketPo: "",
                custPoRepPath: "",
                notes: "Buy direct from Motion! The number one supplier of bearings, pneumatics,. ",
                regrinder: false,
                calibrator: false,
                serviceFee: 0,
                stateTaxRate: 6.25,
                currencyType: "USD",
                shipMethod: "",
                useOrdQty: false,
                approval: false, 
                approveEmail: "",
                authenticationAddr: "",
                assigned: false,
                active: true
            },
    ]
    )

    const addSupplier = (
        myNo: string,
        myName: string,
        phone: string,
        email: string, 
        autoPo: boolean,
        faxPo: boolean,
        emailPo: boolean,
        custPoRepPath: string, 
        regrinder: boolean,
        calibrator: boolean,
        useOrdQty: boolean,
        approval: boolean,
        serviceFee: number,
        stateTaxRate: number, 

        addr1?: string, 
        addr2?: string,
        city?: string,
        myState?: string,  
        zip?: string,
        country?: string,
        fax?: string,
        contact?: string,
        email2?: string,
        email3?: string, 
        blanketPo?: string,
        notes?: string,

        
        currencyType?: string,
        shipMethod?: string,
        approveEmail?: string,
        authenticationAddr?: string,
    ) => {
            
            if (suppliers.find(sup => sup.myNo === myNo))
                return;

            const newSupplier = {
                myNo: myNo,
                myName: myName,
                addr1: addr1,
                addr2: addr2,
                city: city,
                myState: myState,
                zip: zip,
                country: country,
                phone: phone,
                fax: fax,
                contact: contact,
                email: email,
                email2: email2,
                email3: email3,
                autoPo: autoPo,
                faxPo: faxPo,
                emailPo: emailPo,
                blanketPo: blanketPo,
                custPoRepPath: custPoRepPath,
                notes: notes,
                regrinder: regrinder,
                calibrator: calibrator,
                stateTaxRate: stateTaxRate,
                serviceFee: serviceFee,
                currencyType: currencyType,
                shipMethod: shipMethod,
                useOrdQty: useOrdQty,
                approval: approval,
                approveEmail: approveEmail,
                authenticationAddr: authenticationAddr,
                assigned: false,
                active: true
            }    
            
            setSuppliers(prevSuppliers => [...prevSuppliers, 
                newSupplier as SupplierModel 
            ])
            
    }

    const updateSupplier = (
        originalMyNo: string,
        myNo: string,
        myName: string,
        phone: string,
        email: string, 
        autoPo: boolean,
        faxPo: boolean,
        emailPo: boolean,
        custPoRepPath: string, 
        regrinder: boolean,
        calibrator: boolean,
        useOrdQty: boolean,
        approval: boolean,
        serviceFee: number,
        stateTaxRate: number, 

        addr1?: string, 
        addr2?: string,
        city?: string,
        myState?: string,  
        zip?: string,
        country?: string,
        fax?: string,
        contact?: string,
        email2?: string,
        email3?: string, 
        blanketPo?: string,
        notes?: string,


        currencyType?: string,
        shipMethod?: string,
        approveEmail?: string,
        authenticationAddr?: string,
    ) => {
           // Pre-verified other places and they display nice modal popup. here only for just-in-case.
            if ( myNo !== originalMyNo && 
                 suppliers.find(sup => sup.myNo === myNo)) {
                    alert('Your new supplier ID alread exists! Update aborted. Pleas try again.')
                return;
            }

            const originalSupplier: SupplierModel = suppliers.filter(
                sup => sup.myNo === originalMyNo
            )[0];
            const index = suppliers.findIndex(sup => sup.myNo === originalMyNo);
            if (index !== -1) {
           
                const newSupplier: SupplierModel = {
                    myNo: myNo,
                    myName: myName,
                    addr1: addr1,
                    addr2: addr2,
                    city: city,
                    myState: myState,
                    zip: zip,
                    country: country,
                    phone: phone,
                    fax: fax,
                    contact: contact,
                    email: email,
                    email2: email2,
                    email3: email3,
                    autoPo: autoPo,
                    faxPo: faxPo,
                    emailPo: emailPo,
                    blanketPo: blanketPo,
                    custPoRepPath: custPoRepPath,
                    notes: notes,
                    regrinder: regrinder,
                    calibrator: calibrator,
                    stateTaxRate: stateTaxRate,
                    serviceFee: serviceFee,
                    currencyType: currencyType,
                    shipMethod: shipMethod,
                    useOrdQty: useOrdQty,
                    approval: approval,
                    approveEmail: approveEmail,
                    authenticationAddr: authenticationAddr,
                    assigned: originalSupplier.assigned,
                    active: originalSupplier.active
                }

                const shallowCopiedSuppliers: SupplierModel[] = [
                    ...suppliers.slice(0, index) as SupplierModel[], 
                    newSupplier as SupplierModel, 
                    ...suppliers.slice(index + 1) as SupplierModel[]
                ];

                setSuppliers(shallowCopiedSuppliers );
            }
        }

    const deleteSupplier = (originalMyNo: string) => {
        if (suppliers.filter((sup) => sup.myNo === originalMyNo)[0].assigned) {
            
            const modifiedSuppliers: SupplierModel[] = suppliers.map(sup => {
               
                if (sup.myNo === originalMyNo) {
                    return { ...sup, active: false } as SupplierModel;
                } else
                    return sup;
            })
            setSuppliers(modifiedSuppliers)
            
        } else {

            setSuppliers(suppliers.filter(sup => sup.myNo !== originalMyNo));
        }
         
    
    }

    const inactivateSupplier = (myNo: string) => {
        const modifiedSuppliers: SupplierModel[] = suppliers.map(sup => 
            sup.myNo === myNo ? { ...sup, active: false } as SupplierModel : sup
        );    

        setSuppliers(modifiedSuppliers);
    } 

    return(
        <div className='mt-5 '>
            <div className="page-header">
                <h1>Suppliers</h1>
            </div>
 
            <SupplierTableSection 
                addSupplier={addSupplier}
                updateSupplier={updateSupplier}
                deleteSupplier={deleteSupplier}
                suppliers={suppliers} 
                inactivateSupplier={inactivateSupplier}
                setIsShowEntryForm={setIsShowEntryForm}
                isShowDetail={isShowDetail}
                setIsShowDetail={setIsShowDetail}
            />

            {isShowEntryForm && (

            <div className='card mt-5' style={{backgroundColor: 'lightblue'}}>
                <div className='card-header'>
                    New Supplier Entry Form
                </div>
                <div className='card-body'>
                    {/* <NewSupplierForm 
                        isNew={true}
                        selectedMyNo={''}
                        addSupplier={addSupplier} 
                        deleteSupplier={deleteSupplier}
                        suppliers={suppliers} 
                        updateSupplier={updateSupplier}
                        setIsShowEntryForm={setIsShowEntryForm}
                        setIsShowDetail={setIsShowDetail}
                        caption={'Add'}
                    /> */}
                </div>
            </div>

            )}
            <div className='card mt-3'>
                <div className='card-body'>

                    <button className='btn btn-primary' 
                        onClick={() => {setIsShowEntryForm(true)}}
                        disabled={isShowEntryForm}
                    >Add New Item</button>    
                </div>
            </div>

        </div>
        
    )
}
