<template>
  <div id="app">
    <div :is="componentToLoad">{{componentToLoad}}</div>
  </div>
</template>
<script>
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import Instance from '@/lib/Instance.js';
import '@/assets/css/bootstrap.min.css';
import HomePage from '@/components/HomePage.vue';
import LoginForm from '@/components/LoginForm.vue';
export default {
    data(){
        return {
            componentToLoad : null
        }
    },
    components: {
        HomePage,
        LoginForm
    },
    mounted(){
        if(localStorage.token){ 
            let ins = new Instance();
            ins.verifyToken((response)=>{
                if(response){
                    this.componentToLoad = HomePage;
                }
            }, (error)=>{
                console.log(error);
                this.componentToLoad = LoginForm;
            });
        }else{
            this.componentToLoad = LoginForm;
        }
    }
}
</script>
