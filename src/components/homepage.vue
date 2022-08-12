<template>
    <main>
        <div class="head">
            <div class="head-1">
                    <a href=""></a>
                    <router-link to="/shoppingcart"></router-link>
                    <router-link to="/my"></router-link>             
            </div>

                <a href="">
                    <img src="images/homepage/logo.png" alt="">
                </a>
        </div>
<!-- ------------------------------------------------------------ -->
        <div class="classification">
            <div class="classification-1">
                 <ul>
                    <li><a href="">推荐</a></li>                   
                    <li><router-link to="/list">手机</router-link></li>
                    <li><a href="">声学</a></li>
                    <li><a href="">PANDAER</a></li>
                    <li><a href="">配件</a></li>
                    <li><a href="">lipro</a></li>
                 </ul>
            </div> 
        </div>
<!-- --------------------------------------------------------------- -->
        <div class="rotation">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><a href=""><img src="images/homepage/轮播1.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播2.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播3.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播4.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播5.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播6.jpg" alt=""></a></van-swipe-item>
            <van-swipe-item><a href=""><img src="images/homepage/轮播7.jpg" alt=""></a></van-swipe-item>
            </van-swipe>
        </div>
            <!-- --------------------------------------------------------- -->
        <div class="one">
            <a href="" v-for="(it,index) in list1" :key="index">
                <img :src="it.img" alt="">
                <span>{{it.name}}</span>
            </a>
            
        </div>
        <!-- ----------------------------------------------------- -->
        <div class="two">
            <div class="two-1">
                <a href="" v-for="(it,index) in list2" :key="index"><img :src="it.img" alt=""><span>{{it.name}}</span></a>
            </div>
        </div>
        <!-- ---------------------------------------------------------- -->
        <div class="three">
            <ul>
                <li><router-link to="/details"><img src="images/homepage/11.jpg" alt=""></router-link>
                    </li>
                <li>
                    <div>
                        <img src="images/homepage/12.jpg" alt="">
                    </div>
                    <div>
                        <img src="images/homepage/13.jpg" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <!-- ---------------------------------------------------------------- -->
        <div class="four">
            <div>
              <h3>智能手机</h3>
              <span></span>  
            </div>
            <div>
                <img src="images/homepage/14.jpg" alt="">
            </div>
        </div>
            <!-- ----------------------------------------------- -->
            <div class="five">
                <div v-for="(it,index) in list3" :key="index">
                <img :src="it.img" alt="">
                    <div class="five-2">
                        <p>{{it.text}}</p>
                        <p>{{it.text1}}</p>
                        <p>￥{{it.number}}起<s>￥{{it.number1}}</s></p>                     
                    </div>
                </div>
            </div>
               <!-------------------------------------------------------  -->
            <div class="six">
                <div class="six-1">
                    <h3>魅族声学</h3>
                    <span></span>  
                </div>

                <div class="six-2">
                    <div>
                         <img src="images/homepage/19.jpg" alt="">
                    </div>

                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>
                </div>

                <div class="six-3">
                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>

                    <div>
                        <img src="images/homepage/20.jpg" alt="">
                    </div>
                </div>
<!-- ---------------------------------------------------------------------------- -->
                <div class="six-4">
                    <div class="six-4-1" v-for="(it,index) in list4" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}</span> 
                        </div>
                   </div>

                    <div class="six-4-2" v-for="(it,index) in list5" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p><span>{{it.text1}}</span>{{it.text2}}</p>
                            <span>￥{{it.number}}<s>￥{{it.number1}}</s></span> 
                        </div>
                   </div>
                </div>
            </div>
            <!-- ---------------------------------------------------- -->
            <div class="seven">
                <div class="seven-1">
                    <h3>PANDAER 奇趣探索</h3>
                    <span></span>  
                </div>

                <div class="seven-2">
                    <div>
                         <img src="images/homepage/27.jpg" alt="">
                    </div>

                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>
                </div>

                <div class="seven-3">
                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>

                    <div>
                        <img src="images/homepage/28.jpg" alt="">
                    </div>
                </div>
<!-- -------------------------------------------------------------------------- -->
                <div class="seven-4">
                    <div class="seven-4-1" v-for="(it,index) in list6" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.text2}}</span> 
                        </div>
                   </div>

                    <div class="seven-4-2" v-for="(it,index) in list7" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}<s>￥{{it.number1}}</s></span> 
                        </div>
                   </div>
                </div>
            </div>
            <!-- -------------------------------------------------- -->
            <div class="eight">
                <div class="eight-1">
                    <h3>周边配件</h3>
                    <span></span>  
                </div>

                <div class="eight-2">
                    <div>
                         <img src="images/homepage/33.jpg" alt="">
                    </div>

                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>
                </div>

                <div class="eight-3">
                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>

                    <div>
                        <img src="images/homepage/34.jpg" alt="">
                    </div>
                </div>
                <!-- ---------------------------------------------------------- -->
                <div class="eight-4">
                    <div class="eight-4-1" v-for="(it,index) in list8" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}</span> 
                        </div>
                   </div>

                    <div class="eight-4-2" v-for="(it,index) in list9" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}<s>￥{{it.number1}}</s></span> 
                        </div>
                   </div>
                </div>
            </div>
            <!-- --------------------------------------------------------------------- -->
            <div class="nine">
                <div class="nine-1">
                    <h3>Lipro 智能家居</h3>
                    <span></span>  
                </div>

                <div class="nine-2">
                    <div>
                         <img src="images/homepage/37.jpg" alt="">
                    </div>

                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>
                </div>

                <div class="nine-3">
                    <div>
                        <h4>魅蓝 Blus 主动降噪耳机</h4> 
                        <p>12mm 超大动圈 | 30dB 品质级主动降噪 | 双 mic 通话降噪 | 30h 超长续航</p>
                        <i></i>
                        <p>￥199</p>
                    </div>

                    <div>
                        <img src="images/homepage/38.jpg" alt="">
                    </div>
                </div>
<!-- ------------------------------------------------------------------------------ -->
                <div class="nine-4">
                    <div class="nine-4-1" v-for="(it,index) in list10" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}</span> 
                        </div>
                   </div>

                    <div class="nine-4-2" v-for="(it,index) in list11" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>￥{{it.number}}<s>￥{{it.number1}}</s></span> 
                        </div>
                   </div>
                </div>
            </div>
            <!-- -------------------------------------------------------------- -->
            <div class="ten">
                <div class="ten-1">
                    <h3>社区热帖</h3>
                    <span></span>  
                </div>

                <div class="ten-2">
                    <div class="ten-2-1" v-for="(it,index) in list12" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <img :src="it.img1" alt="">
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>{{it.text2}}</span> 
                        </div>
                   </div>

                    <!-- <div class="ten-2-2" v-for="(it,index) in list12" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <img :src="it.img1" alt="">
                            <p>{{it.text}}</p>
                            <p>{{it.text1}}</p>
                            <span>{{it.text2}}</span> 
                        </div>
                   </div> -->
                </div>
            </div>
            <!-- ------------------------------------------------------- -->
            <div class="eleven">
                <div class="eleven-1">
                    <h3>Flyme</h3>
                    <span></span>  
                </div>

                <div class="eleven-2">
                    <div class="eleven-2-1" v-for="(it,index) in list13" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                        </div>
                   </div>
                </div>
            </div>
            <!-- ----------------------------------------------------- -->
            <div class="twelve">
                <div class="twelve-1">
                    <h3>精彩视频</h3>
                    <span></span>  
                </div>

                <div class="twelve-2">
                    <div class="twelve-2-1" v-for="(it,index) in list14" :key="index">
                        <img :src="it.img" alt="">
                        <div>
                            <p>{{it.text}}</p>
                        </div>
                   </div>
                </div>
            </div>
            <!-- ------------------------------------------------------- -->
            <div class="thirteen">
                <p>返回顶部</p>
            </div>
            <!-- --------------------------------------------- -->
            <div class="fourteen">
                <div class="fourteen-1">
                    <div>
                        <img src="images/homepage/47.png" alt="">
                        <span>400-788-3333</span>
                    </div>
                    <div>
                        <img src="images/homepage/48.png" alt="">
                        <span>在线客服</span>
                    </div>
                </div>

                <div class="fourteen-2">
                    <div>
                        <span>粤ICP备13003602号-2合字B2-20170010</span>
                        <span>营业执照©2018 Meizu All rights reserved</span>
                    </div>
                    <div>
                        <img src="images/homepage/49.png" alt="">
                        <span>简体中文</span>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------------- -->
    </main>
</template>
<script>
export default {
    data(){
        return{
            list1:[
                {
                    img:'images/homepage/4.png',
                    name:'魅族官方直供',
                },
                {
                    img:'images/homepage/5.png',
                    name:'满80免运费',
                },
                {
                    img:'images/homepage/6.png',
                    name:'7天无理由退货',
                },
            ],
            list2:[
                {
                    img:'images/homepage/7.jpg',
                    name:'88福利日',
                },
                {
                    img:'images/homepage/8.jpg',
                    name:'免费换电池',
                },
                {
                    img:'images/homepage/9.png',
                    name:'现已开启',
                },
                {
                    img:'images/homepage/10.jpg',
                    name:'以旧换新',
                },
            ],
            list3:[
                {
                    img:'images/homepage/15.png',
                    text:'魅族 18X',
                    text1:'限量赠充电器 | 6期免息',
                    number:1899,
                    number1:2500,
                },
                {
                    img:'images/homepage/16.png',
                    text:'魅族 18s',
                    text1:'限时12期免息',
                    number:2799,
                    number1:3200,
                },
                {
                    img:'images/homepage/17.png',
                    text:'魅族 18 Pro',
                    text1:'限时6期免息',
                    number:3299,
                    number1:3699,
                },
                {
                    img:'images/homepage/18.png',
                    text:'魅族 18s Pro',
                    text1:'限时12期免息',
                    number:3699,
                    number1:4199,
                },
            ],
            list4:[
                {
                    img:'images/homepage/21.png',
                    text:'魅蓝 Bulus Air 真无线耳机',
                    text1:'双路四麦 ENC 智能通话降噪',
                    number:159,
                },
                {
                    img:'images/homepage/23.png',
                    text:'魅蓝 Bulus Air 真无线耳机',
                    text1:'双路四麦 ENC 智能通话降噪',
                    number:159,
                },
                {
                    img:'images/homepage/25.png',
                    text:'魅蓝 Bulus Air 真无线耳机',
                    text1:'双路四麦 ENC 智能通话降噪',
                    number:159,
                },
            ],
            list5:[
                {
                    img:'images/homepage/22.png',
                    text:'魅蓝 Bulus+ 主动降噪耳机',
                    text1:'免息',
                    text2:'超低延迟「游戏模式」',
                    number:189,
                    number1:219,
                },
                {
                    img:'images/homepage/24.png',
                    text:'魅蓝 Bulus+ 主动降噪耳机',
                    text1:'免息',
                    text2:'超低延迟「游戏模式」',
                    number:189,
                    number1:219,
                },
                {
                    img:'images/homepage/26.png',
                    text:'魅蓝 Bulus+ 主动降噪耳机',
                    text1:'免息',
                    text2:'超低延迟「游戏模式」',
                    number:189,
                    number1:219,
                },
            ],
            list6:[
                {
                    img:'images/homepage/29.jpg',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    text2:219,
                },
                {
                    img:'images/homepage/29.jpg',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    text2:219,
                },
                {
                    img:'images/homepage/29.jpg',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    text2:219,
                },
                {
                    img:'images/homepage/29.jpg',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    text2:219,
                },
            ],
            list7:[
                {
                    img:'images/homepage/30.jpg',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/30.jpg',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/30.jpg',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/30.jpg',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
            ],
                list8:[
                {
                    img:'images/homepage/35.png',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    number:219,
                },
                {
                    img:'images/homepage/35.png',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    number:219,
                },
                {
                    img:'images/homepage/35.png',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    number:219,
                },
                {
                    img:'images/homepage/35.png',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    number:219,
                },
            ],
                 list9:[
                {
                    img:'images/homepage/36.png',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/36.png',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/36.png',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
                {
                    img:'images/homepage/36.png',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
            ],
            list10:[
                {
                    img:'images/homepage/35.png',
                    text:'65W GaN 变速箱 潮充',
                    text1:'【套餐立省30元】',
                    number:219,
                },
            ],
            list11:[
                {
                    img:'images/homepage/36.png',
                    text:'XOG 白金星舟耳机',
                    text1:'机械感滑轨舱 | Flyme妙连',
                    number:399,
                    number1:439,
                },
            ],
            list12:[
                {
                    img:'images/homepage/41.png',
                    img1:'images/homepage/50.jpg',
                    text:'醉刘的摄影狮',
                    text1:'魅族 18ro |银河秘境图赏',
                    text2:'魅族18Pro'
                },
                {
                    img:'images/homepage/42.png',
                    img1:'images/homepage/51.jpg',
                    text:'一楽拉面',
                    text1:'魅族 18ro |飞雪流光图赏',
                    text2:'魅族18Pro'
                },
            ],
             list13:[
                {
                    img:'images/homepage/43.png',    
                    text:'Flyme 9 轻新知意,灵感在握',
                },
                {
                    img:'images/homepage/44.jpg',    
                    text:'Flyme 隐私安全白皮书',
                },
            ],
                list14:[
                {
                    img:'images/homepage/45.jpg',    
                    text:'Flyme 9 轻新知意,灵感在握',
                },
                {
                    img:'images/homepage/46.jpg',    
                    text:'Flyme 隐私安全白皮书',
                },
            ],
        }
    }
}
</script>
<style>
*{
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-decoration: none;
}
</style>

<style scoped>
.head{
    position: relative;
    display: flex;
    width: 100%;
    margin-top:2vw;
    margin-bottom: 2vw;
}
.head>a{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    display: block;
}
.head>a img{
    width: 21vw;
    height: 11vw;
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
    background: url(../assets/homepage/1.svg)no-repeat 50%;
    background-size:100%;
}
.head-1 a:nth-of-type(2){
    width: 5vw;
    height: 5vw;
    background: url(../assets/homepage/2.svg)no-repeat 50%;
    background-size:100%;
    margin-left: 65vw;
}
.head-1 a:nth-of-type(3){
    width: 1vw;
    height: 5vw;
    background: url(../assets/homepage/3.svg)no-repeat 50%;
    background-size:100%;
}
/* --------------------------------------------------------- */
.classification{
    width: 100%;
}
/* .classification-1{

} */
.classification-1 ul{
    display: flex;
    justify-content: space-around;
}
.classification-1 li a{
    font-size: 3.6vw;
    color: black;
}
.classification-1 li:nth-of-type(1){
    border-bottom:1px solid #008cff;
    padding-bottom: 2vw;
}
.classification-1 li:nth-of-type(1) a{
    margin-bottom: 2vw;
    color: #008cff;
}
/* ---------------------------------------------------------- */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin-top: 2vw;
}
.my-swipe img{
    display: block;
    width: 100%;
}
/* ----------------------------------------------------------------- */
.one{
    background: #f7f7f7;
    width: 100%;
    display: flex;
    flex-grow:0;
    justify-content: space-around;
    padding:4vw 0;
    position: relative;
}
.one span{
    color: #999;
    font-size: 2.6vw;
}
.one img{
    width: 3.5vw;
    height: 3.5vw;
    margin-right:2vw;
}
/* -------------------------------------------------------- */
.two{
   padding-bottom:1vw;
   background: #f7f7f7;
}
.two-1{
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin:4vw 0;
    background: #fff;
}
.two-1 a{
    display: block;
}
.two-1 img{
    display: block;
    width: 13vw;
    height: 13vw;
    margin:0 auto;
}
.two-1 span{
    color: black;
    font-size: 3vw;
    line-height: 8vw;
}
/* ----------------------------------- */
.three ul{
    display: flex;
    background: #f7f7f7;
}
.three li{
    width: 50%;
}
.three li:nth-of-type(1) img{
    width: 100%;
}
.three li:nth-of-type(2) img{
    width: 100%;
}
/* -------------------------------------------------------- */
.four{
    background: #f7f7f7;
    padding-top:10vw;
}
.four div:nth-of-type(1) h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.four div:nth-of-type(1) span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom:5vw;
}
.four div:nth-of-type(2){
    background: #f7f7f7;
}
.four div:nth-of-type(2) img{
    width: 100%;
}
/* ------------------------------------------------- */
.five{
    display: flex;
    flex-wrap: wrap;
    background:#f7f7f7 ;
    align-items: center;
    justify-content: space-between;
    padding-top: 2vw;
}
.five>div{
    width: 49.2%;
    padding-top:6.2vw;
    padding-bottom: 4.9vw;
    margin-bottom: 1.1vw;
    background: #fff;
    text-align: center;
}
.five-2{
    width: 100%;
}
.five-2 p:nth-of-type(1){
    color:#333;
    font-size: 3.8vw;
    font-weight: 700;
}
.five-2 p:nth-of-type(2){
    color:#c00;
    border:1px solid #c00;
    line-height: 4.6vw;
    font-size:3.3vw;
    margin:2vw 7vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.five-2 p:nth-of-type(3){
    color:#c00;
    font-size: 3.8vw;
}
.five-2 s{
    color:#999;
    font-size: 3vw;
}
.five img{
    width: 100%;
}
/* ------------------------------------------------ */
.six{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.six-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.six-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
.six-2{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
}
.six-2 div:nth-of-type(1){
    width: 50%;
}
.six-2 div:nth-of-type(1) img{
    width: 100%;
    height: 100%;
}
.six-2 div:nth-of-type(2){
    width: 50%;
    background: #f55c5c;
    position: relative;
}
.six-2 div:nth-of-type(2) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.six-2 div:nth-of-type(2) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.six-2 div:nth-of-type(2) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.six-2 div:nth-of-type(2) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}
/* ----------------------- */
.six-3{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
}
.six-3 div:nth-of-type(1){
    width: 50%;
    background: #7063c9;
    position: relative;
}
.six-3 div:nth-of-type(1) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.six-3 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.six-3 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.six-3 div:nth-of-type(1) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}

.six-3 div:nth-of-type(2) img{
    width: 100%;
    height: 100%;
}
.six-3 div:nth-of-type(2){
    width: 50%;
}
/* ------------------------------------------ */
.six-4{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
    margin-top: 2vw;
}
.six-4-1{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.six-4-1>div{
    text-align: center;
}
.six-4-1>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
}
.six-4-1>div p:nth-of-type(2){
    font-size: 3.3vw;
    color: #999;
    margin:0 1.5vw;
    margin-top: 1.7vw;
    margin-bottom: 2.5vw;
}
.six-4-1>div span{
    font-size: 3.8vw;
    color: #c00;
}
.six-4-1 img{
    width: 100%;
}
/* ------------------------------------- */
.six-4-2{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.six-4-2>div{
    text-align: center;
}
.six-4-2>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
}
.six-4-2>div p:nth-of-type(2){
    color: #c00;
    border:1px solid #c00;
    line-height: 4.3vw;
    margin:0 1vw;
    white-space:nowrap;
    /* text-overflow: ellipsis; */
    overflow: hidden;
}
.six-4-2>div p:nth-of-type(2)>span{
    background: #c00;
    color: #fff;
    padding-right: 1vw;
    padding-bottom:1vw;
    padding-left:1vw;
}
.six-4-2>div{
    font-size: 3.8vw;
    color: #c00;
}
.six-4-2>div span>s{
    font-size: 3vw;
    color: #999;
    padding-left: 1vw;
}
.six-4-2 img{
    width: 100%;
}
/* --------------------------------------------------------------- */
.seven{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.seven-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.seven-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
.seven-2{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
}
.seven-2 div:nth-of-type(1){
    width: 50%;
}
.seven-2 div:nth-of-type(1) img{
    width: 100%;
    height: 100%;
}
.seven-2 div:nth-of-type(2){
    width: 50%;
    background: #f55c5c;
    position: relative;
}
.seven-2 div:nth-of-type(2) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.seven-2 div:nth-of-type(2) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.seven-2 div:nth-of-type(2) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.seven-2 div:nth-of-type(2) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}
/* ----------------------- */
.seven-3{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    margin-bottom: 2vw;
}
.seven-3 div:nth-of-type(1){
    width: 50%;
    background: #7063c9;
    position: relative;
}
.seven-3 div:nth-of-type(1) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.seven-3 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.seven-3 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.seven-3 div:nth-of-type(1) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}

.seven-3 div:nth-of-type(2) img{
    width: 100%;
    height: 100%;
}
.seven-3 div:nth-of-type(2){
    width: 50%;
}
/* ------------------------------------------ */
.seven-4{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
}
.seven-4-1{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.seven-4-1>div{
    text-align: center;
}
.seven-4-1>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.seven-4-1>div p:nth-of-type(2){
    font-size: 3.3vw;
    color: #999;
    margin:0 1.5vw;
    margin-top: 1.7vw;
    margin-bottom: 2.5vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.seven-4-1>div span{
    font-size: 3.8vw;
    color: #c00;
}
.seven-4-1 img{
    width: 100%;
}
/* ------------------------------------- */
.seven-4-2{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.seven-4-2>div{
    text-align: center;
}
.seven-4-2>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.seven-4-2>div p:nth-of-type(2){
    color: #999;
    font-size: 3.3vw;
    margin:0 1.5vw;
    margin-bottom: 2.5vw;
    margin-top: 1.7vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.seven-4-2>div{
    font-size: 3.8vw;
    color: #c00;
}
.seven-4-2>div span>s{
    font-size: 3vw;
    color: #999;
    padding-left: 1vw;
}
.seven-4-2 img{
    width: 100%;
}
/* ------------------------------------------------------------------------- */
.eight{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.eight-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.eight-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
.eight-2{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
}
.eight-2 div:nth-of-type(1){
    width: 50%;
}
.eight-2 div:nth-of-type(1) img{
    width: 100%;
    height: 100%;
}
.eight-2 div:nth-of-type(2){
    width: 50%;
    background: #f55c5c;
    position: relative;
}
.eight-2 div:nth-of-type(2) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.eight-2 div:nth-of-type(2) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.eight-2 div:nth-of-type(2) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.eight-2 div:nth-of-type(2) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}
/* ----------------------- */
.eight-3{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    margin-bottom: 2vw;
}
.eight-3 div:nth-of-type(1){
    width: 50%;
    background: #7063c9;
    position: relative;
}
.eight-3 div:nth-of-type(1) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.eight-3 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.eight-3 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.eight-3 div:nth-of-type(1) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}

.eight-3 div:nth-of-type(2) img{
    width: 100%;
    height: 100%;
}
.eight-3 div:nth-of-type(2){
    width: 50%;
}
/* ------------------------------------------ */
.eight-4{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
}
.eight-4-1{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.eight-4-1>div{
    text-align: center;
}
.eight-4-1>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.eight-4-1>div p:nth-of-type(2){
    font-size: 3.3vw;
    color: #999;
    margin:0 1.5vw;
    margin-top: 1.7vw;
    margin-bottom: 2.5vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.eight-4-1>div span{
    font-size: 3.8vw;
    color: #c00;
}
.eight-4-1 img{
    width: 100%;
}
/* ------------------------------------- */
.eight-4-2{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.eight-4-2>div{
    text-align: center;
}
.eight-4-2>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.eight-4-2>div p:nth-of-type(2){
    color: #999;
    font-size: 3.3vw;
    margin:0 1.5vw;
    margin-bottom: 2.5vw;
    margin-top: 1.7vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.eight-4-2>div{
    font-size: 3.8vw;
    color: #c00;
}
.eight-4-2>div span>s{
    font-size: 3vw;
    color: #999;
    padding-left: 1vw;
}
.eight-4-2 img{
    width: 100%;
}
/* ---------------------------------------------------------- */

.nine{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.nine-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.nine-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
.nine-2{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
}
.nine-2 div:nth-of-type(1){
    width: 50%;
}
.nine-2 div:nth-of-type(1) img{
    width: 100%;
    height: 100%;
}
.nine-2 div:nth-of-type(2){
    width: 50%;
    background: #f55c5c;
    position: relative;
}
.nine-2 div:nth-of-type(2) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.nine-2 div:nth-of-type(2) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.nine-2 div:nth-of-type(2) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.nine-2 div:nth-of-type(2) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}
/* ----------------------- */
.nine-3{
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    margin-bottom: 2vw;
}
.nine-3 div:nth-of-type(1){
    width: 50%;
    background: #7063c9;
    position: relative;
}
.nine-3 div:nth-of-type(1) h4{
    font-size: 4.6vw;
    width: 33.3vw;
    font-weight: 400;
    color: #fff;
    padding-top: 4vw;
    padding-left:4vw;   
}
.nine-3 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.nine-3 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 4.6vw;
    color: hsla(0,0%,100%,.7);
    padding-top: 2vw;
    padding-left:4vw;  
}
.nine-3 div:nth-of-type(1) i{
    width: 5vw;
    height: 0.5vw;
    background: #fff;
    position: absolute;
    top: 34vw;
    left: 4vw;
}

.nine-3 div:nth-of-type(2) img{
    width: 100%;
    height: 100%;
}
.nine-3 div:nth-of-type(2){
    width: 50%;
}
/* ------------------------------------------ */
.nine-4{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
}
.nine-4-1{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.nine-4-1>div{
    text-align: center;
}
.nine-4-1>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.nine-4-1>div p:nth-of-type(2){
    font-size: 3.3vw;
    color: #999;
    margin:0 1.5vw;
    margin-top: 1.7vw;
    margin-bottom: 2.5vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.nine-4-1>div span{
    font-size: 3.8vw;
    color: #c00;
}
.nine-4-1 img{
    width: 100%;
}
/* ------------------------------------- */
.nine-4-2{
    width: 49.2%;
    background: #fff;
    padding-top:6.2vw ;
    padding-bottom:4.9vw ;
    margin-bottom:1.1vw ;
}
.nine-4-2>div{
    text-align: center;
}
.ninet-4-2>div p:nth-of-type(1){
    font-size: 3.8vw;
    color: #333;
    font-weight: 700;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.nine-4-2>div p:nth-of-type(2){
    color: #999;
    font-size: 3.3vw;
    margin:0 1.5vw;
    margin-bottom: 2.5vw;
    margin-top: 1.7vw;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.nine-4-2>div{
    font-size: 3.8vw;
    color: #c00;
}
.nine-4-2>div span>s{
    font-size: 3vw;
    color: #999;
    padding-left: 1vw;
}
.nine-4-2 img{
    width: 100%;
}
/* ------------------------------------------------------------ */
.ten{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.ten-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.ten-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
/* ------------------------------------------ */
.ten-2{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
    margin-top: 2vw;
}
.ten-2-1{
    width: 49.2%;
    background: #fff;
    padding-bottom: 9vw;
}
.ten-2-1 div:nth-of-type(1){
    padding-top: 2vw;
    padding-left:2vw ;
}
.ten-2-1 div:nth-of-type(1) img{
    width: 5.5vw;
    border:1px solid #fff;
    border-radius:50%;
    float: left;
    margin-right: 1vw;
}
.ten-2-1 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    text-align: left;
    line-height: 6vw;
}
.ten-2-1 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 3.3vw;
    text-align: left;
    margin-top: 2vw;
}
.ten-2-1 div:nth-of-type(1) span{
    color: #999;
    font-size: 2.2vw;
    text-align: left;
    display: block;
    margin-top: 5vw;
}    
.ten-2-1>img{
    width: 100%;
}
/* ------------------------------------- */
.ten-2-2{
    width: 49.2%;
    background: #fff;
    padding-bottom: 9vw;
}
.ten-2-2 div:nth-of-type(1){
    padding-top: 2vw;
    padding-left:2vw ;
}
.ten-2-2 div:nth-of-type(1) img{
    width: 5.5vw;
    border:1px solid #fff;
    border-radius:50%;
    float: left;
    margin-right: 1vw;
}
.ten-2-2 div:nth-of-type(1) p:nth-of-type(1){
    font-size: 3.3vw;
    text-align: left;
    line-height: 6vw;
}
.ten-2-2 div:nth-of-type(1) p:nth-of-type(2){
    font-size: 3.3vw;
    text-align: left;
    margin-top: 2vw;
}
.ten-2-2 div:nth-of-type(1) span{
    color: #999;
    font-size: 2.2vw;
    text-align: left;
    display: block;
    margin-top: 5vw;
}    
.ten-2-2>img{
    width: 100%;
}
/* -------------------------------------------------------------------------- */

.eleven{
    background: #f7f7f7;
    padding-top:10vw;
    padding-bottom:5vw;
}
.eleven-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.eleven-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
/* ------------------------------------------ */
.eleven-2{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
    margin-top: 2vw;
}
.eleven-2-1{
    width: 49.2%;
    background: #fff;
}
.eleven-2-1>div p{
    line-height: 13vw;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 3.3vw;
}
.eleven-2-1>img{
    width: 100%;
}
/* ------------------------------------- */
.eleven-2-2{
    width: 49.2%;
    background: #fff;
}
.eleven-2-2>div p{
    line-height: 13vw;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 3.3vw;
}
.eleven-2-2>img{
    width: 100%;
}
/* --------------------------------------------------------- */
.twelve{
    background: #f7f7f7;
    padding-top:10vw;
}
.twelve-1 h3{
    background: #f7f7f7;
    font-size: 4.8vw;
    font-weight: 700;
    text-align: center;
}
.twelve-1 span{
    background: #008cff;
    width: 6vw;
    height: 0.7vw;
    display:block;
    margin:0 auto;
    margin-top:4vw;
    margin-bottom: 3vw;
}
/* ------------------------------------------ */
.twelve-2{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap:wrap ;
    background: #f7f7f7;
    margin-top: 2vw;
}
.twelve-2-1{
    width: 49.2%;
    background: #fff;
}
.twelve-2-1>div p{
    line-height: 13vw;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 3.3vw;
}
.twelve-2-1>img{
    width: 100%;
}
/* ------------------------------------- */
.twelve-2-2{
    width: 49.2%;
    background: #fff;
}
.twelve-2-2>div p{
    line-height: 13vw;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 3.3vw;
}
.twelve-2-2>img{
    width: 100%;
}
/* ----------------------------------------- */
.thirteen{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17.2vw;
    background: #f7f7f7;
}
.thirteen p{
    font-size:4.1vw ;
    color: #999;
    background: #f7f7f7;
}

/* <div class="fourteen">
                <div class="fourteen-1">
                    <div>
                        <img src="../../public/images/homepage/47.png" alt="">
                        <span>400-788-3333</span>
                    </div>
                    <div>
                        <img src="../../public/images/homepage/48.png" alt="">
                        <span>在线客服</span>
                    </div>
                </div>

                <div class="fourteen-2">
                    <div>
                        <span>粤ICP备13003602号-2合字B2-20170010</span>
                        <span>营业执照©2018 Meizu All rights reserved</span>
                    </div>
                    <div>
                        <img src="../../public/images/homepage/49.png" alt="">
                        <span>简体中文</span>
                    </div>
                </div>
            </div> */

.fourteen{
    width: 100%;
    text-align: center;
}
.fourteen-1{
    display: flex;
    justify-content: space-around;
    padding:0 3vw;
    padding-top: 6vw;
}
.fourteen-1 div:nth-of-type(1){
    width: 45%;
    border: 0.5vw solid #008cff;
    background: #008cff;
    border-radius:60px;
    display: flex;
}
.fourteen-1 div:nth-of-type(1) img{
    display: block;
    width: 15%;
    height: 60%;
    margin-top:3vw;
    margin-left:2vw;
}
.fourteen-1 div:nth-of-type(1) span{
    color: #fff;
    font-size: 5vw;
    display: block;
    line-height: 13vw;
}
.fourteen-1 div:nth-of-type(2){
    width: 45%;
    border: 0.5vw solid #008cff;
    background: #008cff;
    border-radius:60px;
    display: flex;
}
.fourteen-1 div:nth-of-type(2) img{
    display: block;
    width: 20%;
    height: 60%;
    padding-top:3vw;
    margin-right: 1vw;
    margin-left: 6vw;
}
.fourteen-1 div:nth-of-type(2) span{
    color: #fff;
    font-size: 5vw;
    display: block;
    line-height: 13vw;
}
.fourteen-2{
    display: flex;
    justify-content: space-around;
    padding: 5vw 4vw 0 5vw;
}
.fourteen-2 div:nth-of-type(1){
    width: 45%;
}
.fourteen-2 div:nth-of-type(1) span{
    color: #999;
    font-size: 2.2vw;
    text-align: left;
}
.fourteen-2 div:nth-of-type(2){
    width: 45%;
}
.fourteen-2 div:nth-of-type(2) img{
    width: 18px;
    height: 18px;
    margin-right: 1vw;
}
.fourteen-2 div:nth-of-type(2) span{
    font-size: 5vw;
}
</style>

