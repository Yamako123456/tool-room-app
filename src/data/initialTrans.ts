import { TransactionModel } from "../models/Transaction/TransactionModel";
import { TransactionType } from "../types/transactionTypes";

const getDateDaysAgo = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

export const initialTrans: TransactionModel[] = [
  {
      tranId: 555,
      tranType: TransactionType.ISSUE,
      itemCode: "CL-123",
      binCode: "C001",
      empCode: "5000",
      qty: 1,
      tranDate: getDateDaysAgo(6),
      returnTo: undefined,
      notes: "",
  },
    {
      tranId: 555,
      tranType: TransactionType.ISSUE,
      itemCode: "CL-123",
      binCode: "C001",
      empCode: "3001",
      qty: 2,
      tranDate: getDateDaysAgo(28),
      returnTo: undefined,
      notes: "",
  },
      {
      tranId: 555,
      tranType: TransactionType.ISSUE,
      itemCode: "CL-123",
      binCode: "C001",
      empCode: "4000",
      qty: 5,
      tranDate: getDateDaysAgo(89),
      returnTo: undefined,
      notes: "",
  },
        {
      tranId: 555,
      tranType: TransactionType.ISSUE,
      itemCode: "CL-123",
      binCode: "C001",
      empCode: "2000",
      qty: 3,
      tranDate: getDateDaysAgo(480),
      returnTo: undefined,
      notes: "",
  },
];
