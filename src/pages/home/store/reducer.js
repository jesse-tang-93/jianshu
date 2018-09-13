// 将state变为immutable对象
import  { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState =fromJS({
  topicList:[],
  articleList: [],
  recommendImg:[],
  articlePage:1,
  showScroll: false
})
// 在reducer中时刻要注意如果需要设置的值传过来的是js对象，要用fromJS方法转化为immutable对象
export default (state=defaultState, action)=>{
  switch (action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:action.topicList,
        articleList:action.articleList,
        recommendImg:action.recommendImg
      });
    case constants.ADD_HOME_LIST:
       console.log(action)
       // return state.set("articleList",state.get('articleList').concat(action.list))//concat 追加
       return state.merge({
         articleList: state.get('articleList').concat(action.list),
         articlePage: action.page + 1
       });
    case constants.TOGGLE_SCROLL_TOP:
       return state.set("showScroll",action.show)
    default:
      return state
  }
}
