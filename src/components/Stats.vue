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
import Form from '@/components/StatsForm';
import All from '@/components/StatsAll';
export default{
    data(){
        return {
            dComponentForm : false,
            dComponent : false
        }
    },
    components : {
        All,
        Form
    },
    mounted(){
       this.dComponentForm = false;
       this.dComponent = All;
    },
    methods:{ 
        componentFormLoad(){
            Form.data = ()=>{
                return {
                    "dComponent" : "div",
                    id      : null,
                    week    : "" ,
                    month   : "",
                    year    : ""
                };
            };
            this.dComponentForm = Form;
            this.dComponent = false;
        },
        componentAllLoad(){
            this.dComponentForm = false;
            this.dComponent = All;
        }
    }
}
</script>
