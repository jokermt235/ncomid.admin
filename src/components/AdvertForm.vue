<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label for="title">Заголовок</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок объявления" name="title" v-model="title">
        </div>
        <div class="form-group">
            <label for="desc">Описание</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание"
            name="desc" v-model="desc"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import Adverts from '@/components/Adverts.vue';
export default{
    data(){
        return {
            dComponent : "div",
            title : "",
            desc  : "",
        }
    },
    mounted(){
    },
    methods:{
        save(){
            let ins = new Instance();
            ins.save("adverts",{title: this.title, desc:this.desc},(response)=>{
                if(response){
                    this.dComponent = Adverts;
                }
            },(error)=>{
                console.log(error);
            });
        }
    }
}
</script>
