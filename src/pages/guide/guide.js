import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './guide.scss'


@inject('counterStore')
@observer
class Guide extends Component {

  config = {
    navigationBarTitleText: '导购经典'
  };

  componentWillMount () {
    console.log("aaaa");
  }

  render () {
    return (
      <View className='index'>
        精品导购
      </View>
    )
  }
}

export default Guide
