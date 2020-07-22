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
import Form from '@/components/NewsForm';
import All from '@/components/NewsAll';
export default{
    data(){
        return {
            dComponentForm : null,
            dComponent : null
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
