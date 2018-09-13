// 将state变为immutable对象
import  { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState =fromJS({
  title: '',
  content:''
})
// 在reducer中时刻要注意如果需要设置的值传过来的是js对象，要用fromJS方法转化为immutable对象
export default (state=defaultState, action)=>{
  switch (action.type){
    case constants.GET_DETAIL:
      return state.set("title",action.result.title).set("content",action.result.content)
    default:
      return state
  }
}
