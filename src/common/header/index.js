import React from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import  * as  actionCreators  from './store/actionCreators';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
const Header = (props)=>{
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className ='left active'>首页</NavItem>
        <NavItem className ='left'>下载App</NavItem>
        <NavItem className ='right'>登录</NavItem>
        <NavItem className ='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={500}
            classNames={"slide"}
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handInputFocus}
              onBlur={props.handleInputBlur}>
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe624;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'><i className="iconfont">&#xe61f;</i>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state)=>{
  return {
    focused:state.header.focused
  }
}
const mapDispatchToProps =(dispatch)=>{
  return {
    handInputFocus(){
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
