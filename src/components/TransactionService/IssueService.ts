import React from "react";
import { IssueModel } from "../../models/Transaction/IssueModel";
import { TransactionModel } from "../../models/Transaction/TransactionModel";
// import { IssueRecordsState, TranRecordsState, TransactionType } from "../../types/transactionTypes";
import { IssueRecordsState,  TransactionType } from "../../types/transactionTypes";


export const appendIssueRecord = (
  issueRecords: IssueRecordsState,
  setIssueRecords: React.Dispatch<React.SetStateAction<IssueRecordsState>>,
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
  
  setIssueRecords( (prev) => {
    const newRec = new IssueModel(prev.nextIssueId, itemCode, binCode, empCode, qty);
    
    return {nextIssueId: prev.nextIssueId + 1, records: [...prev.records, newRec]} 
  });
}

export const appendTranRecordForIssue = (
  tranRecords: TransactionModel[],
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
  nextTranId: number,
  setNextTranId: React.Dispatch<React.SetStateAction<number>>,
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
      nextTranId,
      TransactionType.ISSUE,
      itemCode,
      binCode,
      empCode,
      qty,
  );  
console.log("tranRecords, ", tranRecords);
  setTranRecords( (prev) => [...prev, newRec] );    
  setNextTranId(nextTranId + 1);
    
}
