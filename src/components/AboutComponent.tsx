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
          
              <div className='card'>
                   <div className='card-header'>
                       <h2> Items Module Features</h2>
                   </div>
                  
                   <div className='card-body'>


                       <h4>For CREATE item operation</h4>
                       The system enforces that an item code to be unique and non-empty. Also, the description 1 and the supplier ID must be non-empty values.
                      
                       <br/><br/>
                       <h4>To RETRIEVE item data</h4>
                       Items' brief information are retrieved and displayed in the table format. The item's detail view opens up by clicking the <i>Show Detail</i> button in the item table. This detail view provide the edit button and the delete button.
                       An employee can single-click on the table to select an item which is used for the bin’s item assignment operation in the future Bin Module development.

                       <br/><br/>
                       <h4>The UPDATE items</h4>
                       Modification of the selected item properties is available from the item's detail view. It allows full-update only on the item that hasn't been used in any transaction. Once a item's used, the item code and the supplier ID can not be changed. If the item is getting supplied from a different vendor, a new item entry must be created.

                       <br/><br/>
                       <h4>DELETE items</h4>
                       It physically removes the item from the system only if the item has never been used in any transactions; otherwise, it would turn the "active" flag to false and not show it on the inventory item list.
                   </div>
               </div>

           </p>

       </div>
   )
}

