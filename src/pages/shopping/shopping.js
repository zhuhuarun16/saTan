import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './shopping.scss'


@inject('counterStore')
@observer
class Shopping extends Component {

  config = {
    navigationBarTitleText: '购物车'
  };

  componentWillMount () {

  }

  render () {
    return (
      <View className='index'>
        购物车
      </View>
    )
  }
}

export default Shopping
