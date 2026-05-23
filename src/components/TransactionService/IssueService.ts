import React from "react";
import { IssueModel } from "../../models/Transaction/IssueModel";
import { TransactionModel } from "../../models/Transaction/TransactionModel";
import { IssueRecordsState, TranRecordsState, TransactionType } from "../../types/transactionTypes";


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
  tranRecords: TranRecordsState,
  setTranRecords: React.Dispatch<React.SetStateAction<TranRecordsState>>,
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

  setTranRecords( (prev) => {
    
    const newRec = new TransactionModel(
      prev.nextTranId,
      TransactionType.ISSUE,
      itemCode,
      binCode,
      empCode,
      qty,
    );  

    return {nextTranId: prev.nextTranId + 1, records: [...prev.records, newRec]};    
  });
    
}
