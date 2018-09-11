import * as actionTypes from './constants'
// 将state变为immutable对象
import  { fromJS } from 'immutable'
const defaultState =fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage:1// immutable的数组

})
export default (state=defaultState, action)=>{
  switch (action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage',action.totalPage)
      //多个set链式可用merge()方法 ，它接收一个对象
      // return state.merge({
      //   list: action.date,
      //   totalPage: action.totalPage
      // });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)

    default:
      return state
  }
}
