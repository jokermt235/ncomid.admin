<template>
    <div>
        <TopMenu></TopMenu>
        <div class="ContentFluid">
            <div class="row flex-xl-nowrap">
                <div class="col-md-3 col-xl-3 bd-sidebar">
                    <div class="LeftPanel">
                        <form class="bd-search d-flex align-items-center">
                            <input type="search" class="form-control ds-input" id="search-input" 
                            placeholder="Search..."/>
                        </form>
                        <hr/>
                        <ul class="list-group flex-content">
                            <li class="list-group-item">
                                <a class="active" href="#" @click="loadBanners">Баннеры</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="loadBanners">Список</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="bannersFormLoad">Создать + </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#">
                                            Статистика
                                        </a>
                                        <span class="badge badge-primary badge-pill">0</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Новости</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Сообщения</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Фотогалерея</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Отзывы</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content mt-3">
                    <div :is="componentToLoad"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopMenu from '@/components/TopMenu.vue';
import Banners from '@/components/Banners.vue';
import BannersForm from '@/components/BannersForm';
export default {
    data(){
        return {
            componentToLoad : null
        }
    },
    components: {
        TopMenu,
        Banners,
        BannersForm
    },
    methods:{
        loadBanners(){
            this.componentToLoad = Banners;
        },
        bannersFormLoad(){
            this.componentToLoad = BannersForm;
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
