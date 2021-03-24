/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 11:37:09
 * @LastEditTime: 2021-03-24 17:31:58
 * @LastEditors: lsh
 */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const columns = [
  {
    title: '菜品类型标号',
    dataIndex: 'log_id',
    key: 'log_id'
  },
  {
    title: '菜品类型名称',
    dataIndex: 'menuName',
    key: 'menuName'
  },
  {
    title: '添加时间',
    dataIndex: 'createTime',
    key: 'createTime'
  }
]

const AddMenuType = props => {
  const { menuDispatch } = props;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const getMenuTypeList = async () => {
    await menuDispatch.getMenuTypeList()
    console.log(props);
  }

  useEffect( ()=> {
     getMenuTypeList()
   
  }, [])
 
  
  
  return (
    <div>
      增加菜品类型
      <div>
      <Table 
        columns={columns} 
        dataSource={props.menuType} 
        rowKey='log_id'
      />
      </div>
      <div>
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="菜品类型"
            name="menuName"
            rules={[{ required: true, message: '请输入菜品类型' }]}
            >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
)
}


const mapState = state => ({
  menuType: state.menu.menuTypeList
})

const mapDispatch = (dispatch) => ({
  menuDispatch: dispatch.menu
})
const AddMenuTypeContainer = connect(mapState, mapDispatch)(AddMenuType)
export default AddMenuTypeContainer;