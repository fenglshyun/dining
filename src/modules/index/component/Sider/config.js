/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:32:16
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import OrderIconFont from "../../../iconfont/order";
 const configMenu = [
  {
    key:'order',
    title:'教师行程上报',
    icon: <OrderIconFont type="icon-liebiao"/>
  },
  {
    key: 'menuList',
    title:'学生行程数据查看',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'studentHealth',
    title: '学生健康数据展示',
    icon: <OrderIconFont type="icon-zengjia"/>
  },
  {
    key: 'addMenu',
    title: '返校批次数据',
    icon: <OrderIconFont type="icon-9"/>
  },
  {
    key:'studentInfo',
    title: '学生信息管理',
    icon: <OrderIconFont type="icon-renyuanguanli"/>
  }
 
];
export default configMenu;