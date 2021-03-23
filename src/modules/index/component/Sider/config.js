/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-15 20:32:16
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
 const configMenu = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    title: '成员管理',
    children: [
      {
        key: 'approve',
        title:'成员审批'
      },
      {
        key: '2',
        title:'Option2'
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
    key: 'sub2',
    icon: <AppstoreOutlined />,
    title: 'Navigation Two',
    children: [
      {
        key: '5',
        title:'Option5'
      },
      {
        key: '6',
        title:'Option6'
      },
      {
        key: '7',
        title:'Option7'
      },
      {
        key: '8',
        title:'Option8'
      }
    ]
  }
];
export default configMenu;