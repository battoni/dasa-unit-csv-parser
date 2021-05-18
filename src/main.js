import Vue from 'vue';
import App from './App.vue';

import VuePapaParse from 'vue-papa-parse';
import { TitleMixin } from '@/mixins';

Vue.use(VuePapaParse);
Vue.mixin(TitleMixin);

Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount('#app');
