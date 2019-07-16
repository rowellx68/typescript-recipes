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
          <input v-validate="'required'" name="First Name" type="text" class="input" placeholder="First Name" v-model="firstName">
        </div>
        <p class="help is-danger" v-if="errors.first('First Name')">{{ errors.first('First Name') }}</p>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input v-validate="'required'" name="Last Name" type="text" class="input" placeholder="Last Name" v-model="lastName">
        </div>
        <p class="help is-danger" v-if="errors.first('Last Name')">{{ errors.first('Last Name') }}</p>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="submit">Submit Form</button>
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

  public async submit(event: MouseEvent) {
    event.preventDefault();

    const valid = await this.$validator.validate();

    console.log(valid);
  }
}
</script>

<style lang="scss" scoped>

</style>

