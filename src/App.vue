<template>
  <div id="app">  
    <router-view></router-view> 
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/division">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="mine">我的</van-tabbar-item>
    </van-tabbar>
   
  </div>
</template>
<script>
export default {
  data(){
    return{
       active:0
    }
  }
}
</script>
<style lang="scss">


  
</style>