import React,{ PureComponent } from 'react'
import {connect} from 'react-redux'
import { ListItem,ListInfo,LoadMore } from '../style'
import { actionCreators }  from '../store'
import {Link} from 'react-router-dom'
class List extends PureComponent {
  render(){
    const {articleList,getMoreList,page} = this.props
    return (
      <div>
        {articleList.map((item,index)=>{
          return (
            <Link  key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img className="pic" alt="" src={item.get('imgUrl')}/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
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
