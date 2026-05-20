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

export const decreaseBinQty = (
  itemCode: string, 
  bins: BinModel[],
  qty: number,
) => {
  const itemBins = getBinsForItem(itemCode, bins);
  let issueQty = qty;

  itemBins.map( (itemBin) => {
    if (itemBin.qty >= issueQty) {
      issueQty = 0;
    } else {
      issueQty -= itemBin.qty;
    }
  }

  );
}

export const updateBinQty = (
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  binCode: string,
  qty: number,
) => {
  const updatedBins = bins.map( (bin) => {

    if (bin.binCode === binCode) {
      return {...bin, qty: bin.qty + qty};;
    }
    return bin;
  
  })
  setBins(updatedBins);
}