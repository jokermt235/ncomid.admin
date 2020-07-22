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
import BannersForm from '@/components/BannersForm';
import BannersAll from '@/components/BannersAll';
export default{
    data(){
        return {
            dComponentForm : null,
            dComponent : null
        }
    },
    components : {
        BannersAll,
        BannersForm
    },
    mounted(){
       this.dComponentForm = false;
       this.dComponent = BannersAll;
    },
    methods:{ 
        componentFormLoad(){
            this.dComponentForm = BannersForm;
            this.dComponent = false;
        },
        componentAllLoad(){
            this.dComponentForm = false;
            this.dComponent = BannersAll;
        }
    }
}
</script>
