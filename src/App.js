/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2020-12-26 13:59:23
 */
import React from 'react';
import './App.css';

import {  Provider  } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from './models/index.tsx'
import loadable from '@loadable/component'

const Home = loadable(() => import('./modules/home'))
// const Redux = loadable(() => import('./modules/redux'))
const Login = loadable(() => import('./modules/login'))
const Index = loadable(() => import('./modules/index'))
function App() {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
         {/* {renderRender(mainRouters)} */}
            <Route path="/" exact component={Login}/>
            <Route path="/home"  component={Home}/>
            <Route path="/index"  component={Index}/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
