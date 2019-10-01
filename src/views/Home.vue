<template>
 <div>
   <van-nav-bar title="首页" class="nav-title">
       <van-icon name="search" slot="left"></van-icon>
       <van-icon name="cart" slot="right"></van-icon>
   </van-nav-bar>

   <div class="lunbo">
       <van-swipe :autoplay="5000">
         <van-swipe-item  class="lunbo-item" v-for="(item,index) in lunboItem" :key="index">
             <img v-lazy="item.imgSrc" alt="">
             </van-swipe-item> 
       </van-swipe>
   </div>

   <div>
       <div class="hot">
           <p class="hot-title">热门商品</p>
           <swiper class="hot-swiper" :options="swiperOption">
               <swiper-slide v-for="(item,index) in hotProduces" :key="index" >
                   <div class="hot-swiper-content">
                       <img :src="item.img" alt="">
                       <div>{{item.name}}</div>
                       <div>${{item.price}}</div>
                   </div>
               </swiper-slide>
           </swiper>
       </div>
   </div>
 </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
      return{
          lunboItem:[
              {
                  name:'img1',
                  imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569858203227&di=ddae71fc39507a795df9a2faa0fd17c2&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F11%2F81%2F16pic_1181301_b.jpg'
              },{
                   name:'img2',
                  imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1781623736,2314864001&fm=15&gp=0.jpg'
              },{
                   name:'img3',
                  imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569858203234&di=024585eb2b12fb8764de86dbd3369f2f&imgtype=0&src=http%3A%2F%2Fci.xiaohongshu.com%2F11c5cc36-b2bb-468a-83d8-59db1cfe3f57%40r_750w_750h_ss1.jpg'
              },{
                   name:'img4',
                  imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569858203233&di=58736de863dd5c876500513bd4f5116c&imgtype=0&src=http%3A%2F%2Fwww.ixueyi.com%2FGetImges%2F57001-60000%2F57301%2F201501231529093580.jpeg'
              }
          ],
          hotProduces:[
              {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              }, {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              },{
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              }, {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              }, {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              }, {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              },{
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              }, {
                  "name":"xx1",
                  "img":'https://img1.qjy168.com/thumb.php?f=provide/2019/01/08/5874122_20190108151329.jpg&w=300&h=200',
                  "price":"1000",
                  "componey":"fff",
                  "city":"ggg"
              },
          ],
          swiperOption:{
            slidesPerView:3
  }
      }
  },
  components: {
    swiper,
    swiperSlide
  },
  
  
}
</script>

<style lang="scss">


  .lunbo{
      height: 4rem;
      &-item{
          img{
              height: 4rem;
              width:100%;
          }
      }
  }

  .hot{
      &-title{
          width:100%;
          height:0.5rem;
          padding-left: 0.2rem;
          line-height: 0.5rem;
          box-sizing: border-box;
      }
      
      &-swiper{
       &-content{
          width:2rem;
          text-align: center;
          height: 2rem;
      }
  }
  }

 .nav-title{
     position: fixed;
     width:100%;
     top:0;
 }
  
</style>