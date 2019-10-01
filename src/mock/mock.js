import Mock from 'mockjs'
import data from './data.json'
Mock.mock('http://www.weichuang.com/getList',{data: data.list});

let Random=Mock.Random;
let productData=req=>{
    let productList=[];//存放农机信息的数组
    for(let i=0;i<100;i++){
        let product={
            name:Random.ctitle(5,20),
            img:Random.dataImage('100*100','农机'+Random.integer())
        }
    }
}