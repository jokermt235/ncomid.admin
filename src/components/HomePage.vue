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
                                <a class="active" href="javascript:" @click="loadBanners">Баннеры</a>
                            </li>
                            <li class="list-group-item">
                                <a class="active" href="javascript:" @click="sectionsLoad">Отделения</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="active" href="javascript:" @click="galeryLoad">Фотогалерея</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:" @click="newsLoad">Новости</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:" @click="advertsLoad">Объявления</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a class="" href="javascript:" @click="statsLoad">Статистика</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:" @click="messagesLoad">Сообщения</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:" @click="reviewsLoad">Отзывы</a>
                            </li>
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:" @click="linksLoad">Ссылки</a>
                            </li>    
                            <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                <a href="javascript:">РПЦ</a>
                                <ul class="list-group">
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="historyLoad">История</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="aboutLoad">О нас</a>
                                    </li>
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="managementLoad">Дирекция</a>
                                    </li> 
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="charterLoad">Устав центра</a>
                                    </li>
                                    <li class="list-group-item" style="padding: .35rem 1.25rem;">
                                        <a href="javascript:" @click="contactLoad">Контакты</a>
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
import News from '@/components/News.vue';
import Adverts from '@/components/Adverts';
import Reviews from '@/components/Reviews';
import Messages from '@/components/Messages';
import History from '@/components/History';
import Management from '@/components/Management';
import Charter from '@/components/Charter';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Galery from '@/components/Galery';
import Stats from '@/components/Stats';
import Sections from '@/components/Sections';
import Links from '@/components/Links';
export default {
    data(){
        return {
            componentToLoad : null
        }
    },
    components: {
        TopMenu,
        Banners,
        Sections,
        News,
        Adverts,
        Reviews,
        Messages,
        Management,
        Contact,
        Charter,
        History,
        About,
        Galery,
        Stats,
        Links
    },
    methods:{
        loadBanners(){
            this.componentToLoad = Banners;
        },
        newsLoad(){
            this.componentToLoad = News;
        },
        advertsLoad(){
            this.componentToLoad = Adverts;
        },
        reviewsLoad(){
            this.componentToLoad = Reviews;
        },
        messagesLoad(){
            this.componentToLoad = Messages;
        },
        historyLoad(){
            this.componentToLoad = History;
        },
        aboutLoad(){
            this.componentToLoad = About;
        },
        managementLoad(){
            this.componentToLoad = Management;
        },
        charterLoad(){
            this.componentToLoad = Charter;
        },
        contactLoad(){
            this.componentToLoad = Contact;
        },
        galeryLoad(){
            this.componentToLoad = Galery;
        },
        statsLoad(){
            this.componentToLoad = Stats;
        },
        /*statsFormLoad(){
            StatsForm.data = ()=>{
                return {
                    "dComponent" : "div",
                    id      : null,
                    week    : "" ,
                    month   : "",
                    year    : ""
                };
            };            
            this.componentToLoad = StatsForm;
        },*/
        sectionsLoad(){
            this.componentToLoad = Sections;
        },
        linksLoad(){
            this.componentToLoad = Links;
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
