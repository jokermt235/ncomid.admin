<template>
    <div>
        <div class="card mb-3" v-for="item in items" :key="item.id">
            <div class="card-body">
                <h5 class="card-title">{{item.fullname}}</h5>
                <p class="card-text">{{item.email}}</p>
                <p class="card-text">{{item.msg}}</p>
                <p class="card-text">
                    <small class="text-muted">
                        Обновлено
                        {{item.createdAt}}
                    </small>
                </p>
                <a href="#" class="mr-3 text-danger" @click="remove(item.id)">
                    <svg class="bi bi-x-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>
                 Удалить</a>
            </div>
        </div>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
export default{
    data(){
        return {
            items : []
        }
    },
    mounted(){
        this.ins = new Instance();
        this.ins.all("messages", {}, (response)=>{
            this.items = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    methods:{
        remove(id){
            this.ins.delete("messages", {id}, response=>{
                if(response.data){
                    this.items =  this.items.filter(message=>{
                        if(message.id != id) return true;
                    });
                }
                console.log(response);
            },
            error=>{
                console.log(error);
            });
        }
    }
}
</script>
