import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select } from 'antd';
import { MyTable } from "./component/index"

import  style  from "./index.module.less"
const Count = props => {
  const { Option } = Select;

  const column = [
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName'
    },
    {
      title: '任课教师',
      dataIndex: 'courseTeacher',
      key: 'courseTeacher'
    },
    {
      title: '开课时间',
      dataIndex: 'courseCreateTime',
      key: 'courseCreateTime'
    },
    {
      title: '小组名称',
      dataIndex: 'groupName',
      key: 'groupName'
    },
    {
      title: '小组成绩',
      dataIndex: 'groupGrade',
      key: 'groupGrade'
    },
    {
      title: '个人成绩',
      dataIndex: 'personGrade',
      key: 'personGrade'
    }
    // {
    //   title: '添加',
    //   dataIndex: '',
    //   key: 'x',
    //   render: (record) => {
    //     return (
    //       <a onClick={() => clickDelete(record.log_id)}>加入</a>
    //     )
    //   }
    // }
  ]
  
  const dataSource = [
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      courseCreateTime: '2021/04/16',
      groupName: '乔治的小花园',
      groupGrade: '80',
      personGrade: '85'
    }
  ]

  const searchValue = {
    label: 'courseName',
    value: ''
  }

  const onSearch = () => {
    console.log(searchValue);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
    searchValue.label = value
  }
  const onchangeInput = (e) => {
    const { id, value } = e.target;
    searchValue[id] = value
    console.log(searchValue);
  }

  return (
    <div>
      <div>
        <div className={style.margin20}>
        <Select defaultValue="课程名称" style={{ width: 120 }} onChange={handleChange}>
          <Option value="courseName">课程名称</Option>
          <Option value="courseTeacher">任课教师</Option>
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
        title={'成绩表单'}
        columns={column}
        dataSource={dataSource}
        total={dataSource.length}
      >

      </MyTable>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const CountContainer = connect(mapState, mapDispatch)(Count)
export default CountContainer;