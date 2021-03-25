/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-17 22:49:24
 */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStorage } from "../../../../util/index";
import style from  "./index.module.less"
const InfoTitle = props =>{
  const { loginDispatch } = props
  const [userName, setUserName] = useState('')

  const getUserName = async (token) => {
    const result = await loginDispatch.getUserInfo(token)
    console.log(result);
  }


  useEffect(() => {
    if(!props.userName) {
     const token = getStorage('token')
     getUserName(token)
    }
    setUserName(props.userName)
  }, [userName])
  return (
    <div className={style.top}>
      <span className={style.title}>智慧餐饮管理系统</span>
      <span className={style.user}>当前用户：{props.userName}</span>
    </div>
  )
} 

const mapState = state => ({
    userPower: state.login.userPower,
    userName: state.login.userName
})

const mapDispatch = (dispatch) => ({
    loginDispatch : dispatch.login
})
const InfoTitleContainer = connect(mapState, mapDispatch)(InfoTitle)
export default InfoTitleContainer;