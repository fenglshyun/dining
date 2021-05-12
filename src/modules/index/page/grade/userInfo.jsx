import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message,Descriptions, Modal } from 'antd';
import style from "./index.module.less"
const UserInfo = props => {
  const { loginDispatch } = props;
  const userInfoObjDefault = {
    name: '李大师',
    studentNumber: '2017210964',
    college: '经济管理学院',
    major: '管理科学与工程',
    email: '824643608@qq.com',
    phone: '18223367411'
  }
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isEditPasswordModalVisible, setIsEditPasswordModalVisible] = useState(false);
  const [userInfoObj, setUserInfoObj] = useState(userInfoObjDefault)
 
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
    searchValue.email = ''
    searchValue.phone = ''
    setIsEditModalVisible(true);
   } else if( id === 'password') {
    searchValue.oldPassword = ''
    searchValue.newPassword = ''
    setIsEditPasswordModalVisible(true)
   }
  };

  const getUserInfo = async (userId) => {
    const result = await loginDispatch.getUserInfoAll(userId) 
    console.log(result);  
    setUserInfoObj(result)
  }
  const updateInfo = async (userId, email, phone) => {
    const result = await loginDispatch.updateUserInfo({userId,email, phone }) 
    if(result){
      message.success('修改成功')
      getUserInfo(userId)

    } else {
      message.error('修改失败')
    }
  }
  const updatePassword = async (userId, newPassword, oldPassword) => {
    const result = await loginDispatch.updateUserPassword({userId, newPassword, oldPassword}) 
    if(result){
      message.success('修改成功')
    } else {
      message.error('密码错误')
    }
  }

  const handleEditOk = () => {
    console.log(searchValue);
    updateInfo(userInfoObj.userId, searchValue.email, searchValue.phone)

    setIsEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleEditPasswordOk = () => {
    updatePassword(userInfoObj.userId, searchValue.newPassword, searchValue.oldPassword)
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
 
  useEffect(() => {
    props.userInfo && props.userInfo.userId && getUserInfo( props.userInfo.userId)
  }, [props.userInfo])
  

  
  return (
    <div className={style.userInfo}>
      <div className={style.margin20}>
      <Descriptions title="个人信息" bordered column={1} >
        <Descriptions.Item label={'姓名'}>{userInfoObj.userName}</Descriptions.Item>
        <Descriptions.Item label={'学号'}>{userInfoObj.userId}</Descriptions.Item>
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
          <Modal title="修改信息" destroyOnClose visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
            <Input
             
              style={{ width: '80%',margin:20}} 
              allowClear={true}
              addonBefore="新电子邮箱"
              onChange={onchangeInput}
              id="email"
            />
             <Input
              
              style={{ width: '80%',margin:20}} 
              allowClear={true}
              addonBefore="新手机号码"
              onChange={onchangeInput}
              id="phone"
            />
          </Modal>
        <Button type="primary" onClick={showModal} id="password" className={style.margins20}>
          修改密码
        </Button>
          <Modal title="修改密码" destroyOnClose visible={isEditPasswordModalVisible} onOk={handleEditPasswordOk} onCancel={handleEditPasswordCancel}>
            <Input
              className={style.margins20}
              style={{ width: '80%',margin:20}} 
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
  userInfo: state.login.userInfo
})

const mapDispatch = (dispatch) => ({
  loginDispatch: dispatch.login
})
const UserInfoContainer = connect(mapState, mapDispatch)(UserInfo)
export default UserInfoContainer;