<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label for="title">Фото текст</label>
            <input type="input" class="form-control"
            id="title" placeholder="Шапка"
            name="title" v-model="title">
        </div>
        <div class="form-group" id="photoPreview" v-html="photoPreview">
        </div>
        <div class="form-group">
            <label for="image">Изображение</label>
            <input type="file" class="form-control-file" @change="fileChange" id="image">
            <input type="hidden" v-model="image"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import Photos from '@/components/Photos';
export default{
    data(){
        return {
            dComponent : "div",
            photoPreview:null,
            title : "",
            image : "",
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "photos/"
        }
    },
    mounted(){
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            let ins = new Instance();
            ins.save("photos/upload",formData,(response)=>{
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
            ins.save("photos",{title: this.title,image: this.image},(response)=>{
                if(response){
                    this.dComponent = Photos;
                }
            },(error)=>{
                console.log(error);
            });
        }
    }
}
</script>
