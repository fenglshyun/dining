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
  const [epidemicEchartsTable, setEpidemicEchartsTable] = useState([])

 

  const [isModalVisible, setIsModalVisible] = useState(false);
  const addData = {
    label: '',
    value: ''
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    clickAdd(addData)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getEpidemicEchartsData = async () => {
    const result = await healthDispatch.getEpidemicEcharts()
    console.log(result);
    
    setEpidemicEcharts(result)
    setEpidemicEchartsTable(result)
  }
  const clickDelete = async (label) => {
    const result = await healthDispatch.locationDelete(label)
    console.log(result);
    if(result === true) {
      getEpidemicEchartsData()
      message.success('删除成功')
    } else {
      message.fail('删除错误')
    }
  }
  const clickAdd = async (data) => {
    const result = await healthDispatch.locationAdd(data)
    console.log(result);
    if(result === true) {
      getEpidemicEchartsData()
      message.success('增加成功')
    } else {
      message.fail('增加错误')
    }
  }

  const onchangeInput = (e) => {
    const { id, value } = e.target;
    addData[id] = value
    console.log(addData);
  }

  const columns = [
    {
      title: '省市',
      dataIndex: 'name',
      key: 'name'
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
          <a onClick={() => clickDelete(record.name)}>删除</a>
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
        <Input addonBefore="城市"  id="label" onChange={onchangeInput}></Input>
        <Input style={{ marginTop: 20}} addonBefore="风险等级" id="value" onChange={onchangeInput}></Input>
      </Modal>

      <MyTable
        title="中高风险地区设置"
        columns={columns} 
        total={ 0}
        dataSource={epidemicEchartsTable} 
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