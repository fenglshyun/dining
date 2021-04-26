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

import { StudentInfo, StudentHealth, Journey, Come, QuarantineSet, StudentPersonInfo, StudentNoticed, StudentPostJourney, StudentPunchCard } from "./page/epidemic"
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
        <Switch>
          <Route exact path="/index/teacherJourney" component={Journey}/>
          <Route exact path="/index/comeSchool" component={Come}/>
          <Route exact path="/index/studentJourney" component={Journey}/>
          <Route exact path="/index/studentHealth" component={StudentHealth}/>
          <Route exact path="/index/studentInfo" component={StudentInfo}/>
          <Route exact path="/index/quarantine" component={QuarantineSet}/>
          <Route exact path="/index/studentNoticed" component={StudentNoticed}/>
          <Route exact path="/index/studentPersonInfo" component={StudentPersonInfo}/>
          <Route exact path="/index/studentPostJourney" component={StudentPostJourney}/>
          <Route exact path="/index/studentPunchCard" component={StudentPunchCard}/>
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