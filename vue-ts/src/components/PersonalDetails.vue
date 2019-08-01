<template>
  <div>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <div :class="errors.first('title') ? 'is-danger select' : 'select'">
          <select v-model="personalDetails.title" v-validate="'required'" name="title" @change="handleInput">
            <option disabled value="">Select title</option>
            <option v-for="(title, index) of titleOptions" :value="title" :key="index">{{ title }}</option>
          </select>
        </div>
      </div>
      <p class="help is-danger" v-if="errors.first('title')">{{ errors.first('title') }}</p>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="personalDetails.firstName" name="first name" v-validate="'required'" @change="handleInput">
      </div>
      <p class="help is-danger" v-if="errors.first('first name')">{{ errors.first('first name') }}</p>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="personalDetails.lastName" name="last name" v-validate="'required'" @change="handleInput">
      </div>
      <p class="help is-danger" v-if="errors.first('last name')">{{ errors.first('last name') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';

@Component({
  name: 'personal-details',
})
export default class PersonalDetails extends Vue {
  @Model('input', { type: Object }) public personalDetails!: IPersonalDetails;

  public get titleOptions(): string[] {
    return [
      'Mr',
      'Mrs',
      'Miss',
      'Lord',
      'Lady',
      'Dr',
    ];
  }

  public mounted() {
    this.$parent.$on('validate-form', async () => {
      await this.$validator.validate();
    });
  }

  public async handleInput() {
    this.$emit('input', this.personalDetails);
  }
}
</script>
