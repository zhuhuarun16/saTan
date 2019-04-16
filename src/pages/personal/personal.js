import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,ScrollView} from '@tarojs/components'
import { observer, inject,} from '@tarojs/mobx'
import './personal.scss'
import sign_In_Img from "../../img/personal/sign_In_Img.png";
import member_Img from "../../img/personal/member.png";
import wait_Shipment from "../../img/personal/wait_Shipment.png";
import shipment from "../../img/personal/shipment.png";
import estimate from "../../img/personal/estimate.png";
import after_Sale from "../../img/personal/after_Sale.png";
import payment from "../../img/personal/payment.png";
import item2 from "../../img/personal/item2.jpg";



@inject('personalStore')
@observer
class Personal extends Component {

  config = {
    navigationBarTitleText: '个人'
  };


  render (){
    console.log(this.props);
    const {personalStore} = this.props;
    let property = personalStore.property;

    let order = personalStore.order;
    let img = "../../img/personal/header_Img.jpg";

    return (
      <View className='container'>
        <ScrollView scrollY style='height:100%'>
          <View className='header'>
            <View className='head_Content'>
              <Image className='header_Img' src={require(`${img}`+ '')}></Image>
              <View className='user_Msg'>
                <Text className='phone'>18778478122</Text>
                <View className='sign_In'>
                  <Image className='icon' src={sign_In_Img}></Image>
                  <Text className='cont'>每日签到</Text>
                  <Text className='cont next'>&gt;</Text>
                </View>
              </View>
              <View className='member'>
                <Image className='member_Img' src={member_Img}></Image>
                <Text className='recharge'>充值会员</Text>
              </View>
            </View>
          </View>
          <View className='center'>
            {/*我的订单*/}
            <View className='item ' style='margin-top:0px;'>
              <View className='title'>
                <Text className='text'>{order.title}</Text>
                <Text className='next'>&gt;</Text>
              </View>
              <View className='item_content'>
                <View className='box'>
                  <Image className='payment_Img' src={payment}></Image>
                  <Text className='text'>待付款</Text>
                </View>
                <View className='box'>
                  <Image className='wait_Shipment' src={wait_Shipment}></Image>
                  <Text className='text'>待发货</Text>
                </View>
                <View className='box'>
                  <Image className='shipment' src={shipment}></Image>
                  <Text className='text'>已发货</Text>
                </View>
                <View className='box'>
                  <Image className='estimate' src={estimate}></Image>
                  <Text className='text'>待评价</Text>
                </View>
                <View className='box'>
                  <Image className='after_Sale' src={after_Sale}></Image>
                  <Text className='text'>退换/售后</Text>
                </View>
              </View>
              <Image className='item_Cont_Img' src={require('../../img/personal/item1.jpg')}></Image>
            </View>
            {/*我的资产*/}
            <View className='item '>
              <View className='title'>
                <Text className='text'>{property.title}</Text>
                <Text className='next'>&gt;</Text>
              </View>
              <View className='item_content'>
                {
                  property.content.map((item,index)=>{
                    return (
                      <View className='box' key={index}>
                        <Text className='item_Num'>{(index==0 || index==3)?"￥":""}{item.itemContent}</Text>
                        <Text className='text'>{item.name}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            {/*/!*节日狂欢*!/*/}
            <View className='item '>
              <View className='title'>
                <Text className='text'>节日狂欢</Text>
                <Text className='next'>&gt;</Text>
              </View>
              <Image className='item_Cont_Img' src={item2}></Image>
            </View>
            {/*我的服务*/}
            <View className='item '>
              <View className='title'>
                <Text className='text'>我的服务</Text>
                <Text className='next'>&gt;</Text>
              </View>
              <View className='item_content'>
                <View className='box'>
                  <Image className='payment_Img' src={payment}></Image>
                  <Text className='text'>待付款</Text>
                </View>
                <View className='box'>
                  <Image className='wait_Shipment' src={wait_Shipment}></Image>
                  <Text className='text'>待发货</Text>
                </View>
                <View className='box'>
                  <Image className='shipment' src={shipment}></Image>
                  <Text className='text'>已发货</Text>
                </View>
                <View className='box'>
                  <Image className='estimate' src={estimate}></Image>
                  <Text className='text'>待评价</Text>
                </View>
                <View className='box'>
                  <Image className='after_Sale' src={after_Sale}></Image>
                  <Text className='text'>退换/售后</Text>
                </View>
              </View>
              <View className='item_content'>
                <View className='box'>
                  <Image className='payment_Img' src={payment}></Image>
                  <Text className='text'>待付款</Text>
                </View>
                <View className='box'>
                  <Image className='wait_Shipment' src={wait_Shipment}></Image>
                  <Text className='text'>待发货</Text>
                </View>
                <View className='box'>
                  <Image className='shipment' src={shipment}></Image>
                  <Text className='text'>已发货</Text>
                </View>
                <View className='box'>
                  <Image className='estimate' src={estimate}></Image>
                  <Text className='text'>待评价</Text>
                </View>
                <View className='box'>
                  <Image className='after_Sale' src={after_Sale}></Image>
                  <Text className='text'>退换/售后</Text>
                </View>
              </View>
            </View>
          </View>
          <View style="width:100%;height:30px;"></View>
        </ScrollView>
      </View>
    )
  }
}

export default Personal
