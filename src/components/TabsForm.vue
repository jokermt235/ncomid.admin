<template>
    <ul class="nav  nav-tabs mt-3">
        <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="showRU">
            &#9779; RU
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="showKG">
                &#9779; KG
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="showEN">
                &#9779; EN
            </a>
        </li>
    </ul>
</template>
<script>
export default{
    data(){
        return {
            dComponentRU : false,
            dComponentKG : false,
            dComponentEN : false
        };
    },
    methods :{
        showRU(){
            this.dComponentRU = true;
            this.dComponentKG = false;
            this.dComponentEN = false;
        },
        showKG(){
            this.dComponentKG = true;
            this.dComponentRU = false;
            this.dComponentEN = false;
        },
        showEN(){
            this.dComponentKG = false;
            this.dComponentRU = false;
            this.dComponentEN = true;
        }
    }
}
</script>
