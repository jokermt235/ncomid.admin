<template>
    <div :is="dComponent">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Week</th>
                    <th scope="col">Mobth</th>
                    <th scope="col">Year</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.week}}</td>
                    <td>{{item.month}}</td>
                    <td>{{item.year}}</td>
                    <td>
                        <a href="javascript:" class="mr-3 text-danger" @click="remove(item.id)">
                    <svg class="bi bi-x-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>
                 Удалить</a>
                <a href="javascript:" @click="edit(item)"><svg class="bi bi-pencil-square" width="1em" height="1em" 
                viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> Изменить</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Instance from '@/lib/Instance.js';
import StatsForm from '@/components/StatsForm';
export default{
    data(){
        return {
            dComponent : "div",
            items : []
        }
    },
    mounted(){
        this.ins = new Instance();
        this.ins.all("stats", {}, (response)=>{
            this.items = response.data;
        }, (error)=>{
            console.log(error);
        });
    },
    components : {
        StatsForm
    },
    methods:{
        remove(id){
            this.ins.delete("stats", {id}, response=>{
                if(response.data){
                    this.items =  this.items.filter(item=>{
                        if(item.id != id) return true;
                    });
                }
                console.log(response);
            },
            error=>{
                console.log(error);
            });
        },
        edit(item){
            StatsForm.data = ()=>{
                return {
                    "dComponent" : "div",
                    id      : item.id,
                    week    : item.week ,
                    month   : item.month,
                    year    : item.year
                };
            };
            this.dComponent = StatsForm;
        }
    }
}
</script>
