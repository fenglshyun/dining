/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:22:49
 */
import React, { useState } from 'react'
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom'
import configMenu from "./config";
import style from "./index.module.less"
const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const Sider = (props) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [current, setCurrent] = useState(1)
  const history = useHistory()


 

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
          <Menu.Item key={sub.key}>{sub.title}</Menu.Item>
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
        defaultSelectedKeys={['order']}
        onClick={handleClick}
        className={style.side}
    >
      {renderSide(configMenu)}
    </Menu>
  );

}