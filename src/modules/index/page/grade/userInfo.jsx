import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message,Descriptions, Modal } from 'antd';
import style from "./index.module.less"
const UserInfo = props => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isEditPasswordModalVisible, setIsEditPasswordModalVisible] = useState(false);
  const userInfoObj = {
    name: '李大师',
    studentNumber: '2017210964',
    college: '经济管理学院',
    major: '管理科学与工程',
    email: '824643608@qq.com',
    phone: '18223367411'
  }
  const searchValue  = {
    email: '',
    phone:'',
    oldPassword:'',
    newPassword:''
  }
  
  const showModal = (e) => {
    // setIsEditModalVisible(true);
    const { id } = e.target.offsetParent
   if(id === 'editUserInfo') {
    setIsEditModalVisible(true);
   } else if( id === 'password') {
    setIsEditPasswordModalVisible(true)
   }
  };

  const handleEditOk = () => {
    setIsEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleEditPasswordOk = () => {
    setIsEditPasswordModalVisible(false);
  };

  const handleEditPasswordCancel = () => {
    setIsEditPasswordModalVisible(false);
  };

  const onchangeInput = (e) => {
    const { id, value } = e.target;
    searchValue[id] = value
    console.log(searchValue);
  }
  

  
  return (
    <div className={style.userInfo}>
      <div className={style.margin20}>
      <Descriptions title="个人信息" bordered column={1} >
        <Descriptions.Item label={'姓名'}>{userInfoObj.name}</Descriptions.Item>
        <Descriptions.Item label={'学号'}>{userInfoObj.studentNumber}</Descriptions.Item>
        <Descriptions.Item label={'学院'}>{userInfoObj.college}</Descriptions.Item>
        <Descriptions.Item label={'系别'}>{userInfoObj.major}</Descriptions.Item>
        <Descriptions.Item label={'电子邮箱'}>{userInfoObj.email}</Descriptions.Item>
        <Descriptions.Item label={'联系电话'}>{userInfoObj.phone}</Descriptions.Item>
      </Descriptions>
      </div>
      <div className={style.flexAlign}>
        <Button type="primary" onClick={showModal} id="editUserInfo" className={style.margins20}>
          编辑
        </Button>
          <Modal title="修改信息" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
            <Input
              className={style.margins20}
              
              allowClear={true}
              addonBefore="新电子邮箱"
              onChange={onchangeInput}
              id="email"
            />
             <Input
              className={style.margins20}
              
              allowClear={true}
              addonBefore="新手机号码"
              onChange={onchangeInput}
              id="phone"
            />
          </Modal>
        <Button type="primary" onClick={showModal} id="editUserInfo" className={style.margins20}>
          修改密码
        </Button>
          <Modal title="修改密码" visible={isEditPasswordModalVisible} onOk={handleEditPasswordOk} onCancel={handleEditPasswordCancel}>
            <Input
              className={style.margins20}
              style={{ width: '80%' }} 
              allowClear={true}
              addonBefore="旧密码"
              onChange={onchangeInput}
              id="oldPassword"
            />
             <Input
              className={style.margins20}
              style={{ width: '80%' }} 
              allowClear={true}
              addonBefore="新密码"
              onChange={onchangeInput}
              id="newPassword"
            />
          </Modal>
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