import React from "react";
import { IssueModel } from "../../models/Transaction/IssueModel";
import { TransactionModel } from "../../models/Transaction/TransactionModel";
import { TransactionType } from "../../types/transactionTypes";


export const appendIssueRecord = (
  issueRecords: IssueModel[],
  setIssueRecords: React.Dispatch<React.SetStateAction<IssueModel[]>>,
  itemCode: string,
  binCode: string,
  empCode: string,
  qty: number,
) => {
  if ( !itemCode || !binCode || !empCode || !qty 
      || itemCode === ""|| binCode === "" || empCode === "" || qty < 1) {
    console.log("recordIssueRecord(): valid input value missing");
    return;
  }  

  const newRec = new IssueModel(itemCode, binCode, empCode, qty);
  
  setIssueRecords( prev => [...prev, newRec]);
}

export const appendTranRecordForIssue = (
  tranRecords: TransactionModel[],
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
  itemCode: string,
  binCode: string,
  empCode: string,
  qty: number,
) => {

  if ( !itemCode || !binCode || !empCode || !qty 
      || itemCode === ""|| binCode === "" || empCode === "" || qty < 1) {
    console.log("appendIssueTranRecord(): valid input value missing");
    return;
  }  

  const newRec = new TransactionModel(
    TransactionType.ISSUE,
    itemCode,
    binCode,
    empCode,
    qty,
  );  
    
  setTranRecords( prev => [...prev, newRec]);    
}
