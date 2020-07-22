<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label>Текст</label>
            <input type="file" class="form-control-file" id="desc" multiple=true>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import CenterCharter from '@/components/CenterCharter.vue';
export default{
    data(){
        return {
            dComponent : "div" 
        }
    },
    components : {
        History
    },
    mounted(){
        this.ins = new Instance();
        this.ins.all("centerCharter", {}, (response)=>{
            this.item = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{
        save(){
            let desc = document.getElementById("desc").files;
            let formData = new FormData();
            for(var i = 0; i < desc.length; i++ )
                formData.append("files", desc[i]);
            this.ins.save("centerCharter",formData,(response)=>{
                //this.dComponent = History;
                console.log(response);
            },(error)=>{
                console.log(error);
            });
        }
    }
}
</script>
