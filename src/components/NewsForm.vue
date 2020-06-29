<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label for="title">Заголовок</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок новостей" name="title" v-model="title">
        </div>
        <div class="form-group">
            <label for="desc">Описание</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание"
            name="desc" v-model="desc"></textarea>
        </div>
        <div class="form-group" id="photoPreview" v-html="photoPreview">
        </div>
        <div class="form-group">
            <label for="image">Изображение новости</label>
            <input type="file" class="form-control-file" @change="fileChange" id="image">
            <input type="hidden" v-model="image"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import News from '@/components/News.vue';
export default{
    data(){
        return {
            dComponent : "div",
            photoPreview:null,
            title : "",
            desc  : "",
            image : "",
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "news/"
        }
    },
    mounted(){
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            console.log(formData);
            let ins = new Instance();
            ins.save("news/upload",formData,(response)=>{
                console.log(response.data);
                let html = `<img src="${this.image_url}${response.data}"/>`;
                this.photoPreview = html;
                this.image = response.data;
            },(error)=>{
                console.log(error);
            });
        },
        save(){
            let ins = new Instance();
            ins.save("news",{title: this.title, desc:this.desc,image: this.image},(response)=>{
                if(response){
                    this.dComponent = News;
                }
            },(error)=>{
                console.log(error);
            });
        }
    }
}
</script>
