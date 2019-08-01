<template>
  <div :class="styling" @click="select">
    {{ account.id }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AccountCard extends Vue {
  @Prop({ default: () => ({ id: -1, selected: false }) }) public account!: IAccount;

  public get styling(): string {
    if (!this.account || !this.account.selected) {
      return 'box';
    }

    return 'box box-selected';
  }

  public select() {
    this.$emit('selected', this.account.id);
  }
}
</script>
