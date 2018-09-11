import  style from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = style.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;
export const Logo = style.a.attrs({href: './'})`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic}) 0 0 no-repeat;
  background-size:contain;
`;
export const Nav = style.div`
  width:960px;
  margin:0 auto;
  height:100%;
`;
export const NavItem =style.div`
  line-height:56px;
  padding:0 15px;
  fonst-size:17px;
  colot:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;
export const SearchWrapper = style.div`
  float:left;
  position:relative;
  .zoom {
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`;
export const NavSearch  = style.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  margin-top:9px;
  padding:0 30px 0 20px;
  box-sizing: border-box;
  background:#eee;
  font-size:14px;
  margin-left:20px;
  color:#777;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
     widht:160px;
  }
`;
export const SearchTitle = style.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;
export const SearchInfo = style.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  background:#fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2)
`;
export const SearchInfoSwitch = style.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transfrom-origin:center center;
  }
`;
export const SearchInfoItem = style.a`
  font-size:12px;
  padding :0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
  display:block;
  float:left;
  cursor:pointer;
`;
export const Addition = style.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;
export const Button = style.div`
  float:right;
  font-size:14px;
  border-radius:19px;
  line-height:38px;
  margin-top:9px;
  border:1px solid #ea6f5a;
  margin-right:20px;
  padding:0 20px;
  &.reg{
    color:#ea6f5a;
  }
  &.writting{
    color:#fff;
    background:#ea6f5a;
  }
`;
