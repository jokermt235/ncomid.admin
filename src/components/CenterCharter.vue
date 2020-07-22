<template>
    <div :is="dComponent">
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import CenterCharterForm from '@/components/CenterCharterForm.vue';
export default{
    data(){
        return {
            dComponent : "div",
            item : {
                descRU : "",
                descKG : "",
                descEN : ""
            }
        }
    },
    mounted(){
        this.ins = new Instance();
        this.ins.all("centerCharter", {}, (response)=>{
            this.item = response.data;
            console.log(response.data);
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{
        remove(){
            this.ins.delete("centerCharter", {id:null}, response=>{
                if(response.data){
                    this.item = {};
                }
                console.log(response);
            },
            error=>{
                console.log(error);
            });
        },
        loadForm(){
            this.dComponent = CenterCharterForm;
        }
    }
}
</script>
