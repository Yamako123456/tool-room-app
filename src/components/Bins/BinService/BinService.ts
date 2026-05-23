import React from "react";
import { BinModel } from "../../../models/BinsModel";
import { ItemModel } from "../../../models/ItemModel";
import { TransactionModel } from "../../../models/Transaction/TransactionModel";
import { appendIssueRecord, appendTranRecordForIssue } from "../../TransactionService/IssueService";
import { getItemType } from "../../Items/ItemService/ItemService";
import { ItemType } from "../../../types/ItemTypes";
import { IssueModel } from "../../../models/Transaction/IssueModel";
// import { IssueRecordsState, TranRecordsState } from "../../../types/transactionTypes";
import { IssueRecordsState, } from "../../../types/transactionTypes";

export const getTotalQtyForItem = (
  itemCode: string,
  bins: BinModel[],
) => {
  const itemBins = getAllActiveBinsForItemWithQty(itemCode, bins);
  if (itemBins.length === 0)
    return 0;
  return itemBins.reduce((sum, bin) => sum + bin.qty, 0);
}

export const getAllActiveBinsForItemWithQty = (
  itemCode: string, bins:  BinModel[],
) => {
  return  bins.filter(
    (bin) => bin.active && bin.item === itemCode && bin.qty > 0
  );
}

export const subtractBinQty = (
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  binCode: string,
  substractQty: number,
) => {

  const updatedBins = bins.map( (bin) => {
    if (bin.binCode === binCode) {
      if (bin.qty < substractQty) {
        console.log(`Insufficient quantity in bin: ${binCode}.`);
        throw new Error(`Insufficient quantity in bin: ${binCode}.`);
        return bin;
      } 
      return {...bin, qty: bin.qty - substractQty};;
    }
    return bin;
  })

  setBins(updatedBins);
}

export const addBinQty = (
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  binCode: string,
  addQty: number,
) => {

  const updatedBins = bins.map( (bin) => {
    if (bin.binCode === binCode) {
      return {...bin, qty: bin.qty + addQty};;
    }
    return bin;
  })

  setBins(updatedBins);
}

export const issueItemQtyFromBins = (
  item: ItemModel, 
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  issueQty: number,
  empCode: string,
  tranRecords: TransactionModel[],
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
  nextTranId: number,
  setNextTranId:  React.Dispatch<React.SetStateAction<number>>,
  issueRecords: IssueRecordsState,
  setIssueRecords: React.Dispatch<React.SetStateAction<IssueRecordsState>>,
) => {
  
  if (issueQty <= 0) {
    console.log("issueItemQty() got non-positive issueQty");
    return;
  }
  let remaining = issueQty;
  const itemCode = item.code;

  const updatedBins = bins.map((bin) => {

      if (remaining === 0 || !bin.active || bin.item !== itemCode || bin.qty <= 0 )
        return bin;

      const takeQtyFromThisBin = Math.min(bin.qty, remaining);
      remaining -= takeQtyFromThisBin;

      appendTranRecordForIssue( tranRecords, setTranRecords, nextTranId, setNextTranId, itemCode, bin.binCode, empCode, takeQtyFromThisBin);
      if (item.itemType === ItemType.DURABLE ){
        appendIssueRecord (issueRecords, setIssueRecords, itemCode, bin.binCode, empCode, takeQtyFromThisBin );
      }
      return {...bin, qty: bin.qty - takeQtyFromThisBin}
  });

  setBins(updatedBins);
}