<template>
    <form @submit.prevent="onSubmit">
        <div class="alert alert-success" role="alert" v-if="success">
            Успешно сохранино , проверьте список.
        </div>
        <div class="alert alert-danger" role="alert" v-if="danger">
            Возникла ошибка {{error}}
        </div>
        <div class="form-group">
            <label for="title">Заголовок RU</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок новостей Русский" name="title" v-model="titleRU">
        </div>
        <div class="form-group">
            <label for="desc">Описание RU</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание Русский"
            name="desc" v-model="descRU"></textarea>
        </div>
        <div class="form-group">
            <label for="title">Заголовок KG</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок новостей Кыргызский" name="title" v-model="titleKG">
        </div>
        <div class="form-group">
            <label for="desc">Описание KG</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание Кыргызский"
            name="desc" v-model="descKG"></textarea>
        </div>
        <div class="form-group">
            <label for="title">Заголовок EN</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок новостей English" name="title" v-model="titleEN">
        </div>
        <div class="form-group">
            <label for="desc">Описание EN</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание English"
            name="desc" v-model="descEN"></textarea>
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
export default{
    data(){
        return {
            error : "",
            success : false,
            danger : false,
            dComponent : "div",
            photoPreview:null,
            titleRU : "",
            descRU  : "",
            titleKG : "",
            descKG  : "",
            titleEN : "",
            descEN  : "",
            image : "",
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "sections/"
        }
    },
    mounted(){
        this.ins = new Instance();
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            this.ins.save("sections/upload",formData,(response)=>{
                console.log(response.data);
                let html = `<img src="${this.image_url}${response.data}"/>`;
                this.photoPreview = html;
                this.image = response.data;
            },(error)=>{
                this.error = error;
                this.danger = true;
                this.success = false;
            });
        },
        save(){
            this.ins.save("sections",
                {
                    titleRU: this.titleRU, 
                    descRU:this.descRU,
                    titleKG: this.titleKG, 
                    descKG:this.descKG,
                    titleEN: this.titleEN, 
                    descEN:this.descEN,
                    image: this.image
                },
            (response)=>{
                if(response){
                    this.danger = false;
                    this.success = true;
                }
            },(error)=>{
                this.danger = true;
                this.success = false;
                this.error = error;
            });
        },
        onSubmit(){
        }
    }
}
</script>
