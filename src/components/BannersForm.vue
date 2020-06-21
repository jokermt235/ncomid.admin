<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Шапка баннера</label>
            <input type="input" class="form-control"
            id="title" placeholder="Шапка"
            name="title" v-model="title">
        </div>
        <div class="form-group">
            <label for="desc">Описание</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="Описание"
            name="desc" v-model="desc"></textarea>
        </div>
        <div class="form-group" id="photoPreview" v-html="photoPreview">
        </div>
        <div class="form-group">
            <label for="image">Изображение баннера</label>
            <input type="file" class="form-control-file" @change="fileChange" id="image">
            <input type="hidden" v-model="image"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
export default{
    data(){
        return {
            photoPreview:null,
            title : "",
            desc  : "",
            image : ""
        }
    },
    methods:{
        fileChange(){
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("images", photo);
            console.log(formData);
            let ins = new Instance();
            ins.save("banners/upload",formData,(response)=>{
                console.log(response.data);
                let html = `<img src="http://89.223.29.71/banners/images/${response.data}"/>`;
                this.photoPreview = html;
                this.image = response.data;
            },(error)=>{
                console.log(error);
            });
        },
        save(){
            let ins = new Instance();
            ins.save("banners",{title: this.title, desc:this.desc,image: this.image},(response)=>{
                console.log(response);
                if(response){
                    this.$forceUpdate();
                }
            },(error)=>{
                console.log(error);
            });
        },
        onSubmit(){
            //console.log(this.desc);
        }
    }
}
</script>
