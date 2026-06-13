import { ItemModel } from "../models/ItemModel";
import { IssueModel } from "../models/Transaction/IssueModel";
import { TransactionModel } from "../models/Transaction/TransactionModel";

  export enum TransactionType {
    ISSUE = "ISSUE",
    RETURN = "RETURN",
    STOCK = "STOCK",
    PHYSICAL_COUNT = "PHYSICAL_COUNT",
    SCRAP = "SCRAP",
    REGRIND = "SCRAP",
  }

    export interface NextTranIdType {
      id: number;
    }

    export interface NextIssueTranIdType {
      id: number;
    }

    export interface CartItem {
      item: ItemModel;
      qty: number;
    }