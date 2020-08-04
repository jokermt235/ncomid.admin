<template>
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
</template>
<script>
import All from '@/components/HistoryAll';
import Form from '@/components/HistoryForm';
export default{
    data(){
        return {
            dComponent : null
        }
    },
    mounted(){
        this.dComponent = All;
    },
    methods:{
        componentAllLoad(){
            this.dComponent = All;
        },
        componentFormLoad(){
            this.dComponent = Form;
        }
    }
}
</script>
