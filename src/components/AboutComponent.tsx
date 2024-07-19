import React from 'react'

export const AboutComponent = () => {
    return (
        <div className="container-m-5">
            <h1>
                About Tool Room Management System
            </h1>
            <div>
                <img src="/img/new-empty-warehouse.jpg" alt="warehouse" className="img-fluid" />
            </div>


            <p className='container mt-5'>
            
                The Toolroom Management System helps tooltoom attendants in manufacturer's shop-floors to issue out tools/parts to production team members, accept returned tools, and manage inventory.
                <br/>
                <br/>
                It monitors stock-outs and restock. 
                <br/>
                <br/>
                <h2> Inventory Item Management Module Features</h2>
                It allows employees with admin-rights to perform CRUD operation on inventory items in the system.
                <br/>
                <br/>

                <div className='card'>
                    <div className='card-header'>
                        <h2> Items Module Features</h2>
                    </div>
                    
                    <div className='card-body'>


                        <h4>For CREATE item operation</h4>
                        The system enforces that a item code to be unique and non-empty. Also, the description 1 and the supplier ID must be non-empty values.

                        <h4>To RETRIEVE items</h4>
                        A employee can select a item by double-click on the item table to display the "detail screen".

                        <h4>The UPDATE items</h4>
                        Modifiction of the selected item properties is available from the item's "detail screen". It allows full-update only on the item that hasn't used in any transaction. Once a item's used, the item code and the supplier ID can not be changed. If the item is getting supplied from the different vendor, a new item entry must be created.

                        <h4>DELETE items</h4>
                        It physically removes the item from the system only if the item has never used in any transactions; otherwise, it would turn the "active" flag to false and not show it on the inventory item list.
                    </div>
                </div>

            </p>

            <img src="/img/toolroom-attendant.jpg" alt="Dashboard" className="img-fluid" />
        </div>
    )
}