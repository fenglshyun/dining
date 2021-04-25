import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Descriptions, Modal  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import OnImport from "./component/onImport"
import { getStorage, clearStorage } from "../../../../util/index";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Search } = Input;
const StudentPersonInfo = props => {
  const { healthDispatch, loginDispatch } = props;
  const [userInfo, setUserInfo] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);

  const password = {
    oldPassword: '',
    newPassword: ''
  }

  const onchangeInput = (e) => {
    const { id, value } = e.target;
    password[id] = value
    console.log(password);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    postStudentUpdateForm({
      studentNumber: userInfo.studentNumber,
      oldPassword: password.oldPassword,
      newPassword: password.newPassword
    })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  
  const onFinish = (values) => {
   
  };

  const postStudentUpdateForm = async (postData) => {
    const result =  await healthDispatch.studentUpdatePassword(postData)
    if(result === true) {
      message.success('修改成功')
    } else {
      message.fail('密码错误')
    }
  }

  const getUserInfo = async (token) => {
    const result = await loginDispatch.getUserInfo(token)
    const { studentNumber, college, classNumber, grade, major, userName } = result;

    console.log(result);

    setUserInfo(result)
  }
 
  useEffect(() => {
    const token = getStorage('token')
    console.log('111111111111');
    getUserInfo(token)
  }, [])
  return (
    <div style={{margin: 20}}>
      
     <Descriptions title="个人信息" bordered column={1}>
      <Descriptions.Item label="姓名">{userInfo.userName}</Descriptions.Item>
      <Descriptions.Item label="学号">{userInfo.studentNumber}</Descriptions.Item>
      <Descriptions.Item label="年级">{userInfo.grade}</Descriptions.Item>
      <Descriptions.Item label="学院">{userInfo.college}</Descriptions.Item>
      <Descriptions.Item label="账号">{userInfo.account}</Descriptions.Item>
     </Descriptions>
     <div style={{marginTop: 20}}>
        <Button type="primary" onClick={showModal}>修改密码</Button>
     </div>
     <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div style={{ marginBottom: 16 }}>
        <Input.Password addonBefore="旧密码"   
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={onchangeInput}
          id="oldPassword"
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input.Password addonBefore="新密码"  
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={onchangeInput}
          id="newPassword"
        />
      </div>
      </Modal>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health,
  loginDispatch: dispatch.login
})
const StudentPersonInfoContainer = connect(mapState, mapDispatch)(StudentPersonInfo)
export default StudentPersonInfoContainer;