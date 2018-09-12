import React,{ Component } from 'react'
import {connect} from 'react-redux'
import{
  RecommendList,
  RecommendItem
} from '../style'
class Recommend extends Component {
  render(){
    return (
      <div>
        <RecommendList>
          {
            this.props.recommendImg.map((item)=>{
              return(
                <RecommendItem key={item.get('id')}>
                  <a className="RecommendLink" href="">
                     <img className="RecommendPic" src={item.get("imgUrl")} alt=""/>
                  </a>
                </RecommendItem>
              )
            })
          }
        </RecommendList>
      </div>
    )
  }
}
const mapState = (state)=>{
  return ({
    recommendImg: state.getIn(["home","recommendImg"])
  })
}
export default connect(mapState,null)(Recommend)
