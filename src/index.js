import SlideComponent from './index.vue';
import SlideItemComponent from './slide-item';

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('tlSlide', SlideComponent);
    Vue.component('tlSlideItem', SlideItemComponent);
}

const SlidePuglin = {
    install,
    SlideComponent,
};

if (window !== undefined && window.Vue) {
    window.Vue.use(SlidePuglin);
}

export default SlidePuglin;
