import { ItemModel } from "../../../models/ItemModel";

export const getItemType = (items: ItemModel[], itemCode: string)  => {
  if (items.length === 0 || !itemCode || itemCode === "") {
    console.log("getItemType() got invalid input");
    return;

    return 
  }
}