import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Badge, Tabs, Select   } from 'antd';
import  style  from "./index.module.less"
import EpidemicEcharts from './component/epidemicEcharts'
import MyTable from './component/MyTable'
import MyEcharts from "./component/echarts"
import OnImport from "./component/onImport"
const { TabPane } = Tabs;
const { Option } = Select;
const Come = props => {
  const { healthDispatch } = props;
  const [backSchoolCount, setBackSchoolCount] = useState({})
  const [batchType, setBatchType] = useState('first')
  const getStudentBackBatchCount = async () => {
    const result = await healthDispatch.getStudentBackCount()
    console.log(result);
    setBackSchoolCount(result)
  }
  const callback = (key) => {
    console.log(key);
  }

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
  const receiveChildren = (data)=> {
    postInfo(data)
    return data
  }
  const postNoticed = async() => {
    const type = batchType
   
    const resultNoticed =  await healthDispatch.studentAddBatchNoticed(type)

    if(resultNoticed === true) {
      message.success('通知成功')
    } else {
      message.success('通知失败')
    }
  }
  const postInfo = async (data) => {
    console.log(data);
    const result =  await healthDispatch.postStudentJourney(data)
    if(result === true) {
      message.success('导入成功')
    } else {
      message.success('导入失败')
    }
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setBatchType(value)
  }

  const BackSchoolTable = (props) => {
    const {type} = props
    const [backSchoolTable, setBackSchoolTable] = useState({});
    const [page, setPage] = useState(1)

    const onChangePage = (page) => {
      console.log(page);
      setPage(page.current)
      getStudentBackBatchTable(page.current, type)
    }

    const backSchoolColumns = [
      {
        title: '序号',
        dataIndex: 'log_id',
        key: 'log_id',
        align: 'center'
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        key: 'studentNumber',
        align: 'center'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '年级',
        dataIndex: 'grade',
        key: 'grade',
        align: 'center'
      },
      {
        title: '学院',
        dataIndex: 'college',
        key: 'college',
        align: 'center'
      },
      {
        title: '外出地点（省市）',
        dataIndex: 'province',
        key: 'province',
        align: 'center'
      },
      {
        title: '详细地点',
        dataIndex: 'detailLocation',
        key: 'detailLocation',
        align: 'center'
      },
      {
        title: '是否经过中高风险城市',
        dataIndex: 'isApproachCity',
        key: 'isApproachCity',
        align: 'center'
      },
      {
        title: '经过中高风险城市名',
        dataIndex: 'approach',
        key: 'approach',
        align: 'center'
      },
      {
        title: '近七天体温是否异常',
        dataIndex: 'animalHeat',
        key: 'animalHeat',
        align: 'center'
      },
      {
        title: '近七天有无新冠相关症状',
        dataIndex: 'symptom',
        key: 'symptom',
        align: 'center'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => {
          return (
            <Button disabled={record.quarantine == 'true' ? true: false} onClick={() => clickQuarantine(record, 'true')}>通知隔离</Button>
          )
        }
      },
    ]
    const clickQuarantine = async (record, isQuarantine) => {
      let statusQuarantine;
      console.log(record, isQuarantine);
  
      const result =  await healthDispatch.updateStudentBackQuarantine({log_id: record.log_id, quarantine: isQuarantine})
      if(isQuarantine) {
        const resultNoticed =  await healthDispatch.studentAddNoticed({
          name: record.name,
          studentNumber: record.studentNumber,
          noticed: '根据疫情防控管理要求，请你进行为期两周的疫情防控隔离',
          type: 'startQuarantine'
        })

        if(resultNoticed === true) {
          message.success('通知成功')
        } else {
          message.success('通知失败')
        }
      } else {
        const resultNoticed =  await healthDispatch.studentAddNoticed({
          name: record.name,
          studentNumber: record.studentNumber,
          noticed: '亲爱的同学，您已结束隔离',
          type: 'endQuarantine'
        })

        if(resultNoticed === true) {
          message.success('通知成功')
        } else {
          message.success('通知失败')
        }
      }
      
      if(result === true) {
        message.success('操作成功')
        getStudentBackBatchTable(page, type)
      } else {
        message.success('操作失败')
      }
    }
    const getStudentBackBatchTable = async (page, type) => {
      const result = await healthDispatch.getStudentBackBatch({page, type})
      console.log(result);
      setBackSchoolTable(result)
    }

    useEffect(() => {
      getStudentBackBatchTable(1, type)
    }, [type])
    
    return (
      <div>
        <MyTable 
          title={'出入校数据'}
          columns={backSchoolColumns} 
          dataSource={backSchoolTable && backSchoolTable.table} 
          total={backSchoolTable && backSchoolTable.count}
          onChange={onChangePage}
          >
        </MyTable>
      </div>
    )
  }

  const QuarantineTable = (props) => {
    const [quarantineTable, setQuarantineTable] = useState({})
    const [page, setPage] = useState(1)
    const onChangePage = (page) => {
      console.log(page);
      setPage(page.current)
      getStudentBackQuarantineTable(page.current)
    }
    const clickQuarantine = async (record, type) => {
      let statusQuarantine;
  
      const result =  await healthDispatch.updateStudentBackQuarantine({log_id: record.log_id, quarantine: type})

   
        const resultNoticed =  await healthDispatch.studentAddNoticed({
          name: record.name,
          studentNumber: record.studentNumber,
          noticed: '亲爱的同学，您已结束隔离',
          type: 'endQuarantine'
        })

        if(resultNoticed === true) {
          message.success('通知成功')
        } else {
          message.success('通知失败')
        }
      

      if(result === true) {
        message.success('操作成功')
        getStudentBackQuarantineTable(page)
      } else {
        message.success('操作失败')
      }
    }
    const quarantineColumns = [
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
        title: '详细地点',
        dataIndex: 'detailLocation',
        key: 'detailLocation'
      },
      {
        title: '是否经过中高风险城市',
        dataIndex: 'isApproachCity',
        key: 'isApproachCity'
      },
      {
        title: '经过中高风险城市名',
        dataIndex: 'approach',
        key: 'approach'
      },
      {
        title: '近七天体温是否异常',
        dataIndex: 'animalHeat',
        key: 'animalHeat'
      },
      {
        title: '近七天有无新冠相关症状',
        dataIndex: 'symptom',
        key: 'symptom'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => {
          return (
            <Button onClick={() => clickQuarantine(record, 'false')}>解除隔离</Button>
          )
        }
      },
    ]
    const getStudentBackQuarantineTable = async (page) => {
      const result = await healthDispatch.getStudentBackQuarantine(page)
      console.log(result);
      setQuarantineTable(result)
    }

    useEffect(() => {
      getStudentBackQuarantineTable(1)
      console.log('渲染隔离名单');
    }, [])

    
    return (
      <div>
        <MyTable 
          title={'隔离名单'}
          columns={quarantineColumns} 
          dataSource={quarantineTable && quarantineTable.table} 
          total={quarantineTable && quarantineTable.count}
          onChange={onChangePage}
          >
        </MyTable>
      </div>
    )
  }

  useEffect(() => {
    getStudentBackBatchCount()
  }, [])
  
  return (
    <div>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <div className={`${style.margins20} ` }>
          <div>第一批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              overflowCount={99999}
              className="site-badge-count-109"
              count={backSchoolCount ? backSchoolCount.first : 0}
              style={{ backgroundColor: '#f5222d', cursor:'pointer' }}
            />
          </div>
        </div>
        <div className={style.margins20}>
          <div>第二批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
            
              className="site-badge-count-109"
              count={backSchoolCount ? backSchoolCount.second : 0}
              overflowCount={99999}
              style={{ backgroundColor: '#1789F3', cursor:'pointer' }}
            />
          </div>
        </div>
        <div className={style.margins20}>
          <div>第三批返校人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
            
              className="site-badge-count-109"
              count={backSchoolCount ? backSchoolCount.third : 0}
              overflowCount={99999}
              style={{ backgroundColor: '#52c41a', cursor:'pointer' }}
            />
          </div>
        </div>
      </div>
      <div style={{display: 'inline-block'}}>
        <Select defaultValue="第一批" style={{ width: 120 }} onChange={handleChange}>
          <Option value="first">第一批</Option>
          <Option value="second">第二批</Option>
          <Option value="third">第三批</Option>
        </Select>
        <div style={{display: 'inline-block',marginLeft: 20}}>
          <OnImport receiveChildren={receiveChildren}  aHref='http://121.5.113.203/excel/student_journey_back_school.xls'></OnImport>
         
        </div>
        <div>
          <Button type="primary" onClick={postNoticed}>
            批量通知返校
          </Button>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="返校批次" key="1">
          <BackSchoolTable type={batchType}>

          </BackSchoolTable>
          </TabPane>
          <TabPane tab="隔离名单" key="2">
            <QuarantineTable>

            </QuarantineTable>
          </TabPane>
        </Tabs>
      </div>
    </div>
    
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const ComeContainer = connect(mapState, mapDispatch)(Come)
export default ComeContainer;