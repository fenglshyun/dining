/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:32:16
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
 const configMenu = [
   {
    key:'order',
    title:'订单列表'
   },

  {
    key: 'menu',
    icon: <MailOutlined />,
    title: '菜单管理',
    children: [
      {
        key: 'menuList',
        title:'菜品列表'
      },
      {
        key: 'addMenuType',
        title:'增加菜品类型'
      },
      {
        key: '3',
        title:'Option3'
      },
      {
        key: '4',
        title:'Option4'
      }
    ]
  },
  {
    key:'controller',
    title:'人员管理'
   },
 
];
export default configMenu;