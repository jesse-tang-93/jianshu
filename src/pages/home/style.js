import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
  }
`;
export const HomeRight = styled.div`
  width:240px;
  float:right;
`;
//TopicWrapper
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
  .moreTopic{
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
    color: #787878;
    margin-left:18px;
    text-decoration: none;
  }
`
//TopicItem
export const TopicItem = styled.div`
  padding-right:10px;
  margin-left:18px;
  margin-bottom:18px;
  float:left;
  background:#f7f7f7;
  border:1px solid #dcdcdc;
  height:32px;
  line-height:32px;
  font-size:14px;
  border-radius:4px;
  .topic-pic{
    width:32px;
    height:32px;
    display:block;
    float:left;
    margin-right:10px;
  }
`
//ListItem\
export const ListItem = styled.div`
 padding:20px 0;
 border-bottom:1px solid #dcdcdc;
 overflow:hidden;
 .pic{
   display:block;
   float:right;
   width:125px;
   border-radius:10px;
 }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    font-size:18px;
    font-weight:bold;
    line-height:27px;
    color:#333;
  }
  ,desc{
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
 `
 //RecommendList
 export const RecommendList = styled.div`
   padding-top:30px;
 `
 export const RecommendItem = styled.div`
   margin-bottom:6px;
   .RecommendPic{
     display:block;
     width:100%;
     height: 50px;
   }
 `
 export const DownQcoder= styled.div`
  box-sizing:border-box;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  position:relative;
  .qcoder-img-min{
    width:60px;
    height:60px;
    vertical-align: middle;
  }
  .info{
    display:inline-block;
    margin-left:8px;
    vertical-align: middle;
  }
  .qcoder-box{
    background:#fff;
    box-sizing: border-box;
    padding: 10px;
    position:absolute;
    top:-185px;
    width:180px;
    height:180px;
    border:1px solid #333;
    border-radius:3px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    img{
      max-width:100%;
    }
  }
  .down-title{
    font-size: 13px;
    color: #333;
  }
  .down-text{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
 `
 /**
 *Writer ui
 */
export const WriterLitle = styled.div`
  overflow: hidden;
  margin-top: 30px;
  font-size: 14px;
  color: #969696;
  height: 20px;
  line-height: 20px;
 .switch{
   float:right;
 }
`
export const WriterItem = styled.div`
   position:relative;
   overflow:hidden;
   margin-top:15px;
  .writer-head-img{
      float:left;
      display:block;
      width:48px;
      height:48px;
    img{
      width:48px;
      height:48px;
      border-radius:50%;
    }
  }
  .writer-name{
    margin-top: 5px
    padding-top: 5px;
    font-size: 14px;
    display: block;
    padding-left:58px;
    text-decoration: none;
    color:#333;
  }
  .writer-info{
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
    padding-left:58px;
  }
  .addSee{
    position:absolute;
    right:0;
    top:0;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    text-decoration: none;
  }
`
export const WriterList = styled.div`
 .link-more-btn{
   margin-top:20px;
   height:30px;
   line-height:30px;
   background:#f7f7f7;
   border:1px solid #dcdcdc;
   border-radius:4px;
   display:block;
   text-align:center;
   font-size: 13px;
   color: #787878;
   text-decoration: none;
 }
`
