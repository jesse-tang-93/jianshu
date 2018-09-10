import { combineReducers } from 'redux'
import {reducer as headerRducer } from '../common/header/store'

const reducer = combineReducers({
  header : headerRducer
})
export default  reducer
