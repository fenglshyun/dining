import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message,Descriptions } from 'antd';

const UserInfo = props => {
  const userInfoObj = {
    name: '李大师',
    studentNumber: '2017210964',
    college: '经济管理学院',
    major: '管理科学与工程',
    email: '824643608@qq.com',
    phone: '18223367411'
  }
  

  
  return (
    <div>
      <div>
      <Descriptions title="个人信息" bordered column={1}>
        <Descriptions.Item label={'姓名'}>{userInfoObj.name}</Descriptions.Item>
        <Descriptions.Item label={'学号'}>{userInfoObj.studentNumber}</Descriptions.Item>
        <Descriptions.Item label={'学院'}>{userInfoObj.college}</Descriptions.Item>
        <Descriptions.Item label={'系别'}>{userInfoObj.major}</Descriptions.Item>
        <Descriptions.Item label={'电子邮箱'}>{userInfoObj.email}</Descriptions.Item>
        <Descriptions.Item label={'联系电话'}>{userInfoObj.phone}</Descriptions.Item>
      </Descriptions>
      </div>
      
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const UserInfoContainer = connect(mapState, mapDispatch)(UserInfo)
export default UserInfoContainer;