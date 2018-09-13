import React,{ PureComponent } from 'react'
import {connect} from 'react-redux'
import {LoginWrapper} from './style'
class Login extends PureComponent {
  render(){
    return (
       <LoginWrapper></LoginWrapper>
    )
  }
}
const mapState=(state)=>{

}
const mapDispatch=(dispatch)=>{


}
export default connect(mapState,mapDispatch)(Login)
