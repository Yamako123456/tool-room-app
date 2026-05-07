class IssueModel {
  issueId: number;
  itemCode: string;
  binCode: string;
  empCode: string;
  qty: number;
  issueDate: Date;
  returned: boolean;
  returnTo?: ReturnToType;
  returnDate?: Date;

  constructor(
    itemCode: string,
    binCode: string,
    empCode: string,
    qty: number,
  ) {
      this.issueId = Date.now();
      this.itemCode = itemCode;
      this.binCode = binCode;
      this.empCode= empCode;
      this.qty = qty;
      this.issueDate = new Date();
      this.returned = false;
  };

  markReturn(returnTo: ReturnToType) {
    this.returned = true;
    this.returnDate = new Date();
    this.returnTo = returnTo;
  }
};