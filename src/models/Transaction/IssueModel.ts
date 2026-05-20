export class IssueModel {
  issueId: number;
  itemCode: string;
  binCode: string;
  empCode: string;
  qty: number;
  issueDate: Date;

  constructor(
    itemCode: string,
    binCode: string,
    empCode: string,
    qty: number,
  ) {
      this.issueId = Date.now();// Timestamp for uniqueness
      this.itemCode = itemCode;
      this.binCode = binCode;
      this.empCode= empCode;
      this.qty = qty;
      this.issueDate = new Date();
  };

};