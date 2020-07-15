<template>
    <div :is="dComponent">
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import HistoryForm from '@/components/HistoryForm.vue';
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
        this.ins.all("history", {}, (response)=>{
            this.item = response.data;
            console.log(response.data);
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{
        remove(){
            this.ins.delete("history", {id:null}, response=>{
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
            this.dComponent = HistoryForm;
        }
    }
}
</script>
