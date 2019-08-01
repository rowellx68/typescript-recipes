<template>
  <div>
    <div class="form">
      <personal-details v-model="personalDetails"></personal-details>

      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="validate">Validate</button>
        </div>
      </div>

      <div>
        <div >
          <account-card v-for="account of $store.state.accounts" :key="account.id" :account="account" @selected="itemSelected"></account-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import PersonalDetails from '@/components/PersonalDetails.vue';
import AccountCard from '@/components/AccountCard.vue';

@Component({
  name: 'home',
  components: {
    'personal-details': PersonalDetails,
    'account-card': AccountCard,
  },
})
export default class Home extends Vue {
  public personalDetails: IPersonalDetails = { title: '', firstName: '', lastName: '' };

  public mounted() {
    setTimeout(() => {
      this.$store.commit('setAccounts', [ { id: 0, selected: false }, { id: 1, selected: true } ]);
    }, 5000);
  }

  public validate() {
    this.$emit('validate-form');
  }

  public itemSelected(id: number) {
    this.$store.commit('selectAccount', id);
  }
}
</script>

<style lang="scss" scoped>
.box-selected {
  background-color: azure;
}
</style>

