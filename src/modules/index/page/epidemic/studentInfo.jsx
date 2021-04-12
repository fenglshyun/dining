import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import  style  from "./index.module.less"
const { Search } = Input;
const StudentInfo = props => {

  const clickDelete = () => {
    console.log('1');
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
  const studentInfo = [
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },{
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    },
    {
      log_id: 1,
      studentNumber: 2017211222,
      name: '小明',
      grade: '2017',
      college: '软件工程',
      major: '软件工程',
      account: '2017211222',
      password: 'qq123456',
      classNumber: '130017001',
      studentOrigin: '重庆'
    }
  ]
  // const MySearch = props => {
  //   const searchValue = {
  //     studentNumber: '',
  //     name: ''


  //   }
  //   // const suffix = (
  //   //   <AudioOutlined
  //   //     style={{
  //   //       fontSize: 16,
  //   //       color: '#1890ff',
  //   //     }}
  //   //   />
  //   // );

  //   const onSearch = () => {
  //     console.log(searchValue);
  //   }
  //   const onchangeInput = (e) => {
  //     const { id, value } = e.target;
  //     searchValue[id] = value
  //     console.log(searchValue);
  //   }

  //   return (
  //     <div>
  //       {/* <Search
  //         placeholder="input search text"
  //         enterButton="Search"
  //         size="large"
  //         suffix={suffix}
  //         onSearch={onSearch}
  //         allowClear={true}
  //       /> */}
  //       <div className={style.margin20}>
  //         <Input
  //           className={style.margins20}
  //           addonBefore={<span>学号搜索</span>}
  //           style={{ width: '20%' }} 
  //           allowClear={true}
  //           placeholder="input search text"
  //           onChange={onchangeInput}
  //           id="studentNumber"
  //           // defaultValue="0571" 
  //         />
  //         <Input
  //           className={style.margins20}
  //           addonBefore={<span>姓名搜索</span>}
  //           style={{ width: '20%' }} 
  //           allowClear={true}
  //           placeholder="input search text"
  //           onChange={onchangeInput}
  //           id="name"
  //         />
  //         <Button onClick={onSearch}>
  //           搜索
  //         </Button>

  //       </div>
        
  //     </div>
      
      
  //   )
  // }
 
  
  return (
    <div className={style.studentInfo}>
      <div>
        <MySearch>

        </MySearch>
      </div>
      <div>
        <Table 
          columns={columns} 
          dataSource={studentInfo} 
          rowKey='log_id'
        />
      </div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const StudentInfoContainer = connect(mapState, mapDispatch)(StudentInfo)
export default StudentInfoContainer;