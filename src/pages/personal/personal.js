import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,ScrollView} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './personal.scss'
import header_Img from "../../img/personal/header_Img.jpg";
import sign_In_Img from "../../img/personal/sign_In_Img.png";
import member_Img from "../../img/personal/member.png";
import wait_Shipment from "../../img/personal/wait_Shipment.png";
import shipment from "../../img/personal/shipment.png";
import estimate from "../../img/personal/estimate.png";
import after_Sale from "../../img/personal/after_Sale.png";
import payment from "../../img/personal/payment.png";
import item1 from "../../img/personal/item1.jpg";
import item2 from "../../img/personal/item2.jpg";



@inject('counterStore')
@observer
class Personal extends Component {

  config = {
    navigationBarTitleText: '个人主页'
  };

  componentWillMount () {

  }

  render () {
    return (
      <ScrollView className='container' scrollY >
        <View className='header'>
          <View className='head_Content'>
            <Image className='header_Img' src={header_Img}></Image>
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
              <Text className='text'>我的订单</Text>
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
            <Image className='item_Cont_Img' src={item1}></Image>
          </View>
          {/*我的资产*/}
          <View className='item '>
            <View className='title'>
              <Text className='text'>我的资产</Text>
              <Text className='next'>&gt;</Text>
            </View>
            <View className='item_content'>
              <View className='box'>
                <Text className='item_Num'>￥0</Text>
                <Text className='text'>回馈金</Text>
              </View>
              <View className='box'>
                <Text className='item_Num'>2</Text>
                <Text className='text'>红包</Text>
              </View>
              <View className='box'>
                <Text className='item_Num'>5</Text>
                <Text className='text'>优惠卷</Text>
              </View>
              <View className='box'>
                <Text className='item_Num'>￥50</Text>
                <Text className='text'>津贴</Text>
              </View>
              <View className='box'>
                <Text className='item_Num'>2</Text>
                <Text className='text'>礼品卡</Text>
              </View>
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
      </ScrollView>
    )
  }
}

export default Personal
