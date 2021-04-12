import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  style  from "./index.module.less"
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import MySearch from "./component/MySearch"
import MyEcharts from "./component/echarts"
const StudentHealth = props => {
  const show = true;
  const peopleCount = {
    notPunch: 20,
    punch: 100,
    ill: 10
  }
  
  const HealthTable = () => {

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
        title: '体温是否正常',
        dataIndex: 'animalHeat',
        key: 'animalHeat'
      },
      {
        title: '有无新冠相关症状',
        dataIndex: 'symptom',
        key: 'symptom'
      },
      {
        title: '是否打卡',
        dataIndex: 'punchResult',
        key: 'punchResult'
      },
      {
        title: '打卡时间',
        dataIndex: 'createTime',
        key: 'createTime'
      },
     
    ]
    const studentHealth = [
      {
        log_id: 1,
        studentNumber: 2017211222,
        name: '小明',
        grade: '2017',
        college: '软件工程',
        major: '软件工程',
        animalHeat: '是',
        symptom: '无',
        punchResult: '已打卡',
        createTime: '2021-04-01 19:00:00'
      }
    ]
    
    return (
      <Table 
        columns={columns} 
        dataSource={studentHealth} 
        rowKey='log_id'
      />
    )

  }
  return (
    <div>
      <div className={`${style['flexAlign']} ${style['margin20']}` }>
        <div className={`${style.margins20} ` }>
          <div>已打卡人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              className="site-badge-count-109"
              count={show ? peopleCount.punch : 0}
              style={{ backgroundColor: '#52c41a' }}
            />
          </div>
         
        </div>

        <div className={style.margins20}>
          <div>未打卡人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              className="site-badge-count-109"
              count={show ? peopleCount.notPunch : 0}
              style={{ backgroundColor: '#1789F3' }}
            />
          </div>
          
        </div>

        <div className={style.margins20}>
          <div>体温异常人数</div>
          <div className={`${style['flexAlign']}`}>
            <Badge
              className="site-badge-count-109"
              count={show ? peopleCount.ill : 0}
              style={{ backgroundColor: '#f5222d' }}
            />
          </div>
         
        </div>
       
      </div>
      <div>
        <MyEcharts></MyEcharts>
      </div>
      <div>
        <MySearch></MySearch>
        <HealthTable></HealthTable>
      </div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const StudentHealthContainer = connect(mapState, mapDispatch)(StudentHealth)
export default StudentHealthContainer;