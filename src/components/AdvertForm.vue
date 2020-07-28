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
        <form :is="dComponent" v-if="dComponentRU">
            <div class="form-group">
                <label for="title">Заголовок RU</label>
                <input type="input" class="form-control"
                id="title" placeholder="Заголовок"  v-model="titleRU">
            </div>
            <div class="form-group">
                <label for="desc">Описание RU</label>
                <textarea class="form-control" rows="3" placeholder="Описание" v-model="descRU"></textarea>
            </div>
        </form>
        <form :is="dComponent" v-if="dComponentKG">
            <div class="form-group">
                <label for="title">Заголовок KG</label>
                <input type="input" class="form-control"
                id="title" placeholder="Заголовок"  v-model="titleKG">
            </div>
            <div class="form-group">
                <label for="desc">Описание KG</label>
                <textarea class="form-control"  rows="3" placeholder="Описание" v-model="descKG"></textarea>
            </div>
        </form>
        <form :is="dComponent" v-if="dComponentEN">
            <div class="form-group">
                <label for="title">Заголовок EN</label>
                <input type="input" class="form-control"
                id="title" placeholder="Заголовок"  v-model="titleEN">
            </div>
            <div class="form-group">
                <label for="desc">Описание EN</label>
                <textarea class="form-control"  rows="3" placeholder="Описание" v-model="descEN"></textarea>
            </div>
        </form>   
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import AdvertsAll from '@/components/AdvertsAll';
export default{
    data(){
        return {
            dComponent : "div",
            dComponentRU : false,
            dComponentKG : false,
            dComponentEN : false,
            titleRU : "",
            descRU  : "",
            titleKG : "",
            descKG  : "",
            titleEN : "",
            descEN  : ""
        }
    },
    mounted(){
        this.dComponentRU = true;
    },
    methods:{
        save(){
            let ins = new Instance();
            ins.save("adverts",
                {
                    titleRU: this.titleRU, 
                    descRU:this.descRU,
                    titleKG: this.titleKG, 
                    descKG:this.descKG,
                    titleEN: this.titleEN, 
                    descEN:this.descEN
                },
            (response)=>{
                if(response){
                    this.dComponent = AdvertsAll;
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
