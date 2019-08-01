import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const storeOptions: StoreOptions<IApplicationState> = {
  state: {
    accounts: [],
  },
  mutations: {
    setAccounts: (state, data: IAccount[]) => {
      state.accounts = data;
    },
    selectAccount: (state, id: number) => {
      const accounts = [...state.accounts];
      accounts.forEach((a) => a.selected = a.id === id);

      state.accounts = accounts;
    },
  },
  actions: {

  },
};

export default new Vuex.Store(storeOptions);
