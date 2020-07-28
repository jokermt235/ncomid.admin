<template>
    <div>
        <ul class="nav  nav-tabs mt-3">
            <li class="nav-item">
                <a class="nav-link" href="javascript:" @click="showRU">
                &#9779; RU
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:" @click="showKG">
                    &#9779; KG
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:" @click="showEN">
                    &#9779; EN
                </a>
            </li>
        </ul>
        <div class="mt-3">
            <div class="form-group">
                <label for="image">Изображение</label>
                <input type="file" class="form-control-file" @change="fileChange" id="image">
                <input type="hidden" v-model="image"/>
            </div>
            <div class="form-group" id="photoPreview" v-html="photoPreview"></div>
            <form @submit.prevent="onSubmit" v-if="dComponentRU">
                <div class="form-group">
                    <label for="title">Заголовок RU</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок" name="title" v-model="titleRU">
                </div>
                <div class="form-group" style="height:31em">
                    <label for="descRU">Описание RU</label>
                    <textarea  v-model="descKG" class="form-control"></textarea>
                </div>
            </form>
            <form @submit.prevent="onSubmit" v-if="dComponentKG">
                <div class="form-group">
                    <label for="title">Заголовок KG</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок" name="title" v-model="titleKG">
                </div>
                <div class="form-group">
                    <label for="descRU">Описание KG</label>
                    <textarea  v-model="descKG" class="form-control"></textarea>
                </div>
            </form>
            <form @submit.prevent="onSubmit" v-if="dComponentEN">
                <div class="form-group">
                    <label for="title">Заголовок EN</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок" name="title" v-model="titleEN">
                </div>
                <div class="form-group">
                    <label for="descRU">Описание EN</label>
                    <textarea  v-model="descEN" class="form-control"></textarea>
                </div>
            </form> 
            <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import Banners from '@/components/Banners';
export default{
    data(){
        return {
            dComponentRU : false,
            dComponentKG : false,
            dComponentEN : false,
            dComponent : "div",
            photoPreview:null,
            titleRU : "",
            descRU  : "",
            titleKG : "",
            descKG  : "",
            titleEN : "",
            descEN  : "",
            image : "",
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "banners/"
        }
    },
    components : {
    },
    mounted(){
        this.dComponentRU = true; 
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            console.log(formData);
            let ins = new Instance();
            ins.save("banners/upload",formData,(response)=>{
                console.log(response.data);
                let html = `<img src="${this.image_url}${response.data}" style="width:250px;height:auto"/>`;
                this.photoPreview = html;
                this.image = response.data;
            },(error)=>{
                console.log(error);
            });
        },
        save(){
            let ins = new Instance();
            ins.save("banners",
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
                    this.dComponent = Banners;
                }
            },(error)=>{
                console.log(error);
            });
        },
        showRU(){
            this.dComponentRU = true;
            this.dComponentKG = false;
            this.dComponentEN = false;
        },
        showKG(){
            this.dComponentKG = true;
            this.dComponentRU = false;
            this.dComponentEN = false;
        },
        showEN(){
            this.dComponentKG = false;
            this.dComponentRU = false;
            this.dComponentEN = true;
        }
    }
}
</script>
