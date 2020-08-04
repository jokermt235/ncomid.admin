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
        };
    },
    created(){
        console.log("Created parent");
    },
    methods :{
        showRU(){
            this.$emit("showRU", true);
        },
        showKG(){
            this.$emit("showKG", true);
        },
        showEN(){
            this.$emit("showEN", true);
        }
    }
}
</script>
