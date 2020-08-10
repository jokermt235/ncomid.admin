<template>
    <div>
        <div class="alert alert-success" role="alert" v-if="success">
            {{message}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="danger">
            {{message}}
        </div>
        <img :src="image_url + '/' + image" width="128px" height="128px"/>
        <ImageUpload :module="module" @imageChanged="imageUploadChanged"></ImageUpload>
        <div class="form-group">
            <label for="title">Заголовок RU</label>
            <input type="input" class="form-control"
            placeholder="Заголовок объявления" name="titleRU" v-model="titleRU">
        </div>
        <div class="form-group">
            <label for="title">Заголовок KG</label>
            <input type="input" class="form-control"
             placeholder="Заголовок объявления" name="titleKG" v-model="titleKG">
        </div>
        <div class="form-group">
            <label for="title">Заголовок EN</label>
            <input type="input" class="form-control"
            id="title" placeholder="Заголовок объявления" name="titleEN" v-model="titleEN">
        </div>
        <div class="form-group">
            <label for="desc">Ссылка</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="http://ссылка,https://ссылка"
            name="desc" v-model="link"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import ImageUpload from '@/components/ImageUpload';
export default{
    data(){
        return {
            titleRU : "",
            titleKG : "",
            titleEN : "",
            link  : "",
            image : "",
            success  : false,
            danger  : false,
            image_url : process.env.VUE_APP_BASE_URL_IMAGE + "links/",
            module : "links"
        }
    },
    components : {
        ImageUpload
    },
    mounted(){
    },
    methods:{
        save(){
            let ins = new Instance();
            ins.save("links",{titleRU: this.titleRU, titleKG: this.titleKG, titleEN : this.titleEN, link:this.link,image:this.image},(response)=>{
                if(response){
                    this.message = "Успешно сохранено проверьте список";
                    this.success = true;
                    this.danger = false;
                }
            },(error)=>{
                console.log(error);
                this.success = false;
                this.danger = true;
                this.message = error;
            });
        },
        imageUploadChanged(img){
            this.image = img;
        }
    }
}
</script>
