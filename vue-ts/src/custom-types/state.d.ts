// define the structure of the state here
interface IApplicationState {
  accounts: IAccount[];
}

interface IAccount {
  id: number;
  selected: boolean;
}