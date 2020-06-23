<template>
<div class="d-flex justify-content-center mt-5"> 
    <form  v-on:submit.prevent>
        <div class="mt-5 mb-5 d-flex justify-content-center">
            <img src="images/backup.jpg"/>
        </div>
        <div class="form-group">
            <label for="username">Имя пользователя</label>
            <input type="text" class="form-control" v-model="username" id="username" name="username" >
        </div>
        <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" id="password" v-model="password" name="password">
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Войти</button>
    </form>
</div>
</template>
<script>
import Instance from '@/lib/Instance.js';
export default{
    data(){
        return {
            username : "",
            password : ""
        };
    },
    mounted(){
    },
    methods:{
        login(){
            const instance = new Instance();
            instance.getJSON("auth",{
                username:this.username,
                password:this.password},
            (response)=>{
                console.log(response);
                if(response){
                    localStorage.token = response.data.data.accessToken;
                    console.log(response.data.data);
                    location.reload();
                }
            });
        }
    }
}
</script>
