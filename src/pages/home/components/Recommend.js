import React,{ Component } from 'react'
import {connect} from 'react-redux'
import{
  RecommendList,
  RecommendItem,
  DownQcoder
} from '../style'
class Recommend extends Component {
  constructor(props){
    super(props)
    this.state={
      qcoderShow:false
    }
  }
  qocdersShow(){
    if (this.state.qcoderShow){
      return (
        <div className="qcoder-box">
           <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </div>
      )
    }else {
      return null
    }
  }
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
        <DownQcoder>
          <a href="" onMouseEnter={()=>{this.setState({qcoderShow:true})}} onMouseLeave={()=>{this.setState({qcoderShow:false})}}>
            <img className="qcoder-img-min" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
            <div className="info">
               <p className="down-title">下载简书手机APP  ></p>
               <p className="down-text">随时随地创作内容</p>
            </div>
            {
              this.qocdersShow()
            }
          </a>
        </DownQcoder>
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
