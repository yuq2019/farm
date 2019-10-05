<template>
  <div>
        <van-tabs>

          <!--登录-->
          <van-tab title="登录">
            <van-cell-group>
                <van-field label="用户名" clearable placeholder="请输入用户名"  required  v-model="loginUserName"></van-field>
                <van-field label="密码" type="password" clearable placeholder="请输入密码" required   v-model="loginPassWord"></van-field>
            </van-cell-group>

            <div>
              <van-button @click="registHandle()" type="primary" size="large">登录</van-button>
            </div>
          </van-tab>
          
          <!--注册-->
          <van-tab title="注册">
             <van-cell-group>
                <van-field label="用户名" clearable placeholder="请输入用户名"  required  v-model="registUserName"></van-field>
                <van-field label="密码" type="password" clearable placeholder="请输入密码" required   v-model="registPassWord"></van-field>
            </van-cell-group>
            
            <div>
              <van-button @click="registHandler()" type="primary" size="large">注册</van-button>
            </div>
          </van-tab>
         
        </van-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'

export default {
  data(){
    return{
        loginUserName:'',
        loginPassWord:'',
        registUserName:'',
        registPassWord:''
    }
  },
  methods: {
    //注册的处理方法
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUserName,
          passWord:this.registPassWord
        }
      }).then(res=>{

      }).catch(err=>{

      })

    }
  },
}
</script>
<style lang="scss">
  
</style>