/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-14 19:14:59
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import  Sider from "./component/Sider";
import InfoTitleContainer from "./component/InfoTitle";
import Approve from "./page/approve"
import AddMenu from "./page/addMenu"
import AddMenuType from "./page/addMenuType"
import MenuList from "./page/menuList"
import Order from "./page/order"
import WhitePage from "./page/whitePage"
import { AddCourse, GradeForm, MyCourse, UserInfo, TeacherCourse } from "./page/grade"
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
          <Route exact path="/index/addCourse" component={AddCourse}/>
          <Route exact path="/index/gradeForm" component={GradeForm}/>
          <Route exact path="/index/myCourse" component={MyCourse}/>
          <Route exact path="/index/userInfo" component={UserInfo}/>
          <Route exact path="/index/teacherCourse" component={TeacherCourse}/>


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