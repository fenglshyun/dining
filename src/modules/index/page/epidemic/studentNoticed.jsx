import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import OnImport from "./component/onImport"

const { Search } = Input;
const StudentNoticed = props => {
  const { healthDispatch } = props;
  const [studentTable, setStudentTable] = useState({})
  const [page, setPage] = useState(1)

  const getStudentTable = async (page = 1) => {
    const result =  await healthDispatch.getStudentUserInfo(page)
    setStudentTable(result)
   
  } 

  const clickDelete = () => {
    console.log('1');
  }
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
          <a onClick={() => clickDelete(record.log_id)}>编辑</a>
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
  console.log(studentTable);
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
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const StudentNoticedContainer = connect(mapState, mapDispatch)(StudentNoticed)
export default StudentNoticedContainer;