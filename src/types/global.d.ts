import { ITEM_TYPES } from "../constants/product";

export {};

declare global {
  type ItemType = typeof ITEM_TYPES[number]; //"EXPENDABLE" | "DURABLE";
  
  type RestockObjType = {
        itemCode: string,
        description: string,
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

  type TransactionType =
    | "ISSUE"
    | "RETURN"
    | "STOCK"
    | "PHYSICAL_COUNT";

  type ReturnToType =
    | "BIN"
    | "REGRIND"
    | "SCRAP";

}
