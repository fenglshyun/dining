import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import OnImport from "./component/onImport"
import { getStorage, clearStorage } from "../../../../util/index";

const { Search } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },

};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const postData = {
  animalHeat: '正常',
  symptom: '无'
}
const StudentPunchCard = props => {
  const { healthDispatch, loginDispatch } = props;
  const [userInfo, setUserInfo] = useState({})
 
  
  const onFinish = (values) => {
    console.log(postData);
    postStudentHealthForm(postData)
  };
  const handleChangeAnimalHeat = (value) => {
   postData.animalHeat = value
  }
  const handleChangeSymptom = (value) => {
    postData.symptom = value
   }
  const postStudentHealthForm = async (postData) => {
    const result =  await healthDispatch.studentPostHealth(postData)
    if(result === true) {
      message.success('提交成功')
    } else {
      message.success('提交失败')
    }
  }

  const getUserInfo = async (token) => {
    const result = await loginDispatch.getUserInfo(token)
    const { studentNumber, college, classNumber, grade, major, userName } = result;
    postData.studentNumber = studentNumber;
    postData.college = college;
    postData.classNumber = classNumber;
    postData.grade = grade;
    postData.major = major;
    postData.name = userName;

    setUserInfo(result)
  }
 
  useEffect(() => {
    const token = getStorage('token')
    getUserInfo(token)
  }, [])
  return (
    <div className={style.studentInfo}>
      <div > <h2 style={{ textAlign: 'center'}}>学生健康打卡</h2></div>
      <div>
        <Form
          {...layout}
          onFinish={onFinish}
        >
          <Form.Item
            label="姓名"
            name="username"
          >
            <Input  disabled placeholder={userInfo.userName}/>
          </Form.Item>

          <Form.Item
            label="学号"
            name="studentNumber"
          >
            <Input  disabled placeholder={userInfo.studentNumber}/>
          </Form.Item>

          <Form.Item
            label="年级"
            name="grade"
          >
            <Input  disabled placeholder={userInfo.grade}/>
          </Form.Item>

          <Form.Item
            label="学院"
            name="college"
          >
            <Input  disabled placeholder={userInfo.college}/>
          </Form.Item>

          <Form.Item
            label="专业"
            name="major"
          >
            <Input  disabled placeholder={userInfo.major}/>
          </Form.Item>

          <Form.Item label="体温是否正常">
            <Select defaultValue="正常" onChange={handleChangeAnimalHeat} >
              <Select.Option value="正常">正常</Select.Option>
              <Select.Option value="异常">异常</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="有无新冠相关症状">
            <Select defaultValue="无" onChange={handleChangeSymptom}>
              <Select.Option value="有">有</Select.Option>
              <Select.Option value="无">无</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
        </Form.Item>
        </Form>
      </div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health,
  loginDispatch: dispatch.login
})
const StudentPunchCardContainer = connect(mapState, mapDispatch)(StudentPunchCard)
export default StudentPunchCardContainer;