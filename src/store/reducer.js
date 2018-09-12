import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer } from '../common/header/store'
import {reducer as homeReducer } from '../pages/home/store'
// redux-immutable 将最外层的state转变为immutable对象
const reducer = combineReducers({  // 引入redex-immutable之后，现在它是一个immutable对象
  header :headerReducer,
  home: homeReducer
})
export default  reducer
