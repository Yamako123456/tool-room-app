import { BinModel } from "../../../models/BinsModel";
import { ItemModel } from "../../../models/ItemModel";

export const getTotalQtyForItem = (
  itemCode: string,
  bins: BinModel[],
) => {
  const itemBins = getBinsForItem(itemCode, bins);
  if (itemBins.length === 0)
    return 0;
  return itemBins.reduce((sum, bin) => sum + bin.qty, 0);
}

export const getBinsForItem = (
  itemCode: string, bins:  BinModel[],
) => {
  return  bins.filter(
    (bin) => bin.active && bin.item === itemCode
  );
}