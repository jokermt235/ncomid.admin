<template>
    <div> 
        <div>
            <ul class="nav justify-content-end nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:" @click="sectionsAllLoad">
                    &#x2630; Список
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:" @click="sectionsFormLoad">
                        &#x271A; Создать
                    </a>
                </li> 
            </ul>
            <div :is="dSections">
            </div>
        </div>
        <div :is="dSectionsForm">
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import SectionsForm from '@/components/SectionsForm';
import SectionsAll from '@/components/SectionsAll';
export default{
    data(){
        return {
            image_url: process.env.VUE_APP_BASE_URL_IMAGE + "sections/",
            items : [],
            dSectionsForm : null,
            dSections : null
        }
    },
    components : {
        SectionsAll,
        SectionsForm
    },
    mounted(){
        this.dSectionsForm = false;
        this.dSections = SectionsAll;
        this.ins = new Instance();
        this.ins.all("sections", {}, (response)=>{
            this.items = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{ 
        sectionsFormLoad(){
            this.dSectionsForm = SectionsForm;
            this.dSections = false;
        },
        sectionsAllLoad(){
            this.dSectionsForm = false;
            this.dSections = SectionsAll;
        },
        remove(id, image){
            this.ins.delete("sections", {id,image}, response=>{
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
        edit(id,image){
            console.log(id,image);
        }
    }
}
</script>
