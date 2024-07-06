# Tool Room Management Application

This Tool Room Management Application help tool toom attendants in manufactureer shops to issue tools or parts to production team members and accept return of the tools based on their access control; as well as inventory management.
This project consist of multiple mulde such as Inventory Item Management module


## Inventory Item Management module

It allows employees with admin-rights to perform CRUD operation on inventory items in the system.

### Restrictions

For `CREATE` item operation, the system enforces that a item code to be unique and non-empty. Also, the description 1 and the supplier ID canot be empty.

To `RETRIEVE` items, a employee can select a item from dropdown list to display the detail information. Also, there is a talbe displaying all active items with brief info for reference.

`DELETE` item operation physically removes the item from the system only if the item has never used in any transactions; otherwise, it turn the active flag to false.

It allows full `UPDATE` only on the item that hasn't used in any transaction. Once a item was used, the item code and the supplier ID can not be change. If the item is getting supplied by the different vendor, a new item entry must be created.


