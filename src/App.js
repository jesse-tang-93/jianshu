import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Header from './common/header'

// 组件
import Home from './pages/home'
import Detail from './pages/detail'
//exact 表示当路径完全匹配，指定跳转到页面
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
