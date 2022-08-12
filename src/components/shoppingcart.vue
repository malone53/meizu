<template>
<main>
    <div class="one">
    <van-nav-bar
    title="购物车"
    left-text="返回"
    right-text="编辑"
     left-arrow
    @click-left="history.go(-1)"
    @click-right="onClickRight"
    />
    </div>

    <div class="two">
        <van-card
        num="1"
        price="2799.00"
        desc="全网通公开版 玄 8+256GB"
        title="魅族 18X"
        thumb=" images/shoppingcart/1.jpg "
        >
        <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
        </template>
        </van-card> 
    </div>

    <div class="three">
          <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
          <template #tip>
    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
          </template>
          </van-submit-bar>
    </div>
</main>

</template>
<script>
import { Toast } from 'vant';
// import $ from 'jquery'
export default {
  data(){
    return{
      checked: '',
    }
  },
  methods: {
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>