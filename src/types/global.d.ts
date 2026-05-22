// import { ITEM_TYPES } from "../constants/product";

export {};

declare global {
  // type ItemType = typeof ITEM_TYPES[number]; //"EXPENDABLE" | "DURABLE";
  
  type RestockObjType = {
        itemCode: string,
        description: string,
        itemImage: string,
        supplierName: string,
        supplierCode: string,
        binsStr: string,
        totalQty: number,
        totalMin: number,
        orderQty: number,
        needsRestock: boolean,
        status: String,
        criticalNumber: number,
        shortage: number,
    };

  type ReturnToType = //Union type
    | "BIN"
    | "REGRIND"
    | "SCRAP";

  const ItemTypes = { // used in obsolete modules.
        EXPENDABLE: 'Expendable',
        DURABLE: 'Durable',
        // PERISHABLE: 'Perishable',
        // SERIAL: 'Serial',
        // GAGE: 'Gage'
    }  
}

