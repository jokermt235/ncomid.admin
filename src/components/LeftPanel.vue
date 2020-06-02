<template>
    <div class="LeftPanel">
        <form class="bd-search d-flex align-items-center">
            <input type="search" class="form-control ds-input" id="search-input" 
            placeholder="Search..."/>
        </form>
        <hr/>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#" @click="loadBanners">Баннеры</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Новости</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Сообщения</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Фотогалерея</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Отзывы</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        methods:{
            loadBanners(){
            }
        }
    }
</script>
<style scoped>
    .LeftPanel{
        margin-top:16px;
        margin-left:16px;
    }
</style>
