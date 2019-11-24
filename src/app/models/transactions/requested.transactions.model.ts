import { DayTransactionsModel } from "./day.transactions.model";

export interface RequestedTransactionsModel {
  data: Array<DayTransactionsModel>;
}
