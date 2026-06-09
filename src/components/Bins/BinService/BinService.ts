import React from "react";
import { BinModel } from "../../../models/BinsModel";
import { ItemModel } from "../../../models/ItemModel";
import { TransactionModel } from "../../../models/Transaction/TransactionModel";
import { getItemType } from "../../Items/ItemService/ItemService";
import { ItemType } from "../../../types/ItemTypes";
import { IssueModel } from "../../../models/Transaction/IssueModel";
// import { IssueRecordsState, TranRecordsState } from "../../../types/transactionTypes";
import { CartItem, IssueRecordsState, NextTranIdType, TransactionType, } from "../../../types/transactionTypes";

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
  cartItems: CartItem[],
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  empCode: string,
  tranRecords: TransactionModel[],
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
  nextTranId: NextTranIdType,
  setNextTranId:  React.Dispatch<React.SetStateAction<NextTranIdType>>,
  issueRecords: IssueRecordsState,
  setIssueRecords: React.Dispatch<React.SetStateAction<IssueRecordsState>>,
) => {

  const newTranRecords: TransactionModel[] = [];
  const newIssueRecords: IssueModel[] = [];
  let tranCounter = nextTranId.id;
  let issueCounter = issueRecords.nextIssueId;

  cartItems.forEach((cartItem) => {
    const item: ItemModel = cartItem.item;
    const issueQty: number = cartItem.qty;
    if (issueQty <= 0) {
      console.log("issueItemQty() got non-positive issueQty");
      return;;
    }

    let remaining = issueQty;
    const itemCode = item.code;

    const updatedBins = bins.map((bin) => {

        if (remaining === 0 || !bin.active || bin.item !== itemCode || bin.qty <= 0 )
          return bin;

        const takeQtyFromThisBin = Math.min(bin.qty, remaining);
        remaining -= takeQtyFromThisBin;

        // appendTranRecordForIssue( tranRecords, setTranRecords, nextTranId, setNextTranId, itemCode, bin.binCode, empCode, takeQtyFromThisBin);
        const newTran = new TransactionModel(
          tranCounter,
          TransactionType.ISSUE,
          itemCode, 
          bin.binCode,
          empCode,takeQtyFromThisBin,
        );
        newTranRecords.push(newTran);
        tranCounter++;

        if (item.itemType === ItemType.DURABLE ){
          const newIssue = new IssueModel( issueCounter, itemCode, bin.binCode, empCode, takeQtyFromThisBin);
          newIssueRecords.push(newIssue);
          issueCounter++;
        }  
        return {...bin, qty: bin.qty - takeQtyFromThisBin}
    });

    setBins(updatedBins);
  }); //cartItems

  setTranRecords( (prev) => [...prev, ...newTranRecords] );  
      
  setNextTranId({id: tranCounter});

  setIssueRecords((prev) => ({
    nextIssueId: issueCounter,
    records: [...prev.records, ...newIssueRecords],
  }));
  
}

export const stockItemQtyToBins = (
  selectedItem: ItemModel,
  selectedBin: BinModel,
  stockQty: number,
  bins: BinModel[],
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>,
  empCode: string,
  tranRecords: TransactionModel[],
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
  nextTranId: NextTranIdType,
  setNextTranId:  React.Dispatch<React.SetStateAction<NextTranIdType>>,
) => {

  if (!selectedItem) {
    console.log("selectedItem is missing");
    return;
  }
  if (!selectedBin) {
    console.log("selectedBin is missing");
    return;
  }
  if (stockQty <= 0) {
    console.log("stockQty must be positive number");
    return;
  }

  let theTranNo = nextTranId.id;

  const itemCode = selectedItem.code;
  const binCode = selectedBin.binCode;

  const updatedBins = bins.map((bin) => {
    if (bin.binCode === binCode) {
      return {...bin, qty: bin.qty + stockQty}
    } else {
      return bin;
    }
  });

  setBins(updatedBins);

  const newTran = new TransactionModel(
      theTranNo,
      TransactionType.STOCK,
          itemCode, 
          binCode,
          empCode,
          stockQty,
  );
  
  
  theTranNo++;

  setTranRecords( (prev) => [...prev, newTran] );  
      
  setNextTranId({id: theTranNo});
}