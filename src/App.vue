<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import '@/assets/css/bootstrap.min.css'
import HomePage from '@/components/HomePage.vue';
export default {
  components: {
    HomePage
  }
}
</script>
