/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:32:16
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined, FormOutlined } from '@ant-design/icons';
import OrderIconFont from "../../../iconfont/order";
 const configMenu = [
  {
    key:'addCourse',
    title:'添加课程',
    icon: <OrderIconFont type="icon-liebiao"/>
  },
  {
    key: 'myCourse',
    title:'我的课程',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'gradeForm',
    title: '成绩表单',
    icon: <OrderIconFont type="icon-zengjia"/>
  },
  {
    key: 'userInfo',
    title: '个人信息',
    icon: <OrderIconFont type="icon-9"/>
  }
 
];
const teacherMenu = [
  {
    key: 'myCourse',
    title:'我的课程',
    icon: <OrderIconFont type="icon-caipinpaihangbang"/>
  },
  {
    key: 'userInfo',
    title: '个人信息',
    icon: <OrderIconFont type="icon-9"/>
  }
 
];
export { configMenu, teacherMenu };