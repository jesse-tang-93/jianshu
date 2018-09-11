import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () =>({
  type : actionTypes.SEARCH_FOCUS
});
export const searchBlur = () =>({
  type : actionTypes.SEARCH_BLUR
})
export const mouseEnter =()=>({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeave =()=>({
  type: actionTypes.MOUSE_LEAVE
})
export const changePage =(page)=>({
  type: actionTypes.CHANGE_PAGE,
  page
})

// 不需要抛出的方法
const changeList =(data)=>({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),// 此处将ajax获取的数据由js对象转换为immutable对象
  totalPage: Math.ceil(data.length / 10)  // 向上取整
})
export const getList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
        const data = res.data.data
        dispatch(changeList(data))
    }).catch(()=>{
      console.log('error')
    })
  }
}
