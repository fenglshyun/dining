/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-13 19:11:51
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {  Form, Input, Button, Checkbox, message } from 'antd'
import style from  "./index.module.less"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = props =>{
  const { loginDispatch } = props
  let history = useHistory();

  const onFinish = async (values) => {
    const { userId, password } = values
    const result =  await loginDispatch.submitLogin({
      userId,
      password
    })
    if(result === 0) {
      message.success('登陆成功')
      history.push("/index/order");
    } else {
      message.error('账号密码错误')
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error('非有效信息，请重新输入')
  };

  const FormInfo = (props) => {
    return (
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="账号"
        name="userId"
        rules={[{ required: true, message: '请输入账号' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
    
  }
  return (
    <div className={style.login}>
      <div className={style.form}>
        <h2>智慧餐饮管理系统</h2>
        <FormInfo />
      </div>
      
    </div>
  )
}
// 映射state
const mapState = state => ({
    count: state.login.state,
    token: state.login.token

})

// const mapDispatch = ({ login: { increment, incrementAsync }}) => ({
//     increment: () => increment(1),
//     incrementAsync: () => incrementAsync(1)
// })
const mapDispatch = (dispatch) => ({
  loginDispatch : dispatch.login
})

const LoginContainer = connect(mapState, mapDispatch)(Login)
export default LoginContainer;