import {observable} from "mobx"

let personalStore = observable({
  order: {
    title:"我的订单",
    content:[
      {
        img:"../../img/personal/payment.png",
        name:"待付款"
      },{
        img:"../../img/personal/wait_Shipment.png",
        name:"待发货"
      },{
        img:"../../img/personal/shipment.png",
        name:"已发货"
      },{
        img:"../../img/personal/estimate.png",
        name:"待评价"
      },{
        img:"../../img/personal/after_Sale.png",
        name:"退换/售后"
      },
    ],
    img:'../../img/personal/item1.jpg'
  },
  property: {
    title:"我的资产",
    content:[
      {
        itemContent:0,
        name:"回馈金"
      },{
        itemContent:2,
        name:"红包"
      },{
        itemContent:5,
        name:"优惠卷"
      },{
        itemContent:50,
        name:"津贴"
      },{
        itemContent:2,
        name:"礼品卡"
      },
    ],
  },
});
export default personalStore
