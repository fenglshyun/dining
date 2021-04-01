/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 11:34:40
 * @LastEditTime: 2021-03-27 14:22:33
 * @LastEditors: lsh
 */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select  } from 'antd';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddMenu = props => {
  // const formRef = React.createRef();
  const [form] = Form.useForm();
  // const { getFieldDecorator } = this.props.form;
  const { menuDispatch } = props;
  const [menuType, setMenuType] = useState([])

  const getMenuTypeList = async () => {
   const result =  await menuDispatch.getMenuTypeList()
    setMenuType(result)
    console.log(menuType);
  }

  const onFinish = async (values) => {
    const submitForm = {
      ...values,
      goodNum: values.goodNum.value
    }
    // const result = await menuDispatch.addMenuTypeList(values.menuName)
    // if(result === true) {
    //   message.success('添加成功')
    //   getMenuTypeList()
    // } else {
    //   message.success('添加失败')
    // }
  };
  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const renderOption = (arr, key, label) => {
    return (
      arr.map((item) => (
        <Option key={item[key]} value={item[key]} > {item[label]}</Option>
      ))
    )
  }

  useEffect( ()=> {
    getMenuTypeList()
  
 }, [])
  return(
    
    
    <div>
      <div>
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          span={8}
          form={form}
        >
          <Form.Item
            label="菜品名称"
            name="goodName"
            rules={[{ required: true, message: '请输入菜品名称' }]}
            >
            <Input />
          </Form.Item>
          
          <Form.Item name="goodNum" label="菜品类型"  rules={[{ required: true, message: '请输入菜品名称' }]}>
            
            <Select  
              key={menuType.length}   
              value={menuType.length} 
              labelInValue
              filterOption={false}  
              optionFilterProp="children"  
            >
              {renderOption(menuType, 'log_id', 'menuName')}

            </Select>
            
          
          </Form.Item>
    
          <Form.Item
            label="菜品价格"
            name="goodPrice"
            rules={[{ required: true, message: '请填写菜品价格' }]}
            >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="简单描述"
            name="description"
            >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
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
const AddMenuContainer = connect(mapState, mapDispatch)(AddMenu)
export default AddMenuContainer;