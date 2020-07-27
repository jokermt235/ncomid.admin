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
                <label for="image">Изображение новости</label>
                <input type="file" class="form-control-file" @change="fileChange" id="image">
                <input type="hidden" v-model="image"/>
            </div>
            <div class="form-group" id="photoPreview" v-html="photoPreview"></div>
            <form @submit.prevent="onSubmit" v-if="dComponentRU">
                <div class="form-group">
                    <label for="title">Заголовок RU</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок новостей" name="title" v-model="titleRU">
                </div>
                <div class="form-group" style="height:31em">
                    <label for="descRU">Описание RU</label>
                    <quill-editor ref="myQuillEditor" class="editor" v-model="descRU" style="height:24em"/>
                </div>
            </form>
            <form @submit.prevent="onSubmit" v-if="dComponentKG">
                <div class="form-group">
                    <label for="title">Заголовок KG</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок новостей" name="titleKG" v-model="titleKG">
                </div>
                <div class="form-group" style="height:31em">
                    <label for="descKG">Описание KG</label>
                    <quill-editor ref="myQuillEditor" class="editor" v-model="descKG" style="height:24em"/>
                </div>
            </form>
            <form @submit.prevent="onSubmit" v-if="dComponentEN">
                <div class="form-group">
                    <label for="title">Заголовок EN</label>
                    <input type="input" class="form-control" id="title" placeholder="Заголовок новостей" name="titleEN" v-model="titleEN">
                </div>
                <div class="form-group" style="height:31em">
                    <label for="desc">Описание EN</label>
                    <quill-editor ref="myQuillEditor" class="editor" v-model="descEN" style="height:24em"/>
                </div>
            </form>
            <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import News from '@/components/News.vue';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default{
    data(){
        return {
            dComponentRU  : false,
            dComponentKG  : false,
            dComponentEN  : false,
            photoPreview:null,
            id : null,
            titleRU : "",
            descRU  : "",
            titleKG : "",
            descKG  : "",
            titleEN : "",
            descEN  : "",
            image : "",
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "news/"
        }
    },
    components : {
        quillEditor
    },
    mounted(){
        this.dComponentRU = true;
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            let ins = new Instance();
            ins.save("news/upload",formData,(response)=>{
                let html = `<img src="${this.image_url}${response.data}" width="128px" height="128px"/>`;
                this.photoPreview = html;
                this.image = response.data;
            },(error)=>{
                console.log(error);
            });
        },
        save(){
            let ins = new Instance();
            let data = { 
                titleRU : this.titleRU,
                titleKG : this.titleKG,
                titleEN : this.titleEN,
                descRU  : this.descRU,
                descKG  : this.descKG,
                descEN  : this.descEN,
                image   : this.image
            };
            if(this.id){
                ins.update("news/" + this.id,
                    data,
                    (response)=>{
                    if(response){
                        this.dComponent = News;
                    }
                },(error)=>{
                    console.log(error);
                });
            }else{
                ins.save("news",
                    data,
                    (response)=>{
                    if(response){
                        this.dComponent = News;
                    }
                },(error)=>{
                    console.log(error);
                });
            }
        },
        showRU(){
            this.dComponentRU = true;
            this.dComponentKG = false;
            this.dComponentEN = false;
        },
        showKG(){
            this.dComponentRU = false;
            this.dComponentKG = true;
            this.dComponentEN = false;
        },
        showEN(){
            this.dComponentRU = false;
            this.dComponentKG = false;
            this.dComponentEN = true;
        }
    }
}
</script>
<style scoped>
    .quill-editor{
      overflow: hidden;
    }
</scoped>
