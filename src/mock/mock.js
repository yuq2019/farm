import Mock from 'mockjs'


let Random=Mock.Random;
let productData=req=>{
    let productList=[];//存放农机信息的数组
    for(let i=0;i<100;i++){
        let product={
            name:Random.ctitle(5,20),
            img:Random.dataImage(),
            price:Random.integer(1000,10000),
            owner:Random.cname()      
        };
        productList.push(product);
        
    }
    return productList
}
Mock.mock('http://www.a.com/getLikeItem',productData)