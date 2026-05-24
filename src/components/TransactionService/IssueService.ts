import React from "react";
import { IssueModel } from "../../models/Transaction/IssueModel";
import { TransactionModel } from "../../models/Transaction/TransactionModel";
// import { IssueRecordsState, TranRecordsState, TransactionType } from "../../types/transactionTypes";
import { IssueRecordsState,  NextTranIdType,  TransactionType } from "../../types/transactionTypes";


// export const appendIssueRecord = (
//   issueRecords: IssueRecordsState,
//   setIssueRecords: React.Dispatch<React.SetStateAction<IssueRecordsState>>,
//   itemCode: string,
//   binCode: string,
//   empCode: string,
//   qty: number,
// ) => {
//   if ( !itemCode || !binCode || !empCode || !qty 
//       || itemCode === ""|| binCode === "" || empCode === "" || qty < 1) {
//     console.log("recordIssueRecord(): valid input value missing");
//     return;
//   }  
  
//   setIssueRecords( (prev) => {
//     const newRec = new IssueModel(prev.nextIssueId, itemCode, binCode, empCode, qty);
    
//     return {nextIssueId: prev.nextIssueId + 1, records: [...prev.records, newRec]} 
//   });
// }

// export const appendTranRecordForIssue = (
//   tranRecords: TransactionModel[],
//   setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>,
//   // nextTranId: NextTranIdType,
//   // setNextTranId: React.Dispatch<React.SetStateAction<NextTranIdType>>,
//   idCounter: number,
//   itemCode: string,
//   binCode: string,
//   empCode: string,
//   qty: number,
// ) => {

//   if ( !itemCode || !binCode || !empCode || !qty 
//       || itemCode === ""|| binCode === "" || empCode === "" || qty < 1) {
//     console.log("appendIssueTranRecord(): invalid input or value missing");
//     return;
//   }  

//   const newRec = new TransactionModel(
//       idCounter,
//       TransactionType.ISSUE,
//       itemCode,
//       binCode,
//       empCode,
//       qty,
//   );  
  
 
//   setTranRecords( (prev) => [...prev, newRec] );    
 
    
// }
