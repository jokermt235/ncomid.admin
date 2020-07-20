<template>
    <div> 
        <div>
            <ul class="nav justify-content-end nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:" @click="componentAllLoad">
                    &#x2630; Список
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:" @click="componentFormLoad">
                        &#x271A; Создать
                    </a>
                </li> 
            </ul>
            <div :is="dComponent">
            </div>
        </div>
        <div :is="dComponentForm">
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import LinksForm from '@/components/LinksForm';
import LinksAll from '@/components/LinksAll';
export default{
    data(){
        return {
            items : [],
            dComponentForm : null,
            dComponent : null
        }
    },
    components : {
        LinksAll,
        LinksForm
    },
    mounted(){
       this.dComponentForm = false;
        this.dComponent = LinksAll;
        this.ins = new Instance();
        this.ins.all("links", {}, (response)=>{
            this.items = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{ 
        componentFormLoad(){
            this.dComponentForm = LinksForm;
            this.dComponent = false;
        },
        componentAllLoad(){
            this.dComponentForm = false;
            this.dComponent = LinksAll;
        }
    }
}
</script>
