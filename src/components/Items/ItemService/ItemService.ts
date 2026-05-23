import { ItemModel } from "../../../models/ItemModel";

export const getItemType = (items: ItemModel[], itemCode: string)  => {
  if (items.length === 0 || !itemCode || itemCode === "") {
    console.log("getItemType() got invalid input");
    return;

    const aItem = items.find(item => item.code === itemCode);
    if (!aItem) {
      console.log("getItemType() got non-existing itemcode", itemCode);
    }
    return aItem?.itemType;
  }
}