<template>
    <div>
        <div class="alert alert-success" role="alert" v-if="success">
            {{successMessage}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="danger">
            {{dangerMessage}}
        </div>
        <TabsLang 
                @showRU="switchRU=true;switchKG=false;switchEN=false"
                @showKG="switchKG=true;switchRU=false;switchEN=false"
                @showEN="switchEN=true;switchRU=false;switchKG=false"></TabsLang>
        <div v-if="switchRU">
            <div class="form-group" style="height:32em">
                <label>Описание RU</label>
                <quill-editor class="editor" v-model="descRU" style="height:24em"/>
            </div>
        </div>
        <div v-if="switchKG">
            <div class="form-group" style="height:32em">
                <label>Опимание KG</label>
                 <quill-editor class="editor" v-model="descKG" style="height:24em"/>   
            </div>
        </div>
        <div v-if="switchEN">
            <div class="form-group" style="height:32em">
                <label>Описание EN</label>
                <quill-editor class="editor" v-model="descEN" style="height:24em"/>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import TabsLang from '@/components/TabsLang';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default{
    data(){
        return {
            dComponent : "div",
            switchRU : false,
            switchKG : false,
            switchEN : false,
            descRU  : "",
            descKG  : "",
            descEN  : "",
            success : false,
            danger  : false,
            dangerMessage : "",
            successMessage  : ""
        }
    },
    components : {
        TabsLang,
        quillEditor
    },
    mounted(){
        this.ins = new Instance();
        this.switchRU = true;
    },
    methods:{
        save(){
            this.ins.save("history",{descRU : this.descRU, descKG : this.descKG,descEN : this.descEN},(response)=>{
                if(response.data.success){
                    this.successMessage = "Успешно сохранено проверте список";
                    this.success = true;
                }
                console.log(response);
            },(error)=>{
                console.log(error);
            });
        }
    }
}
</script>
