import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Tabs  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MySearch from "./component/MySearch"
import MyTable from "./component/MyTable"
import  style  from "./index.module.less"
import OnImport from "./component/onImport"
import { getStorage, clearStorage } from "../../../../util/index";

const { Search } = Input;
const { TabPane } = Tabs;
const StudentNoticed = props => {
  const { loginDispatch, healthDispatch } = props
  const [userInfo, setUserInfo] = useState({})
  const [msg, setMsg] = useState({})

 

  const getNoticed = async (studentNumber) => {
    const result =  await healthDispatch.studentGetNoticed(studentNumber)
   
    if(result) {
      message.success('通知获取成功')
      console.log(result.msg);
      setMsg(result.msg)
    } else {
      message.success('暂无通知')
    }
  }
 
  const callback = (key) => {
    console.log(key);
  }
  const getUserInfo = async (token) => {
    const result = await loginDispatch.getUserInfo(token)
    console.log(result);
    getNoticed(result.studentNumber)

    setUserInfo(result)
  }
 
  useEffect(() => {
    const token = getStorage('token')
    getUserInfo(token)
  }, [])
  // console.log(msg.startQuarantineNoticed);
  return (
    <div className={style.studentInfo}>
     
      <div>
        <h2>公告栏</h2>
      </div>
      <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="隔离通告" key="1">
          <div>
            {
              msg.startQuarantineNoticed && msg.startQuarantineNoticed.length != 0 ? 
              msg && msg.startQuarantineNoticed &&  msg.startQuarantineNoticed.map(element => {
                return (
                  <h2>
                    {element.noticed}
                    <a style={{paddingLeft: 20}} href="http://www.cqupt.edu.cn/">校园官网</a>
                    <div style={{paddingLeft: 20}}>
                      <span >
                        发布时间： {element.createTime}
                      </span>
                    </div>
                  </h2>           
                )
              
              }): '暂无通知'
          }
          </div>
        
        </TabPane>
        <TabPane tab="解除隔离通知" key="2">
          <div>
              {
               msg.startQuarantineNoticed && msg.endQuarantineNoticed.length != 0 ? 
                msg && msg.endQuarantineNoticed &&  msg.endQuarantineNoticed.map(element => {
                  return (
                    <h2>
                    {element.noticed}
                    <a style={{paddingLeft: 20}} href="http://www.cqupt.edu.cn/">校园官网</a>
                    <div style={{paddingLeft: 20}}>
                      <span >
                        发布时间： {element.createTime}
                      </span>
                    </div>
                  </h2>     
                  )
                
                }): '暂无通知'
            }
          </div>
        </TabPane>
        <TabPane tab="返校通知" key="3">
          <div>
                {
                  msg.startQuarantineNoticed && msg.backSchoolNoticed.length != 0 ? 
                  msg && msg.backSchoolNoticed &&  msg.backSchoolNoticed.map(element => {
                    return (
                      <h2>
                        {element.noticed}
                        <a style={{paddingLeft: 20}} href="http://www.cqupt.edu.cn/">校园官网</a>
                        <div style={{paddingLeft: 20}}>
                          <span >
                            发布时间： {element.createTime}
                          </span>
                        </div>
                      </h2>      
                    )
                  
                  }): '暂无通知'
              }
            </div>
        </TabPane>
      </Tabs>
      </div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({
  healthDispatch: dispatch.health,
  loginDispatch: dispatch.login
})
const StudentNoticedContainer = connect(mapState, mapDispatch)(StudentNoticed)
export default StudentNoticedContainer;