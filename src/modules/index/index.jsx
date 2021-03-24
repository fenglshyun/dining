/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-14 19:14:59
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Sider } from "./component/Sider";
import InfoTitleContainer from "./component/InfoTitle";
import Approve from "./page/approve"
import AddMenu from "./page/addMenu"
import AddMenuType from "./page/addMenuType"
import  style  from "./index.module.less"

const Index = props => {
 return (
   <div>
     <div>
       <InfoTitleContainer></InfoTitleContainer>
     </div>
     <div className={style.side}>
     <Sider></Sider>
     </div>
     
    {/* <InfoTitleContainer></InfoTitleContainer> */}
     <div  className={style.switch}>
     
    <Switch>
      <Route exact path="/index/approve" component={Approve}/>
      <Route exact path="/index/addMenu" component={AddMenu}/>
      <Route exact path="/index/addMenuType" component={AddMenuType}/>
    </Switch>
     
     </div>
     
   </div>
 )
  
      
}

const mapState = state => ({
    count: state.count
})

const mapDispatch = ({

})

const IndexContainer = connect(mapState, mapDispatch)(Index)
export default IndexContainer;