<template>
  <div>
    <main-nav></main-nav>
    <div class="container is-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MainNav from '@/components/MainNav.vue';

@Component({
  components: {
    'main-nav': MainNav,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import '~bulma';

html {
  overflow-y: auto;
}

</style>
