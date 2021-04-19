
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';
import { MyTable } from "./component/index"

import  style  from "./index.module.less"
const MyCourse = props => {

  const column = [
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName'
    },
    {
      title: '课程编号',
      dataIndex: 'courseNumber',
      key: 'courseNumber'
    },
    {
      title: '任课教师',
      dataIndex: 'courseTeacher',
      key: 'courseTeacher'
    },
    {
      title: '课程班级',
      dataIndex: 'courseClass',
      key: 'courseClass'
    },
    {
      title: '创建时间',
      dataIndex: 'courseClass',
      key: 'courseClass'
    },
    {
      title: '添加',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <div>
             <a onClick={null}>创建小组</a>
             <a style={{ marginLeft: 20 }} onClick={null}>进入课程</a>
          </div>
         
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
  
  return (
    <div>
      <MyTable
        title={'课程列表'}
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
const MyCourseContainer = connect(mapState, mapDispatch)(MyCourse)
export default MyCourseContainer;