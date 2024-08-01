import React from 'react'

export const AboutComponent = () => {
   return (
       <div className="container-m-5">
           <h1>
               About Me and Toolroom System
           </h1>
           <div>
               <img src="/img/new-empty-warehouse.jpg" alt="warehouse" className="img-fluid" />
           </div>
           <p className="lead mt-3">
           Hello! I'm Miyoko Yamakawa, a seasoned Software Developer based in Irvine, CA. With a rich background spanning over a decades, I have honed my skills across various domains of the software development lifecycle. My expertise lies in developing robust backend using Object Oriented technologies like Java, Delphi, Spring Boot, and ASP.Net, as well as crafting dynamic and user-friendly frontend applications with React.js, Vue.js, and TypeScript.
           </p>
           <p className='container mt-5'>
          
              <div className='card'>
                   <div className='card-header'>
                       <h4> About Items Module Features</h4>
                   </div>
                  
                   <div className='card-body'>

                       <h5>Creating new item</h5>
                       The system enforces that an item code to be unique and non-empty. Also, the description 1 and the supplier ID must be non-empty values.
                      
                       <br/><br/>
                       <h5>Retrieving item data</h5>
                       Items' brief information are retrieved and displayed in the table format. The item's detail view opens up by clicking the <i>Show Detail</i> button in the item table. This detail view provide the edit button and the delete button.
                       An employee can single-click on the table to select an item which is used for the bin’s item assignment operation in the future Bin Module development.

                       <br/><br/>
                       <h5>Updating items' detail</h5>
                       Modification of the selected item properties is available from the item's detail view. It allows full-update only on the item that hasn't been used in any transaction. Once a item's used, the item code and the supplier ID can not be changed. If the item is getting supplied from a different vendor, a new item entry must be created.

                       <br/><br/>
                       <h5>Deleting items</h5>
                       It physically removes the item from the system only if the item has never been used in any transactions; otherwise, it would turn the "active" flag to false and not show it on the inventory item list.
                   </div>
               </div>
               <div className='card mt-5'>

                    <div className='card-header'>
                        <h4> About Purchase Order Features<span className="badge badge-primary badge-pill " style={{color: "green"}}>Upcoming</span></h4>
                    </div>
                    <div className='card-body'>
                        <p>
                            Prevent lost PO related documents, order delays, problems with suppliers,document discrepancies, and fraud by efficient procurement pipelines with specific guidelines for PO processing.
                        </p>
                        <ol className='accordion'>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-issue-po'>

                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#issue-po-detail'
                                        aria-expanded='false'
                                        aria-controls='issue-po-detail'
                                    >
                                        Issuing a PO
                                    </button>
                                </h5>

                                <div className='accordion-collapse collapse' id='issue-po-detail'
                                    aria-labelledby='heading-issue-po'>
                                    <ul className='accordion-body' >
                                        <li>PO number</li>
                                        <li>Company details</li>
                                        <li>Order description such as quantities and prices</li>
                                        <li>Dates of purchase and delivery</li>
                                        <li>Payment terms and conditions</li>
                                       
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-po-approval'>
                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#po-approval-detail'
                                        aria-expanded='false'
                                        aria-control='po-approval-detail'
                                    >
                                        PO Approval
                                    </button>    
                                </h5>
                                <div className='accordion-collapse collapse' id='po-approval-detail'    
                                    aria-labelledby='heading-po-approval' >
                                    <ul className='accordion-body'>
                                        <li>Emails of approvers(e.t. Head of department, finance manager and head of finance etc.) </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-po-dispatch'>
                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#po-dispatch-detail'
                                        aria-expanded='false'
                                        aria-controls='po-dispatch-detail'    
                                    >
                                        PO Dispatch and Negotiation of PO Details        
                                    </button>
                                </h5>
                                <div className='accordion-collapse collapse' id='po-dispatch-detail'
                                    aria-labelledby='accordion-header'>
                                    <ul className='accordion-body'>
                                        <li>Email of the supplier, by which the PO is sent to immediately after approval </li>
                                        <li>Supplier approval by reviewing prices, quantities, delivery terms etc.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-po-acceptance'>
                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#po-acceptance-detail'
                                        aria-expanded='false'
                                        aria-controls='po-acceptance-detail'    
                                    >
                                        PO Acceptance        
                                    </button>
                                </h5>
                                <div className='accordion-collapse collapse' id='po-acceptance-detail'
                                    aria-labelledby='heading-po-acceptance'>
                                    <ul className='accordion-body'>
                                        <li>A list of terms in the legally binding contract </li>
                                        <li>Signatures from both parties</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-delivery-and-invoicing'>

                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#delivery-and-invoicing-detail'
                                        aria-expanded='false'
                                        aria-controls='delivery-and-invoicing-detail'
                                    >
                                        Delivery and Invoicing
                                    </button>
                                </h5>

                                <div className='accordion-collapse collapse' 
                                    id='delivery-and-invoicing-detail'
                                    aria-labelledby='heading-delivery-and-invoicing'>
                                    <ul className='accordion-body' >
                                        <li>Receiving items</li>
                                        <li>Receiving invoice</li>
                                        <li>Receiving invoice</li>
                                        <li>Restock</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-three-way-matching'>

                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#three-way-matching-detail'
                                        aria-expanded='false'
                                        aria-controls='three-way-matching-detail'
                                    >
                                        Three Way Matching
                                    </button>
                                </h5>

                                <div className='accordion-collapse collapse' 
                                    id='three-way-matching-detail'
                                    aria-labelledby='heading-three-way-matching'>
                                    <ul className='accordion-body' >
                                        <li>Verify all PO, Invoice and Receipt are matched</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='accordion-item'>
                                <h5 className='accordion-header' id='heading-invoice-payment'>

                                    <button className='accordion-button collapsed' type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#invoice-payment-detail'
                                        aria-expanded='false'
                                        aria-controls='invoice-payment-detail'
                                    >
                                        Invoice Payment
                                    </button>
                                </h5>

                                <div className='accordion-collapse collapse' 
                                    id='invoice-payment-detail'
                                    aria-labelledby='heading-invoice-payment'>
                                    <ul className='accordion-body' >
                                        <li>Procurement team vrification of the invoice</li>
                                        <li>Notification to accounting team</li>
                                        <li>Supplier gets paied based on the contract</li>
                                        <li>Archiving invoice</li>
                                    </ul>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

           </p>

       </div>
   )
}

