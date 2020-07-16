<template>
    <form @submit.prevent="onSubmit" :is="dComponent">
        <div class="form-group">
            <label for="title">Неделя</label>
            <input type="input" class="form-control"
            id="title" placeholder="3" name="title" v-model="week">
        </div>
        <div class="form-group">
            <label for="title">Месяц</label>
            <input type="input" class="form-control"
            id="title" placeholder="6" name="title" v-model="month">
        </div>
        <div class="form-group">
            <label for="title">Год</label>
            <input type="input" class="form-control"
            id="title" placeholder="9" name="title" v-model="year">
        </div>
        <button type="submit" class="btn btn-primary" @click="save">Отправить</button>
    </form>
</template>
<script>
import Instance from '@/lib/Instance.js';
import Stats from '@/components/Stats.vue';
export default{
    mounted(){
        this.ins = new Instance();
    },
    methods:{
        save(){
            this.dComponent = Stats;
            if(this.id){
                this.ins.update("stats",{id: this.id, week: this.week, month:this.month,year: this.year},(response)=>{
                    if(response){
                        this.dComponent = Stats;
                    }
                },(error)=>{
                    console.log(error);
                });
            }else{
                this.ins.save("stats",{ week: this.week, month:this.month,year: this.year},(response)=>{
                    if(response){
                        this.dComponent = Stats;
                    }
                },(error)=>{
                    console.log(error);
                });
            }
        } 
    }
}
</script>
