import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = (result)=>({
  type:constants.CHANGE_HOME_DATA,
  topicList:fromJS(result.topicList),
  articleList:fromJS(result.articleList),
  recommendImg:fromJS(result.recommendImg)
})
const addHomeList =(result,page)=>{
  return ({
    type :constants.ADD_HOME_LIST,
    list:fromJS(result),  // 若要传递获取的js对象数据,先转化为immutable对象,immutable也提供了List方法，List将普通数组转出immutable的数组
    page:fromJS(page)
  })
}
export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
       const result =res.data.data
       dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList =(page) =>{
  return (dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then((res)=>{
       const result =res.data.data
       dispatch(addHomeList(result,page))
    })
  }
}
export const toggleTopShow =(show)=>{
  return ({
    type:constants.TOGGLE_SCROLL_TOP,
    show
  })
}
