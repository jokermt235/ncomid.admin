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
        <div class="form-group">
            <label for="image">Изображение баннера</label>
            <input type="file" class="form-control-file" id="image">
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
</template>
<script>
export default{
    data(){
        return {
            title : "",
            desc  : ""
        }
    },
    methods:{
        onSubmit(){
            console.log(this.desc);
        }
    }
}
</script>
