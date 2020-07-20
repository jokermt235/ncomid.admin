<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label for="title">Заголовок RU</label>
            <input type="input" class="form-control"
            placeholder="Заголовок объявления" name="titleRU" v-model="titleRU">
        </div>
        <div class="form-group">
            <label for="title">Заголовок KG</label>
            <input type="input" class="form-control"
             placeholder="Заголовок объявления" name="titleKG" v-model="titleKG">
        </div>
        <div class="form-group">
            <label for="title">Заголовок EN</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок объявления" name="titleEN" v-model="titleEN">
        </div>
        <div class="form-group">
            <label for="desc">Ссылка</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="http://ссылка,https://ссылка"
            name="desc" v-model="link"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import LinksAll from '@/components/LinksAll.vue';
export default{
    data(){
        return {
            dComponent : "div",
            titleRU : "",
            titleKG : "",
            titleEN : "",
            link  : ""
        }
    },
    mounted(){
    },
    methods:{
        save(){
            let ins = new Instance();
            ins.save("links",{titleRU: this.titleRU, titleKG: this.titleKG, titleEN : this.titleEN, link:this.link},(response)=>{
                if(response){
                    this.dComponent = LinksAll;
                }
            },(error)=>{
                console.log(error);
            });
        },
        onSubmit(){
        }
    }
}
</script>
