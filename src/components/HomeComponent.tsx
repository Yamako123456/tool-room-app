import React from 'react'

export const HomeComponent: React.FC = () => {
    return (
        <div>
            <div className='mb-3'>
                <h1>Welcome to Toolroom Management System </h1>
                <h3>Simplify, Track, and Manage Your Tools with Ease</h3>
            </div>

            {/* <div style={{ height: '100vh' }}> */}
            <div>
                <img src="/img/panoramicToolroom.jpg" alt="Dashboard-image" className="img-fluid" />
            </div>

            <p className='mt-5'>
                The Tool Room Management Application is designed to assist tool room attendants in manufacturing environments with efficiently managing the issuance and return of tools and parts to production team members. 
            </p>
            <p>
            Printing out barcode for the item code and apllying to the item, the toolroom attendants can scan item to process issued/returned items from/to the toolroom.  
            </p>
            <p>
            This comprehensive system records all transactions, monitors stock levels, and controls item issuance based on employee access permissions.
            </p>
            <p>
            <h3>Key Features</h3>
            Inventory Item Management Module empowers employees with admin rights to perform CRUD (Create, Retrieve, Update, Delete) operations on inventory items. Key functionalities include:
            </p>

           

            <p>
                <ul>
                    <li>
                        Create: Ensures unique, non-empty item codes, and mandates non-empty values for description and supplier ID.

                    </li>
                    <li>
                        Retrieve: The item's detail view will display by clicking the <i>Show Detail</i> button in the item table.

                    </li>
                    <li>

                        Update: Full updates are allowed for items not yet used in transactions. Once used, critical fields like item code and supplier ID cannot be altered.
                    </li>
                    <li>
                        Delete: Items never used in transactions can be removed entirely; otherwise, they are marked inactive and hidden from the inventory list.

                    </li>
                    <li>
                        By <strong>printing barcodes</strong> for item codes and applying them to the items, toolroom attendants can efficiently scan and process the issuance and return of items in the toolroom."
                    </li>
                </ul>
                This application ensures efficient tool management, maintaining operational excellence on the shop floor.
                <br/>
                <br/>
                To get started, Please click "Items" and setup your inventory items!
                
            </p>
            <div style={{ height: '100vh' }}>
                <img src="/img/thumbUpHelmet.jpg" alt="Dashboard-image" className="img-fluid" />
            </div>
        </div>
    )
}