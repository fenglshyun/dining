import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select, DatePicker } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import moment from 'moment';
import OnImport from "./component/onImport"
import { getStorage, clearStorage } from "../../../../util/index";

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },

};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const postData = {
}
const StudentPostJourney = props => {
  const { healthDispatch, loginDispatch } = props;
  const [userInfo, setUserInfo] = useState({})
 
  
  const onFinish = (values) => {
    console.log(values);

    const goSchool =  moment(values.date[0]).format('YYYY/MM/DD') 
    const comeSchool =  moment(values.date[1]).format('YYYY/MM/DD') 
    postData.approach = values.approach;
    postData.detailLocation = values.detailLocation;
    postData.province = values.province;
    postData.goSchool = goSchool;
    postData.comeSchool = comeSchool;
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
    const result =  await healthDispatch.studentPostJourney(postData)
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
    postData.grade = grade;
    postData.name = userName;

    setUserInfo(result)
  }
 
  useEffect(() => {
    const token = getStorage('token')
    getUserInfo(token)
  }, [])
  return (
    <div className={style.studentInfo}>
    <div > <h2 style={{ textAlign: 'center'}}>行程上报</h2></div>
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

        <Form.Item
          label="外出目的地(省市区)"
          name="province"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input  placeholder="请输入省市区"/>
        </Form.Item>

        <Form.Item
          label="外出详细地址"
          name="detailLocation"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input  placeholder="请输入详细地址"/>
        </Form.Item>

        <Form.Item
          label="途径城市"
          name="approach"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input  placeholder="示例：重庆、北京"/>
        </Form.Item>
        

        <Form.Item
          label="出发日期、返回学校日期"
          name="date"
          rules={[{ required: true, message: '请输入' }]}
          
        >
         <RangePicker  format={dateFormat}/>
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
const StudentPostJourneyContainer = connect(mapState, mapDispatch)(StudentPostJourney)
export default StudentPostJourneyContainer;