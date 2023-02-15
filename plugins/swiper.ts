// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('swiper', Swiper)
    nuxtApp.vueApp.component('swiper-slide', SwiperSlide)
})