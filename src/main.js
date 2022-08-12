import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from '../src/assets/js/router.js';
import Vant from 'vant';
import 'vant/lib/index.css';



Vue.use(Vant);
Vue.use(VueRouter)
Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'vant';//轮播

Vue.use(Swipe);
Vue.use(SwipeItem);

import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);


import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
//购物车
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

import { CountDown } from 'vant';
//倒计时
Vue.use(CountDown);

import { NavBar } from 'vant';
//导航栏
Vue.use(NavBar);

import { SubmitBar } from 'vant';
//购物车
Vue.use(SubmitBar);

import { Card } from 'vant';
//购物车商品
Vue.use(Card);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
