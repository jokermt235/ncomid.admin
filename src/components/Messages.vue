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
import All from '@/components/MessagesAll';
export default{
    data(){
        return {
            dComponentForm : null,
            dComponent : null
        }
    },
    components : {
        All
    },
    mounted(){
       this.dComponentForm = false;
       this.dComponent = All;
    },
    methods:{ 
        componentFormLoad(){
            this.dComponent = false;
        },
        componentAllLoad(){
            this.dComponentForm = false;
            this.dComponent = All;
        }
    }
}
</script>
