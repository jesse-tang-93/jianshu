import { combineReducers } from 'redux-immutable'
import {reducer as headerRducer } from '../common/header/store'
// redux-immutable 将最外层的state转变为immutable对象
const reducer = combineReducers({  // 引入redex-immutable之后，现在它是一个immutable对象
  header : headerRducer
})
export default  reducer
