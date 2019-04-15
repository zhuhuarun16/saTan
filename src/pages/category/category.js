import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './category.scss'


@inject('counterStore')
@observer
class Category extends Component {

  config = {
    navigationBarTitleText: '物品种类'
  };

  componentWillMount () {
    console.log("aaaa");
  }

  render () {
    return (
      <View className='index'>
          aaaa
      </View>
    )
  }
}

export default Category
