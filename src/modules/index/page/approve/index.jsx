/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-16 18:42:43
 */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, message, Button, Modal, Form, Input} from "antd";
import  style  from "./index.module.less"
const Approve = props => {
  const { userControllerDispatch } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async (values) => {
    console.log('Success:', values);
    
    const result = await userControllerDispatch.addUser(values)
    if(result === true) {
      message.success('添加成功')
      getApproveList()
      setIsModalVisible(false);
    } else {
      message.success('添加失败')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  const getApproveList = async (page) => {
    const res = await  userControllerDispatch.getApproveList()
    console.log('----', res);

    
  }

  const clickDelete = async (log_id) => {
    const result = await userControllerDispatch.deleteUser(log_id)
    if(result === true) {
      message.success('删除成功')
      getApproveList()
    } else {
      message.error('删除失败')
    }
  };

  const columns = [
    {
      title: '用户编号',
      dataIndex: 'log_id',
      key: 'log_id'
    },
    {
      title: '登陆账号',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '登陆密码',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '登陆时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <Button onClick={() => clickDelete(record.log_id)}> 删除 </Button>
        )
      }
    },
   ]

 
  useEffect( ()=> {
    getApproveList()
 }, [])
  return (
    <div width="100%">
      <div>
        <div className={style.userAdd}>
          <Button type="primary" onClick={showModal}>
            添加用户
          </Button>
        </div>
     
      <Modal title="Basic Modal" 
        visible={isModalVisible} 
        onOk={onFinish} 
        onCancel={handleCancel} 
        destroyOnClose={true}
        footer={[
          // 重点：定义右下角 
          <Button onClick={handleCancel}>
            取消
          </Button>
        ]}
         
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="登陆账号"
            name="userId"
            rules={[{ required: true, message: '请输入登陆账号~' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="请输入登陆账号"
            name="password"
            rules={[{ required: true, message: '请输入登陆账号~' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="用户名称"
            name="userName"
            rules={[{ required: true, message: '请输入登陆名称~' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </div>
      <div  span={24}>
        <Table 
          span={24}
          columns={columns} 
          bordered
          dataSource={ props && props.userList } 
          rowKey='log_id'
        />
      </div>
   </div>
  )
}

const mapState = state => ({
  // approveList = state.userController
  userList : state.userController.userList
})

const mapDispatch = (dispatch) => ({
  userControllerDispatch : dispatch.userController

})
const ApproveContainer = connect(mapState, mapDispatch)(Approve)
export default ApproveContainer;