<template>
  <div>
    <TopMenu></TopMenu>
    <div class="row flex-xl-nowrap">
        <div class="col-md-3 col-xl-2 bd-sidebar">
            <LeftPanel></LeftPanel>
        </div>
        <div class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
            <MiddleContent></MiddleContent>
        </div>
    </div>
  </div>
</template>
<script>
import styles from '@/assets/css/bootstrap.min.css';
import TopMenu from '@/components/TopMenu.vue';
import LeftPanel from '@/components/LeftPanel.vue';
import MiddleContent from '@/components/MiddleContent.vue';
export default {
  components: {
    TopMenu,
    LeftPanel,
    MiddleContent
  }
}
</script>
