<template>
  <div>
    <div class="content">
      <p>The items on this side of the page are rendered with Vue.</p>
      <p>{{ fullName }}</p>
    </div>
    <form class="form">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="First Name" v-model="firstName">
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="astst Name" v-model="lastName">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-danger" @click="sayHello">Alert</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  public firstName: string = '';
  public lastName: string = '';

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public sayHello(event: MouseEvent) {
    event.preventDefault();

    alert(`Hello, ${this.fullName}`);
  }
}
</script>

<style lang="scss" scoped>

</style>

