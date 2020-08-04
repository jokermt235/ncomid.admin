<template>
    <div>
        <TabsLang 
            @showRU="loadRU()"
            @showKG="loadKG()"
            @showEN="loadEN()"></TabsLang>
        <div v-if="switchRU">
            <div class="card mb-3">
                <div class="card-body">
                    <a href="javascript:">Описание RU</a>
                    <p class="card-text" v-html="item.descRU"></p> 
                </div>
            </div>
        </div>
        <div v-if="switchKG">
            <div class="card mb-3">
                <div class="card-body">
                    <a href="javascript:">Описание KG</a>
                    <p class="card-text" v-html="item.descKG"></p> 
                </div>
            </div>
        </div>
        <div v-if="switchEN">
            <div class="card mb-3">
                <div class="card-body">
                    <a href="javascript:">Описание EN</a>
                    <p class="card-text" v-html="item.descEN"></p> 
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import TabsLang from '@/components/TabsLang';
export default{
    data(){
        return {
            switchRU : false,
            switchKG : false,
            switchEN : false,
            item : {
                descRU : "",
                descKG : "",
                descEN : ""
            }
        }
    },
    components : {
        TabsLang
    },
    mounted(){
        this.ins = new Instance();
        this.loadRU();
    },
    methods:{
        loadRU(){
            this.switchRU =  true;
            this.switchKG = false;
            this.switchEN =   false;
            this.ins.setHeader("lang", "RU");
            this.ins.all("history", {}, (response)=>{
                this.item.descRU = response.data;
            }, (error)=>{
                console.log(error);
            }); 
        },
        loadKG(){
            this.switchRU=false;
            this.switchKG = true;
            this.switchEN=false;
            this.ins.setHeader("lang", "KG");
            this.ins.all("history", {}, (response)=>{
                this.item.descKG = response.data;
            }, (error)=>{
                console.log(error);
            });
        },
        loadEN(){
            this.switchRU = false;
            this.switchKG = false;
            this.switchEN = true;
            this.ins.setHeader("lang", "EN");
            this.ins.all("history", {}, (response)=>{
                this.item.descEN = response.data;
            }, (error)=>{
                console.log(error);
            });
        }   
    }
}
</script>
