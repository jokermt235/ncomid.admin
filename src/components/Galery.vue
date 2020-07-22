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
import PhotoForm from '@/components/PhotoForm';
import Photos from '@/components/Photos';
export default{
    data(){
        return {
            dComponentForm : null,
            dComponent : null
        }
    },
    components : {
        Photos,
        PhotoForm
    },
    mounted(){
       this.dComponentForm = false;
       this.dComponent = Photos;
    },
    methods:{ 
        componentFormLoad(){
            this.dComponentForm = PhotoForm;
            this.dComponent = false;
        },
        componentAllLoad(){
            this.dComponentForm = false;
            this.dComponent = Photos;
        }
    }
}
</script>
