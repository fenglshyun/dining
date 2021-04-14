/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 11:37:09
 * @LastEditTime: 2021-04-14 17:04:05
 * @LastEditors: Please set LastEditors
 */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const AddMenuType = props => {
  const { menuDispatch } = props;

  

  const onFinish = async (values) => {
    console.log('Success:', values);
    const result = await menuDispatch.addMenuTypeList(values.menuName)
    if(result === true) {
      message.success('添加成功')
      getMenuTypeList()
    } else {
      message.success('添加失败')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const getMenuTypeList = async () => {
    await menuDispatch.getMenuTypeList()
    console.log(props);
  }

  const clickDelete = async (log_id) => {
    const result = await menuDispatch.deleteMenuTypeList(log_id)
    if(result === true) {
      message.success('删除成功')
      getMenuTypeList()
    } else {
      message.success('删除失败')
    }
  };

  useEffect( ()=> {
     getMenuTypeList()
   
  }, [])


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
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <a onClick={() => clickDelete(record.log_id)}>Delete</a>
        )
      }
    },
  ]
 
  
  
  return (
    <div>
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
          span={8}
        >
          <Form.Item
            label="菜品类型"
            name="menuName"
            rules={[{ required: true, message: '请输入菜品类型' }]}
            >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} >
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