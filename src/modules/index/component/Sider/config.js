/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:32:16
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined, FormOutlined } from '@ant-design/icons';
import OrderIconFont from "../../../iconfont/order";
 const configMenu = [
  {
    key:'studentInfo',
    title: '学生信息管理',
    icon: <OrderIconFont type="icon-renyuanguanli"/>
  },
  {
    key:'teacherJourney',
    title:'教师行程数据查看',
    icon: <OrderIconFont type="icon-liebiao"/>
  },
  {
    key: 'studentJourney',
    title:'学生行程数据查看',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'studentHealth',
    title: '学生健康数据展示',
    icon: <OrderIconFont type="icon-zengjia"/>
  },
  {
    key: 'comeSchool',
    title: '返校批次数据',
    icon: <OrderIconFont type="icon-9"/>
  },
  
  {
    key:'quarantine',
    title: '中高风险地区设置',
    icon: <FormOutlined />
  }
 
];
const studentMenu = [
  {
    key:'studentNoticed',
    title:'通知中心',
    icon: <OrderIconFont type="icon-9"/>
  },
  {
    key: 'studentPunchCard',
    title:'健康打卡',
    icon: <OrderIconFont type="icon-renyuanguanli"/>
  },
  {
    key: 'StudentPostJourney',
    title:'行程上报',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'StudentPersonInfo',
    title:'个人信息',
    icon: <OrderIconFont type="icon-liebiao"/>
  },
]
export  {configMenu, studentMenu};