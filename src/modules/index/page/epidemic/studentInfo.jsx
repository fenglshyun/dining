import React,{useEffect, useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import OnImport from "./component/onImport"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Search } = Input;
const StudentInfo = props => {
 
  const { healthDispatch } = props;
  const [studentTable, setStudentTable] = useState({})
  const [page, setPage] = useState(1)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfoPassword, setUserInfoPassword] = useState({})
  const [newPasswordString, setNewPasswordString] = useState('')
  const getStudentTable = async (page = 1) => {
    const result =  await healthDispatch.getStudentUserInfo(page)
    setStudentTable(result)
  } 


  // const password = {
  //   oldPassword: '',
  //   newPassword: '',
  //   studentNumber: ''
  // }

  const onchangeInput = (e) => {
    console.log(e);
    const { value } = e.target
    setNewPasswordString(value)
  }

  const postStudentUpdateForm = async (postData) => {
    const result =  await healthDispatch.studentUpdatePassword(postData)
    if(result === true) {
      message.success('修改成功')
      getStudentTable(page)
    } else {
      message.error('密码错误')
    }
  }

  const showModal = (record) => {
    // clearInput()
    console.log(record);
    const password = {}
    password.oldPassword = record.password
    password.studentNumber = record.studentNumber
    setUserInfoPassword(password)
    setIsModalVisible(true);
  };


  const handleOk = () => {
    postStudentUpdateForm({
      studentNumber: userInfoPassword.studentNumber,
      oldPassword: userInfoPassword.oldPassword,
      newPassword: newPasswordString
    })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const receiveChildren = (data)=> {
    postInfo(data)
    return data
  }

 
  const postInfo = async (data) => {
    console.log(data);
    const result =  await healthDispatch.postStudentUserInfo(data)
    if(result === true) {
      message.success('导入成功')
    } else {
      message.success('导入失败')
    }
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'log_id',
      key: 'log_id'
    },
    {
      title: '学号',
      dataIndex: 'studentNumber',
      key: 'studentNumber'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年级',
      dataIndex: 'grade',
      key: 'grade'
    },
    {
      title: '学院',
      dataIndex: 'college',
      key: 'college'
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major'
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: '班级',
      dataIndex: 'classNumber',
      key: 'classNumber'
    },
    {
      title: '生源地',
      dataIndex: 'studentOrigin',
      key: 'studentOrigin'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <a onClick={() => showModal(record)}>编辑</a>
        )
      }
    },
  ]

  const onChangePage = (page) => {
    console.log(page);
    setPage(page.current)
    getStudentTable(page.current)
  }
  useEffect(() => {
    getStudentTable()
  }, [])
  return (
    <div className={style.studentInfo}>
      <div> <OnImport receiveChildren={receiveChildren} aHref='http://121.5.113.203/excel/student_info.xls'></OnImport></div>
      <div>
        <MySearch>

        </MySearch>
      </div>
      
      <div>
        <MyTable 
          columns={columns} 
          total={ studentTable.count}
          dataSource={studentTable && studentTable.table}
          onChange={onChangePage}
        />
      </div>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose>
        {/* <div style={{ marginBottom: 16 }}>
          <Input.Password addonBefore="旧密码"   
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={onchangeInput}
            id="oldPassword"
          />
        </div> */}
        <div style={{ marginBottom: 16 }}>
          <Input.Password addonBefore="新密码"  
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={onchangeInput}
            id="newPassword"
            allowClear={true}
          />
         
        </div>
      </Modal>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const StudentInfoContainer = connect(mapState, mapDispatch)(StudentInfo)
export default StudentInfoContainer;