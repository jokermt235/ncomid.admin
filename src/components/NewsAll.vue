<template>
    <div :is="dComponent">
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
        <div class="card mb-3" v-for="item in items" :key="item.id">
            <img class="card-img-bottom" v-if="item.image"
                :src="`${image_url}${item.image}`" style="width:256px;height:256px" />
            <div class="card-body" v-if="dComponentRU">
                <a href="javascript:">Заголовок ru</a>
                <p class="card-title">{{item.titleRU}}</p>
                <a href="javascript:">Описание RU</a>
                <p class="card-text" v-html="item.descRU"></p> 
            </div>
            <div class="card-body" v-if="dComponentKG">
                <a href="javascript:">Заголовок KG</a>
                <p class="card-title">{{item.titleKG}}</p>
                <a href="javascript:">Описание KG</a>
                <p class="card-text" v-html="item.descKG"></p> 
            </div>
            <div class="card-body" v-if="dComponentEN">
                <a href="javascript:">Заголовок EN</a>
                <p class="card-title">{{item.titleEN}}</p>
                <a href="javascript:">Описание EN</a>
                <p class="card-text" v-html="item.descEN"></p> 
            </div>
            <div class="card-body">
                <p class="card-text">
                    <small class="text-muted">
                        Обновлено
                        {{item.createdAt}}
                    </small>
                </p>
                <a href="javascript:" class="mr-3 text-danger" @click="remove(item.id, item.image)">
                    <svg class="bi bi-x-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>
                 Удалить</a>
                <a href="javascript:" @click="edit(item)" ><svg class="bi bi-pencil-square" width="1em" height="1em" 
                viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> Изменить</a>
            </div>
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import NewsForm from '@/components/NewsForm';
export default{
    data(){
        return {
            dComponent : "div",
            dComponentRU  : false,
            dComponentKG  : false,
            dComponentEN  : false,
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "news/",
            items : []
        }
    },
    mounted(){
        this.dComponentRU = true;
        this.dComponentKG = false;
        this.dComponentEN = false;
        this.ins = new Instance();
        this.ins.all("news", {}, (response)=>{
            this.items = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{
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
        },
        remove(id, image){
            this.ins.delete("news", {id,image}, response=>{
                if(response.data){
                    this.items =  this.items.filter(item=>{
                        if(item.id != id) return true;
                    });
                }
                console.log(response);
            },
            error=>{
                console.log(error);
            });
        },
        edit(item){
            console.log(item);
            NewsForm.data = ()=>{
                let image_url = process.env.VUE_APP_BASE_URL_IMAGE + "news/";
                return {
                    dComponentRU  : false,
                    dComponentKG  : false,
                    dComponentEN  : false,
                    photoPreview: `<img src="${image_url}${item.image}" width="128px" height="128px"/>`,
                    id : item.id,
                    titleRU : item.titleRU,
                    descRU  : item.descRU,
                    titleKG : item.titleKG,
                    descKG  : item.descKG,
                    titleEN : item.titleEN,
                    descEN  : item.descEN,
                    image : item.image,
                    image_url: process.env.VUE_APP_BASE_URL_IMAGE + "news/"
                }
            }
            this.dComponent = NewsForm;
            console.log(item);
        }
    }
}
</script>
