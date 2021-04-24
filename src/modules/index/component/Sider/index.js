/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:22:49
 */
import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router-dom'
import {configMenu, studentMenu} from "./config";
import { connect } from 'react-redux'
import style from "./index.module.less"
const { SubMenu } = Menu;


 const Sider = (props) => {
  console.log(props);
  const { loginDispatch } = props
  const [openKeys, setOpenKeys] = useState(['order']);
  const { pathname } = useLocation(); 
  const history = useHistory()


  
  useEffect(() =>{
    const params = pathname.split('/')
    // getUserName()
    setOpenKeys([params[2]])
    console.log(props.userInfo);
    
    
  },[pathname, props.userInfo && props.userInfo.power ])


 

  const renderSide = (optionSide) => {
    let sideHtml = ''
    sideHtml =  optionSide.map((sub, i) => {
      if(sub.children) {
        return (
          <SubMenu key={sub.key} icon={sub.icon} title={sub.title}>
            { 
              sub.children && sub.children.map((item, i ) => {
                return (
                  <Menu.Item key={item.key}>{item.title}</Menu.Item>
                )
              })
            }
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={sub.key} icon={sub.icon} >{sub.title}</Menu.Item>
        )
      }

    })
    return sideHtml
  }

  const handleClick = e => {
    console.log('click ', e);
    history.push(`/index/${e.key}`)

  };
  return (
    <Menu 
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={openKeys}
        onClick={handleClick}
        className={style.side}
        key={props.userInf}
    >
     
      {
       
       props.userInfo && props.userInfo.power === "root" ? renderSide(configMenu) : (props.userInfo && props.userInfo.power === "student" ?  renderSide(studentMenu): renderSide(configMenu) )
      }
      {/* {renderSide(studentMenu)} */}
     
    </Menu>
  );

}
const mapState = state => ({
  userInfo: state.login.userInfo
})

const mapDispatch = (dispatch) => ({
  loginDispatch: dispatch.login
})
const SiderContainer = connect(mapState, mapDispatch)(Sider)
export default SiderContainer;