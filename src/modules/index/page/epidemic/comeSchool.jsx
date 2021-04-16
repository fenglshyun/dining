import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
import EpidemicEcharts from './component/epidemicEcharts'
import MyTable from './component/MyTable'
import MyEcharts from "./component/echarts"
const Come = props => {
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
      title: '外出地点（省市）',
      dataIndex: 'province',
      key: 'province'
    },
    {
      title: '外出详细地点',
      dataIndex: 'detailLocation',
      key: 'detailLocation'
    },
    {
      title: '途径城市',
      dataIndex: 'approach',
      key: 'approach'
    },
    {
      title: '出校时间',
      dataIndex: 'goSchool',
      key: 'goSchool'
    },
    {
      title: '返校时间',
      dataIndex: 'comeSchool',
      key: 'comeSchool'
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
    
  ];
  const studentJourneyList = [
    {
      log_id: '1',
      studentNumber: '2017211222',
      name: '小王',
      grade: '2017',
      college: '学院',
      province: '北京市',
      detailLocation: '北京市昌平区',
      approach: '北京市 重庆市',
      goSchool: '2021/04/16',
      comeSchool: '2021/04/17'
    }
  ]
  const comeStudent = {
    first: 500,
    second: 5000,
    third: 7000
  }
  const echartsRisk = {
    college: ['软件', '计算机'],
    num: [1,3]
  }
  
  return (
    <div>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <div className={`${style.margins20} ` }>
          <div>第一批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              overflowCount={99999}
              className="site-badge-count-109"
              count={comeStudent ? comeStudent.first : 0}
              style={{ backgroundColor: '#1789F3', cursor:'pointer' }}
            />
          </div>
        </div>
        <div className={style.margins20}>
          <div>第二批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
            
              className="site-badge-count-109"
              count={comeStudent ? comeStudent.first : 0}
              overflowCount={99999}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
        </div>
        <div className={style.margins20}>
          <div>第三批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
            
              className="site-badge-count-109"
              count={comeStudent ? comeStudent.first : 0}
              overflowCount={99999}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
        </div>
      </div>
      <div >
        <MyTable 
          title={'隔离名单'}
          columns={columns} 
          dataSource={studentJourneyList} >
        </MyTable>

      </div>
      <MyTable 
        title={'出入校数据'}
        columns={columns} 
        dataSource={studentJourneyList} >
      </MyTable>
    </div>
    
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const ComeContainer = connect(mapState, mapDispatch)(Come)
export default ComeContainer;