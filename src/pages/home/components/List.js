import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { ListItem,ListInfo,LoadMore } from '../style'
import { actionCreators }  from '../store'
class List extends Component {
  render(){
    const {articleList,getMoreList,page} = this.props
    return (
      <div>
        {articleList.map((item,index)=>{
          return (
            <ListItem key={index}>
              <img className="pic" alt="" src={item.get('imgUrl')}/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        <LoadMore onClick={()=>getMoreList(page)}>更多内容</LoadMore>
      </div>
    )
  }
  componentDidMount(){
     console.log(this.props)
  }
}
const mapStateToProps =(state)=>{
  return {
    articleList:state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
  }
}
const mapDispatch =(dispatch)=>{
  return {
    getMoreList(page){
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps,mapDispatch)(List)
