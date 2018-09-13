import React,{ PureComponent } from 'react'
import {
  WriterLitle,
  WriterItem,
  WriterList
} from '../style'
class Writer extends PureComponent {
  render(){
    return (
      <WriterList>
       <WriterLitle>
        推荐作者
        <div className ="switch">换一批</div>
       </WriterLitle>
       <WriterItem>
         <a className="writer-head-img" href="">
           <img alt="" src="https://upload.jianshu.io/users/upload_avatars/5889454/4ebc8c5d-39a5-4ea0-808f-23a8a0e78595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
         </a>
         <a className="writer-name" href="">众里鲟它千白渡</a>
         <p className="writer-info">写了39.1k字 · 95喜欢</p>
         <a className="addSee" href="">+关注</a>
       </WriterItem>
       <WriterItem>
         <a className="writer-head-img" href="">
           <img alt="" src="https://upload.jianshu.io/users/upload_avatars/5889454/4ebc8c5d-39a5-4ea0-808f-23a8a0e78595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
         </a>
         <a className="writer-name" href="">众里鲟它千白渡</a>
         <p className="writer-info">写了39.1k字 · 95喜欢</p>
         <a className="addSee" href="">+关注</a>
       </WriterItem>
       <WriterItem>
         <a className="writer-head-img" href="">
           <img alt="" src="https://upload.jianshu.io/users/upload_avatars/5889454/4ebc8c5d-39a5-4ea0-808f-23a8a0e78595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
         </a>
         <a className="writer-name" href="">众里鲟它千白渡</a>
         <p className="writer-info">写了39.1k字 · 95喜欢</p>
         <a className="addSee" href="">+关注</a>
       </WriterItem>
       <a className="link-more-btn" href="">查看全部  ></a>
      </WriterList>
    )
  }
}
export default Writer
