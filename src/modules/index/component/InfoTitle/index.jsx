/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-17 22:49:24
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from  "./index.module.less"
const InfoTitle = props =>{
  const { loginDispatch } = props
  return (
    <div className={style.top}>
      <span className={style.title}>智慧餐饮管理系统</span>
      <span className={style.user}>当前用户：{props.Info}</span>
    </div>
  )
} 

const mapState = state => ({
    Info: state.login.userPower
})

const mapDispatch = (dispatch) => ({
    loginDispatch : dispatch.login
})
const InfoTitleContainer = connect(mapState, mapDispatch)(InfoTitle)
export default InfoTitleContainer;