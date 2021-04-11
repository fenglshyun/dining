/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-17 22:49:24
 */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getStorage, clearStorage } from "../../../../util/index";
import style from  "./index.module.less"
const InfoTitle = props =>{
  const { loginDispatch } = props
  const [userName, setUserName] = useState('')
  let history = useHistory();

  const getUserName = async (token) => {
    const result = await loginDispatch.getUserInfo(token)
    console.log(result);
  }

  const breakLogin = () => {
    console.log('退出');
    clearStorage()
    history.push("/");
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
      <span className={style.title}>校园疫情管理系统</span>
      <div>
        <span className={style.user}>当前用户：{props.userName}</span>
        <span className={style.break} onClick={breakLogin}>退出</span>
      </div>
     
     
      
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