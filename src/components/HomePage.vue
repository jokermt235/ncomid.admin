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
                                        <a href="#" @click="loadBanners">Все баннеры</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="bannersFormLoad">создать + </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#">
                                            статистика
                                        </a>
                                        <span class="badge badge-primary badge-pill">0</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item">
                                <a class="active" href="javascript:" @click="loadPhotos">Фотогалерея</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="loadPhotos">Все фото</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="photosFormLoad">создать + </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Новости</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="loadNews">Все новости</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="newsFormload">создать + </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#">
                                            статистика
                                        </a>
                                        <span class="badge badge-primary badge-pill">0</span>
                                    </li>
                                </ul> 
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Объявления</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="loadAdverts">Все Объявления</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="advertFormLoad">создать + </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#">
                                            статистика
                                        </a>
                                        <span class="badge badge-primary badge-pill">0</span>
                                    </li>
                                </ul> 
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Сообщения</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="messagesLoad">Все сообщения</a>
                                    </li> 
                                </ul>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Фотогалерея</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="#">Отзывы</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="loadReviews">Все отзывы</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="#" @click="reviewFormLoad">создать + </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:">Среднее меню</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="historyLoad">История</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="historyFormLoad">создать + </a>
                                    </li>
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="aboutLoad">О нас</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="aboutFormLoad">создать + </a>
                                    </li>
                                </ul>
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
import News from '@/components/News.vue';
import NewsForm from '@/components/NewsForm';
import Adverts from '@/components/Adverts';
import AdvertForm from '@/components/AdvertForm';
import Reviews from '@/components/Reviews';
import ReviewForm from '@/components/ReviewForm';
import Messages from '@/components/Messages';
import History from '@/components/History';
import HistoryForm from '@/components/HistoryForm';
import About from '@/components/About';
import AboutForm from '@/components/AboutForm';
import Photos from '@/components/Photos';
import PhotoForm from '@/components/PhotoForm';
export default {
    data(){
        return {
            componentToLoad : null
        }
    },
    components: {
        TopMenu,
        Banners,
        BannersForm,
        News,
        NewsForm,
        Adverts,
        AdvertForm,
        Reviews,
        ReviewForm,
        Messages,
        History,
        HistoryForm,
        About,
        AboutForm,
        Photos,
        PhotoForm
    },
    methods:{
        loadBanners(){
            this.componentToLoad = Banners;
        },
        bannersFormLoad(){
            this.componentToLoad = BannersForm;
        },
        loadNews(){
            this.componentToLoad = News;
        },
        newsFormload(){
            this.componentToLoad = NewsForm;
        },
        loadAdverts(){
            this.componentToLoad = Adverts;
        },
        advertFormLoad(){
            this.componentToLoad = AdvertForm;
        },
        loadReviews(){
            this.componentToLoad = Reviews;
        },
        reviewFormLoad(){
            this.componentToLoad = ReviewForm;
        },
        messagesLoad(){
            this.componentToLoad = Messages;
        },
        historyLoad(){
            this.componentToLoad = History;
        },
        historyFormLoad(){
            this.componentToLoad = HistoryForm;
        },
        aboutLoad(){
            this.componentToLoad = About;
        },
        aboutFormLoad(){
            this.componentToLoad = AboutForm;
        },
        loadPhotos(){
            this.componentToLoad = Photos;
        },
        photosFormLoad(){
            this.componentToLoad = PhotoForm;
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
