
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select } from 'antd';
import { MyTable } from "./component/index"

import  style  from "./index.module.less"
const AddCourse = props => {
  const { Option } = Select;
  const [studentCourseTable, setStudentCourseTable] = useState({table: [], count: 0})
  const [searchLabel, setSearchLabel] = useState('courseName')
  const [searchKey, setSearchKey] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const {gradeDispatch} = props;

  const column = [
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName'
    },
    {
      title: '课程编号',
      dataIndex: 'courseNum',
      key: 'courseNum'
    },
    {
      title: '任课教师',
      dataIndex: 'teacherName',
      key: 'teacherName'
    },
    {
      title: '课程班级',
      dataIndex: 'courseClass',
      key: 'courseClass'
    },
    
    {
      title: '添加',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        console.log(record);
        return (
          <a onClick={() => addStudentCourse(studentNumber, record.log_id, record.teacherKey, record.teacherName)}>加入</a>
        )
      }
    }
  ]
  
  const dataSource = [
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    }
  ]

  const searchValue = {
    label: 'courseName',
    value: ''
  }

  const onSearch = () => {
    console.log(searchValue);
    getSearchCourseTable(1, searchLabel, searchKey)
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
    searchValue.label = value
    setSearchLabel(value)
  }
  const onchangeInput = (e) => {
    const { id, value } = e.target;
    setSearchKey(value)
    console.log(searchValue);
  }
 
  const getSearchCourseTable = async(page, type, key) => {
    const result = await gradeDispatch.getStudentSearchCourseList({page, type, searchKey: key});
    console.log(result);  
    setStudentCourseTable(result)
  }
  const addStudentCourse = async(studentNumber, courseKey, teacherKey, teacherName)=> {
    const result = await gradeDispatch.studentAddCourse({studentNumber, courseKey, teacherKey, teacherName})
    if(result === 2) {
      message.info('已经加入')
    }else if(result === 0) {
      message.success('添加成功')
    } else {
      message.error('添加失败')
    }
  }

  useEffect(() => {
    props.userInfo && props.userInfo.userId && getSearchCourseTable(1,'', '')
    props.userInfo && props.userInfo.userId && setStudentNumber(props.userInfo.userId)
  }, [props.userInfo])

  return (
    <div>
      <div>
        <div className={style.margin20}>
        <Select defaultValue="课程名称" style={{ width: 120 }} onChange={handleChange}>
          <Option value="courseName">课程名称</Option>
          <Option value="teacherName">任课教师</Option>
          <Option value="courseClass" >班级</Option>
        </Select>
          <Input
            className={style.margins20}
            style={{ width: '20%' }} 
            allowClear={true}
            placeholder="请输入"
            onChange={onchangeInput}
            id="value"
          />
          <Button onClick={onSearch}>
            搜索
          </Button>

        </div>
      </div>
      <MyTable
        title={'课程列表'}
        columns={column}
        dataSource={studentCourseTable.table}
        total={studentCourseTable.count}
      >

      </MyTable>
    </div>
)
} 

const mapState = state => ({
  userInfo: state.login.userInfo
})

const mapDispatch = (dispatch) => ({
  gradeDispatch: dispatch.grade
})
const AddCourseContainer = connect(mapState, mapDispatch)(AddCourse)
export default AddCourseContainer;