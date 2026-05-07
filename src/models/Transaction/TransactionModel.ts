class TransactionModel {
  // private static nextId = 1;
  transId: number;
  transType: TransactionType;
  itemCode: string;
  binCode: string;
  empCode: string;
  qty: number;
  transDate: Date;
  notes?: string;

  constructor(
    transType: TransactionType,
    itemCode: string,
    binCode: string,
    empCode: string,
    qty: number,
    notes?: string,
  ){
    // this.transId = TransactionModel.nextId++;
    this.transId = Date.now(); // Timestamp for uniqueness
    this.transType = transType;
    this.itemCode = itemCode;
    this.binCode = binCode;
    this.empCode = empCode;
    this.qty = qty; 
    this.transDate = new Date();
    this.notes = notes;
  }
};