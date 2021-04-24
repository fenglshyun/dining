/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-14 19:14:59
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Sider from "./component/Sider";
import InfoTitleContainer from "./component/InfoTitle";
import Approve from "./page/approve"
import AddMenu from "./page/addMenu"
import AddMenuType from "./page/addMenuType"
import MenuList from "./page/menuList"
import Order from "./page/order"
import WhitePage from "./page/whitePage"
import { StudentInfo, StudentHealth, Journey, Come, QuarantineSet } from "./page/epidemic"
import  style  from "./index.module.less"

const Index = props => {
 return (
   <div>
     <div>
       <InfoTitleContainer></InfoTitleContainer>
     </div>
     <div className={style.container}>
      <Sider className={style.side}></Sider> 
      <div   className={style.switch}>
        {/* <Switch>
          <Route exact path="/index/approve" component={Approve}/>
          <Route exact path="/index/addMenu" component={AddMenu}/>
          <Route exact path="/index/addMenuType" component={AddMenuType}/>
          <Route exact path="/index/menuList" component={MenuList}/>
          <Route exact path="/index/order" component={Order}/>
        </Switch> */}
        <Switch>
          <Route exact path="/index/teacherJourney" component={Journey}/>
          <Route exact path="/index/comeSchool" component={Come}/>
          <Route exact path="/index/studentJourney" component={Journey}/>
          <Route exact path="/index/studentHealth" component={StudentHealth}/>
          <Route exact path="/index/studentInfo" component={StudentInfo}/>
          <Route exact path="/index/quarantine" component={QuarantineSet}/>


        </Switch>
      </div>
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