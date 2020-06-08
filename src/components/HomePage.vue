<template>
    <div>
        <TopMenu></TopMenu>
        <div class="ContentFluid">
            <div class="row flex-xl-nowrap">
                <div class="col-md-3 col-xl-2 bd-sidebar">
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
                </div>
                <div class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                    <div :is="componentToLoad">{{componentToLoad}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopMenu from '@/components/TopMenu.vue';
import Banners from '@/components/Banners.vue';
export default {
    data(){
        return {
            componentToLoad : null
        }
    },
    components: {
        TopMenu,
        Banners
    },
    methods:{
        loadBanners(){
            this.componentToLoad = Banners;
        }
    }
}
</script>
<style scoped>
    .ContentFluid{
        padding-right: 15px;
        padding-left: 15px;
    }
    .LeftPanel{
        margin-top:16px;
        margin-left:16px;
    }
</style>
