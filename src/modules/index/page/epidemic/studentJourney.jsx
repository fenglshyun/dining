import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
import EpidemicEcharts from './component/epidemicEcharts'
import MyTable from './component/MyTable'
import MyEcharts from "./component/echarts"
const Journey = props => {
  const { healthDispatch } = props;
  const [collegeQuarantine, setCollegeQuarantine] = useState({})
  const [studentJourney, setStudentJourney] = useState({})
  const [studentQuarantine, setStudentQuarantine] = useState({})
  const [epidemicEcharts, setEpidemicEcharts] = useState({})
  const getCollegeJourney = async ()=> {
    const result = await healthDispatch.getCollegeQuarantine()
    setCollegeQuarantine(result)
  }
  const getStudentQuarantineTable = async (page) => {
    const result = await healthDispatch.getStudentQuarantine(page)
    console.log(result);
    setStudentQuarantine(result)
  }
  const getStudentJourneyTable = async (page) => {
    const result = await healthDispatch.getStudentJourney(page)
    console.log(result);
    setStudentJourney(result)
  }
  const getEpidemicEchartsData = async () => {
    const result = await healthDispatch.getEpidemicEcharts()
    console.log(result);
    setEpidemicEcharts(result)
  }
  const addArray = (array) => {
    return array.reduce((a, b) => a + b)
  }

  // const getStudent
  const journeyColumns = [
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
  const QuarantineColumns = [
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
      title: '隔离时间',
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
  const studentBadge = {
    risk: 7,
    quarantine: 7
  }
  const echartsRisk = {
    college: ['软件', '计算机'],
    num: [1,3]
  }
  useEffect(() => {
    getCollegeJourney()
    getStudentQuarantineTable(1)
    getStudentJourneyTable(1)
    getEpidemicEchartsData()
  }, [])
  
  return (
    <div>
      <EpidemicEcharts id="epidemic" dataValue={epidemicEcharts} className={`${style['flexAlign'] }`}>

      </EpidemicEcharts>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <div className={`${style.margins20} ` }>
          <div>近七天出入中高风险地区人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              
              className="site-badge-count-109"
              count={collegeQuarantine.count ? addArray(collegeQuarantine.count) : 0}
              style={{ backgroundColor: '#1789F3', cursor:'pointer' }}
            />
          </div>
        </div>
        <div className={style.margins20}>
          <div>隔离人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
            
              className="site-badge-count-109"
              count={studentQuarantine ? studentQuarantine.count : 0}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
        </div>
      </div>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <MyEcharts id='noPunch' title='各学院出入中高风险地区人数' xData={collegeQuarantine && collegeQuarantine.college} 
          seriesName = '人数' seriesData={collegeQuarantine && collegeQuarantine.count }>

        </MyEcharts>
        <MyTable 
          title={'隔离名单'}
          columns={QuarantineColumns}
          total={studentQuarantine.count}
          dataSource={studentQuarantine.table} >
          
        </MyTable>

      </div>
      <MyTable 
        title={'出入校数据'}
        columns={journeyColumns} 
        total={studentJourney.count}
        dataSource={studentJourney.table} >
      </MyTable>
    </div>
    
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const JourneyContainer = connect(mapState, mapDispatch)(Journey)
export default JourneyContainer;