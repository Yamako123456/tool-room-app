import React from 'react'

export const AboutComponent = () => {
    return (
        <div className="container-m-5">
            <h1>

            </h1>
            <div>
                <img src="/img/new-empty-warehouse.jpg" alt="warehouse" className="img-fluid" />
            </div>
            <p className="lead mt-3">
                <h2>About Developer</h2>
                Hello! I'm Miyoko Yamakawa, a Software Developer based in Irvine, CA. With a rich background spanning over a decades, I have honed my skills across various domains of the software development lifecycle. My expertise lies in developing robust backend using Object Oriented technologies like Java, Delphi, Spring Boot, and ASP.Net, as well as crafting dynamic and user-friendly frontend applications with React.js, Vue.js, and TypeScript.
            </p>
            <p className='container mt-5'>

                <div className='card'>
                    <div className='card-header'>
                        <h2> About Items Module Features</h2>
                    </div>

                    <div className='card-body'>

                        <h5>Create New Items</h5>
                        The system enforces that an item code to be unique and non-empty. Also, the description 1 and the supplier ID must be non-empty values.

                        <br /><br />
                        <h5>List Items </h5>
                        Items' brief information are retrieved and displayed in the table format. The item's detail view opens up by clicking the <i>Show Detail</i> button in the item table. This detail view provide the edit button and the delete button.
                        An employee can single-click on the table to select an item which is used for the bin’s item assignment operation in the future Bin Module development.

                        <br /><br />
                        <h5>Update Items' Detail</h5>
                        Modification of the selected item properties is available from the item's detail view. It allows full-update only on the item that hasn't been used in any transaction. Once a item's used, the item code and the supplier ID can not be changed. If the item is getting supplied from a different vendor, a new item entry must be created.

                        <br /><br />
                        <h5>Delete Items</h5>
                        It removes the item from the system only if the item has never been used in any transactions; otherwise, it would turn the "active" flag to false and not show it on the inventory item list.

                        <br /><br />
                        <h5>Print Out Item Barcodes</h5>
                        By Create item barcode stickers and put them of items so that toolroom attendants can use scanner to process  issuance and return of items out/in the toolroom."
                    </div>
                </div>

                <br />
                <div className="d-flex justify-content-center">
                    <img src="/img/thumbUpHelmet.jpg" alt="Dashboard-image" className="img-fluid"
                        style={{ maxWidth: "50%", height: "auto" }} />
                </div>
            </p>

        </div>
    )
}

