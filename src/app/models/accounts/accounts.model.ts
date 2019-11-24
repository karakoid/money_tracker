import { AccountModel } from './account.model';

export interface AccountsModel {
  category: string;
  total: number;
  currency: string;
  accounts: Array<AccountModel>;
}
