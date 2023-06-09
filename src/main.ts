import {createApp} from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';

import route from '@/router/admin';

import "@/assets/css/base.css";

let app = createApp(App);
app.use(route);
app.use(Antd);
app.mount('#app');