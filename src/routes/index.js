/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
 const host = "https://miniapp.you.163.com";
 const hostM = "https://m.you.163.com";
/* eslint-enable */
// https://miniapp.you.163.com
// pic
//  CDN = 'https://yanxuan.nosdn.127.net';

// home

let api  = {
  API_HOME : `${host}/xhr/index/index.json`,
  API_HOME_SEARCH_COUNT : `${host}/xhr/search/displayBar.json`,
  API_HOME_PIN : `${hostM}/pin/min/item/recommend.json`,
  API_HOME_RECOMMEND : `${host}/xhr/rcmd/index.json`,

// cate
  API_CATE : `${host}/xhr/list/category.json`,
  API_CATE_SUB : `${host}/xhr/list/subCate.json`,
  API_CATE_SUB_LIST : `${host}/xhr/list/l2Items2.json`,

// cart
  API_CART : `${host}/xhr/promotionCart/getCarts.json`,
  API_CART_NUM : `${host}/xhr/promotionCart/getMiniCartNum.json`,
  API_CART_RECOMMEND : `${host}/xhr/rcmd/cart.json`,
  API_CART_ADD : `${host}/xhr/promotionCart/add.json`,
  API_CART_UPDATE : `${host}/xhr/promotionCart/update.json`,
  API_CART_UPDATE_CHECK : `${host}/xhr/promotionCart/updateCheck.json`,

// user
  API_USER : `${host}/xhr/user/getDetail.json`,
  API_USER_LOGIN : `${host}/xhr/u/mailLogin.json`,
  API_CHECK_LOGIN : `${host}/xhr/u/checkLogin.json`,

// item
  API_ITEM : `${host}/xhr/item/detail.json`,
  API_ITEM_RECOMMEND : `${host}/xhr/rcmd/itemDetail.json`
};

export default api
