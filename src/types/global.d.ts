import { ITEM_TYPES } from "../constants/product";

export {};

declare global {
  type ItemType = typeof ITEM_TYPES[number]; //"EXPENDABLE" | "DURABLE";
  
}