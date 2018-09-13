import axios from 'axios'
import * as constants from './constants'
const getDetailAction =(result)=>{
  return ({
    type:constants.GET_DETAIL,
    result:result
  })
}
export const getDetail =(id)=>{
  return (dispatch)=>{
    axios.get('/api/detail.json?id='+ id).then((res)=>{
      const result= res.data.data
      dispatch(getDetailAction(result))
    }).catch(()=>{
      console.log("获取失败")
    })
  }
}
