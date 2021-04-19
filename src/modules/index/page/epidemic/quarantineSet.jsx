import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Modal } from 'antd';
import MyTable from "./component/MyTable"
import EpidemicEcharts from './component/epidemicEcharts'
import  style  from "./index.module.less"
const Quarantine = props => {
  const {healthDispatch} = props
  const [epidemicEcharts, setEpidemicEcharts] = useState({})

 

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getEpidemicEchartsData = async () => {
    const result = await healthDispatch.getEpidemicEcharts()
    console.log(result);
    setEpidemicEcharts(result)
  }
  const columns = [
    {
      title: '省市',
      dataIndex: 'label',
      key: 'label'
    },
    {
      title: '风险等级',
      dataIndex: 'value',
      key: 'value'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <a onClick={() => clickDelete(record.log_id)}>删除</a>
        )
      }
    }
  ]
  const dataSource = [
    {
      label: '北京市',
      value: '200'
    },
    {
      label: '北京市',
      value: '200'
    }
  ]
  useEffect(() => {
    getEpidemicEchartsData()
  }, [])
  
  return (
    <div>
       <EpidemicEcharts id="epidemic" dataValue={epidemicEcharts} className={`${style['flexAlign'] }`}>

      </EpidemicEcharts>

      <Button type="primary" onClick={showModal}>
       添加
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input addonBefore="城市"></Input>
        <Input style={{ marginTop: 20}} addonBefore="风险等级"></Input>
      </Modal>

      <MyTable
        title="中高风险地区设置"
        columns={columns} 
        total={ 0}
        dataSource={dataSource} 
        />
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health
})
const QuarantineContainer = connect(mapState, mapDispatch)(Quarantine)
export default QuarantineContainer;