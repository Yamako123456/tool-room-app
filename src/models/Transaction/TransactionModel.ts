// import { TransactionType } from "../../types/global";

import { TransactionType } from "../../types/transactionTypes";

export class TransactionModel {
  tranId: number;
  tranType: TransactionType;
  itemCode: string;
  binCode: string;
  empCode: string;
  qty: number;
  tranDate: Date;
  returnTo?: ReturnToType;
  notes?: string;

  constructor(
    transType: TransactionType,
    itemCode: string,
    binCode: string,
    empCode: string,
    qty: number,
    returnTo?: ReturnToType,
    notes?: string,
  ){
    this.tranId = Date.now(); // Timestamp for uniqueness
    this.tranType = transType;
    this.itemCode = itemCode;
    this.binCode = binCode;
    this.empCode = empCode;
    this.qty = qty; 
    this.tranDate = new Date();
    this.returnTo = returnTo;
    this.notes = notes;
  }
};