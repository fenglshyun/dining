import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  style  from "./index.module.less"
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import MySearch from "./component/MySearch"
import MyEcharts from "./component/echarts"
import MyTable from "./component/MyTable"
import OnImport from "./component/onImport"
const StudentHealth = props => {
  const show = true;
  const { healthDispatch } = props;
  const [peopleCount, setPeopleCount] = useState({})
  const [echartData, setEchartData] = useState({})
  const [studentTable, setStudentTable] = useState({})
  const [page, setPage] = useState(1)

  const getStudentHealthInfo = async () => {
    const result =  await healthDispatch.getStudentHealth()

    // peopleCount = result.peopleCount
    setPeopleCount(result.peopleCount)
    setEchartData(result.echartData)

  }

  const getStudentHealthTable = async (page, dateTime, type) => {
    const result = await healthDispatch.getStudentHealthTable({page, dateTime, type})
    console.log(result);
    console.log(props);
    setStudentTable(result)
  }

  const switchTable = (type) => {
    setPage(1)
    getStudentHealthTable(1, '2021/04/13', type)
  }




  useEffect( ()=> {
    getStudentHealthInfo()
    getStudentHealthTable(1,'2021/04/13','health')
  
 }, [])
  

  const columns = [
    
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
      title: '体温是否正常',
      dataIndex: 'animalHeat',
      key: 'animalHeat',
      render: (record) => {
        console.log(record);
        return (
          <span
            // style={{ backgroundColor: '#1789F3', color:'#ffffff', borderRadius: '10px', padding: '2px 4px'}}
          >{ record && record? record : '未打卡' }</span>
        )
      }
    },
    {
      title: '有无新冠相关症状',
      dataIndex: 'symptom',
      key: 'symptom'
    },
    // {
    //   title: '是否打卡',
    //   dataIndex: 'punchResult',
    //   key: 'punchResult'
    // },
    {
      title: '打卡时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
   
  ]
  const receiveChildren = (data)=> {
    postInfo(data)
    return data
  }
  const postInfo = async (data) => {
    console.log(data);
    const result =  await healthDispatch.postStudentHealth(data)
    if(result === true) {
      message.success('导入成功')
    } else {
      message.success('导入失败')
    }
  }
  return (
    <div>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <div className={`${style.margins20} ` }>
          <div>已打卡人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              onClick={() => switchTable('health')}
              className="site-badge-count-109"
              count={peopleCount ? peopleCount.punchListCount : 0}
              style={{ backgroundColor: '#52c41a', cursor:'pointer' }}
            />
          </div>
        </div>

        <div className={style.margins20}>
          <div>未打卡人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              onClick={() => switchTable('notPunch')}
              className="site-badge-count-109"
              count={show ? peopleCount.notPunchCount : 0}
              style={{ backgroundColor: '#1789F3', cursor:'pointer' }}
            />
          </div>
          
        </div>

        <div className={style.margins20}>
          <div>体温异常人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              onClick={() => switchTable('animalHeat')}
              className="site-badge-count-109"
              count={show ? peopleCount.animalHeatCount : 0}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
         
        </div>

        <div className={style.margins20}>
          <div>疑似症状人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              onClick={() => switchTable('symptomHeat')}
              className="site-badge-count-109"
              count={show ? peopleCount.symptomHeatCount : 0}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
         
        </div>
       
      </div>
      <div> <OnImport receiveChildren={receiveChildren}  aHref='http://121.5.113.203/excel/student_health.xls'></OnImport></div>
      <div className={style.flexAlign}>
        <MyEcharts  id='noPunch' title='未打卡人数' xData={echartData && echartData.collegeNotPunchCount && echartData.collegeNotPunchCount.college} 
          seriesName = '人数' seriesData={echartData && echartData.collegeNotPunchCount && echartData.collegeNotPunchCount.personData}  ></MyEcharts>

        <MyEcharts  id='animalHeat' title='新冠相关症状' xData={echartData && echartData.collegeAnimalHeatCount && echartData.collegeAnimalHeatCount.college} 
          seriesName = '人数' seriesData={echartData && echartData.collegeAnimalHeatCount && echartData.collegeAnimalHeatCount.personData}  ></MyEcharts>
        <MyEcharts  id='symptomHeat' title='体温异常人数' xData={echartData && echartData.collegeSymptomHeatCount && echartData.collegeSymptomHeatCount.college} 
          seriesName = '人数' seriesData={echartData && echartData.collegeSymptomHeatCount && echartData.collegeSymptomHeatCount.personData}  ></MyEcharts>
      </div>
      <div className={style.flexAlign}>
        
      </div>
      <div>
        <MySearch ></MySearch>
        <MyTable columns={columns} dataSource={studentTable && studentTable.table} total={studentTable.count} ></MyTable>
      </div>
    </div>
)
} 

const mapState = state => ({
  studentHealth: state.health.studentHealth
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const StudentHealthContainer = connect(mapState, mapDispatch)(StudentHealth)
export default StudentHealthContainer;