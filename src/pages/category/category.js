import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import api from '../../routes/index'
import './category.scss'



@inject('counterStore')
@observer
class Category extends Component {

  config = {
    navigationBarTitleText: '物品种类'
  };

  componentWillMount () {
    Taro.request({
      url:api.API_CATE
    })
      .then(r=>{
        console.log(r)
      })
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
