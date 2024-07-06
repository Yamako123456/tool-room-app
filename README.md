# Tool Room Management Application

This Tool Room Management Application helps tool toom attendants in manufacturer shop-floors to issue tools or parts to production team members and accept return of the tools, and records transactions.

It monitors stock-outs and issuing items to employees based on their access control

This project consist of small multiple momulde, such as Inventory Item Management module


## Inventory Item Management module

It allows employees with admin-rights to perform CRUD operation on inventory items in the system.

### Features

For `CREATE` item operation, the system enforces that a item code to be unique and non-empty. Also, the description 1 and the supplier ID must be non-empty values.

To `RETRIEVE` items, a employee can select a item from dropdown list to display the "detail screen". Also, there is a talbe displaying all items (excluding non-activevitems) for reference with brief information.

`DELETE` item operation physically removes the item from the system only if the item has never used in any transactions; otherwise, it would turn the "active" flag to false and not show it on the inventory item list.

The `UPDATE` functionality is available from the item's "detail screen".
It allows full-update only on the item that hasn't used in any transaction. Once a item's used, the item code and the supplier ID can not be changed. If the item is getting supplied from the different vendor, a new item entry must be created.


