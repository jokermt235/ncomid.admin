<template>
  <div class="app">
    <TopMenu></TopMenu>
    <LeftPanel></LeftPanel>
  </div>
</template>
<script>
import styles from '@/assets/css/bootstrap.min.css';
import TopMenu from '@/components/TopMenu.vue';
import LeftPanel from '@/components/LeftPanel.vue';
export default {
  components: {
    TopMenu,
    LeftPanel
  }
}
</script>
