import { TransactionModel } from './transaction.model';

export interface DayTransactionsModel {
  date: string;
  totalDayIncome: number;
  totalDayExpenses: number;
  transactions: Array<TransactionModel>;
}
