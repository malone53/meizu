<template>
    <main>
        <div class="head">
            <div class="head-1">
                <router-link to="/homepage"></router-link>
                <router-link to="/shoppingcart"></router-link>
                <router-link to="/my"></router-link>             
            </div>
                <p>魅族 18X</p>       
        </div>
        <!-- --------------------------------------------------- -->
        <div class="two">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="images/details/4.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/details/5.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/details/6.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="images/details/7.png" alt=""></van-swipe-item>
            </van-swipe>
        </div>
        <!-- -------------------------------------------------------------- -->
        <div class="three">
        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        </div>
        <!-- ---------------------------------------------------------------------- -->
        <div class="four">
            <div class="four-1">
                <div>
                    <p>￥2029</p>
                    <span>或低至181￥181.76/期</span> 
                </div>
            </div>
            <div class="four-2">
                <p>距结束还剩</p>
                <van-count-down :time="time" format=" 6时mm分ss秒" />
            </div>
        </div>

        <div class="four-3">
            <p>【限量赠魅族超充适配器 45W】【限时 6 期免息】</p>
            <br>
            <p>【魅族商城APP100积分兑30元购机红包】</p>
            <br>
            <p> 高通骁龙 870 + UFS 3.1 强劲性能 | 10bit 120Hz OLED 屏幕 | Flyme 9.2 | 屏下光学指纹解锁</p>
        </div>
        <!-- ---------------------------------------------------- -->
        <div class="five">
            <div class="five-1">
                <span>促销</span>
                <span>赠品</span>
                <span>赠魅族超充适配器,数量有限赠完即止</span>
            </div>
        </div>
        <!-- ---------------------------------------------------------- -->
        <div class="six">
            <div class="six-1">
                <span>已选</span>
                <p>全网公开版 玄 8+256GB 官方标配</p>
                <i></i>
            </div>
            <div class="six-2">
                <span>送至</span>
                <p>北京 北京市</p>
                <i></i>
            </div>
            <div class="six-3">
                <img src="images/details/10.jpg" alt="">
                <span>以旧换新</span>
                <p>全网公开版 玄 8+256GB 官方标配</p>
                <i></i>              
            </div>
            <div class="six-4">
                <div>
                    <i></i>
                    <span>花呗分期</span> 
                </div>
                <div>
                    <i></i>
                    <span>顺丰发货</span> 
                </div>  
                <div>
                    <i></i>
                    <span>7天无理由退货</span> 
                </div>             
            </div>
        </div>
        <!-- ------------------------------------------------------- -->
        <div class="seven">
            <img src="images/details/11.jpg" alt="">
            <img src="images/details/12.jpg" alt="">
            <img src="images/details/13.jpg" alt="">
        </div>
    </main>
</template>

<script>
export default {
      data() {
    return {
      time:  60 * 60 * 1000,
    };
  },
};
</script>

<style scoped>
.head{
    position: relative;
    display: flex;
    width: 100%;
    border-bottom:1px solid #999;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
.head>p{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height:11vw;
    font-size: 4vw;
    font-weight: 700;
    color: #333333FF;
}
.head-1{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding:3vw 3vw 3vw 3vw;
    position: relative;
    z-index: 99;
}
.head-1 a:nth-of-type(1){
    width: 4vw;
    height: 5vw;
    background: url(../assets/details/1.png)no-repeat 50%;
    background-size:100%;
}
.head-1 a:nth-of-type(2){
    width: 5vw;
    height: 5vw;
    background: url(../assets/details/2.png)no-repeat 50%;
    background-size:100%;
    margin-left: 65vw;
}
.head-1 a:nth-of-type(3){
    width: 5vw;
    height: 5vw;
    background: url(../assets/details/3.png)no-repeat 50%;
    background-size:100%;
}
/* ---------------------------------------------------------- */
.two{
    margin-top: 11%;
    padding-bottom:2%;
    background: #f0f0f0f0;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background: #fff;
  }
.my-swipe img{
    /* display: block; */
    width: 100%;
}
/* ----------------------------------------------------------------------- */
.four{
    background: url(../assets/details/9.png)no-repeat;
    background-size:100% ;
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.four-1 div:nth-of-type(1) p{
    color: #fff;
    font-size: 5.6vw;
    text-align: left;
}
.four-1 div:nth-of-type(1) span{
    color: #fff;
    font-size: 3.6vw;
    text-align: right;
}
.four-2{
    color: #fff;
    font-size: 12px;
    text-align: center;
}
/* ------------------------- */
.four-3{
    background: #fff;
    padding:1vw 2vw;
    line-height: 3vw;
}
.four-3 p:nth-of-type(1),p:nth-of-type(2){
    color: rgb(224, 61, 61);
    font-size:3.5vw;
}
.four-3 p:nth-of-type(3){
    font-size:3.5vw;
}
/* ----------------------------------- */
.five{
    background:#f0f0f0f0 ;
    width: 100%;
    padding:2% 0;
}
.five-1{
    background:#fff;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.five-1 span:nth-of-type(2){
    color: #e03d3d;
    background: #fcebeb;
}
/* --------------------------------- */
.six{
    background: #f0f0f0f0;
    margin-bottom:2% 0;
}
.six-1{
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.six-1 i{
    background: url(../assets/details/17.png);
    background-size:100% ;
    width: 21px;
    height: 21px;
}
.six-2{
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.six-2 i{
    background: url(../assets/details/17.png);
    background-size:100% ;
    width: 21px;
    height: 21px;
}
.six-3{
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.six-3 img{
    width:35.75px;
    height: 35.75px;
}
.six-3 i{
    background: url(../assets/details/17.png);
    background-size:100% ;
    width: 21px;
    height: 21px;
}
.six-4{
    background: #fff;
    display: flex;
    justify-content: space-around;
    border-top:1px solid #f0f0f0f0;
}
.six-4 div i{
    background: url(../assets/details/18.png);
    background-size:100%;
    width: 12px;
    height: 12px;
}
/* -------------------------------------- */
.seven {
    width: 100%;
    padding:2% 0;
}
.seven img{
    display: block;
    width: 100%;
    max-width: 100%;
    border: none;
}
</style>