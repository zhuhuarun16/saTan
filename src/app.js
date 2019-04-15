import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import Category from './pages/category'
import Guide from './pages/guide'
import Personal from './pages/personal'
import Shopping from './pages/shopping'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/category/category',
      'pages/guide/guide',
      'pages/personal/personal',
      'pages/shopping/shopping',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f2eee9',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black' ,
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./img/pages/index.png",
        selectedIconPath: "./img/pages/index-active.png"
      }, {
        pagePath: "pages/category/category",
        text: "分类",
        iconPath: "./img/pages/category.png",
        selectedIconPath: "./img/pages/category-active.png"
      },{
        pagePath: "pages/guide/guide",
        text: "导购",
        iconPath: "./img/pages/guide.png",
        selectedIconPath: "./img/pages/guide-active.png"
      },{
        pagePath: "pages/shopping/shopping",
        text: "购物车",
        iconPath: "./img/pages/shopping.png",
        selectedIconPath: "./img/pages/shopping-active.png"
      },{
        pagePath: "pages/personal/personal",
        text: "个人",
        iconPath: "./img/pages/personal.png",
        selectedIconPath: "./img/pages/personal-active.png"
      }],
      color: '#666',
      selectedColor: '#666',
      backgroundColor: '#fff',
    }

  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
        <Category />
        <Guide />
        <Shopping />
        <Personal />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
