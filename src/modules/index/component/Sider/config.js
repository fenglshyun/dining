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
    title:'订单列表',
    icon: <OrderIconFont type="icon-liebiao"/>
  },
  {
    key: 'menuList',
    title:'菜品列表',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'addMenuType',
    title: '增加菜品类型',
    icon: <OrderIconFont type="icon-zengjia"/>
  },
  {
    key: 'addMenu',
    title: '增加菜品',
    icon: <OrderIconFont type="icon-9"/>
  },
  {
    key:'approve',
    title: '人员管理',
    icon: <OrderIconFont type="icon-renyuanguanli"/>
  }
 
];
export default configMenu;