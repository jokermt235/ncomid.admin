<template>
    <div class="form-group">
        <label for="image">Картинка</label>
        <input type="file" class="form-control-file" @change="fileChange" id="image">
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
export default {
    props : ['module','image'],
    data(){
        return {
            image_url  : ""
        }
    },
    mounted(){
        this.image_url = process.env.VUE_APP_BASE_URL_IMAGE + this.module +"/";
    },
    methods: {
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            let ins = new Instance();
            let module = this.module;
            ins.save(`${module}/upload`,formData,(response)=>{
                this.$emit('imageChanged', response.data);
            },(error)=>{
                console.log(error);
            });
        } 
    }
}
</script>
