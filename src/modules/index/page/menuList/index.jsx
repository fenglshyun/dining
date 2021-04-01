import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { Table, message } from "antd";
const Menu = props => {
  const { menuDispatch } = props;
  // let menuType = {}
  const [page, setPage] = useState(1)
  const [menuType, setMenuType] = useState({})
  const getMenuList = async (page) => {
    const res = await menuDispatch.findMenuList(page)
    console.log('----', res);
  }

  const clickDelete = async (log_id) => {
    const result = await menuDispatch.deleteGood(log_id)
    if(result === true) {
      message.success('删除成功')
      getMenuList(page)
    } else {
      message.error('删除失败')
    }
  };
  const getMenuTypeList = async () => {
   const result =  await menuDispatch.getMenuTypeList()
   result.forEach(e => {
    menuType[e.log_id]  = e.menuName
   });
    // menuType = result
    setMenuType(menuType)
    console.log(menuType);

  }
  

  const onChangePage = (page) => {
    setPage(page.current)
    getMenuList(page.current)
  }
  useEffect( async ()=> {
   
    await getMenuTypeList()
    getMenuList(1)
  
 }, [])




 const columns = [
  {
    title: '菜品标号',
    dataIndex: 'log_id',
    key: 'log_id'
  },
  {
    title: '菜品类型标号',
    dataIndex: 'goodNum',
    key: 'goodNum',
    render: (record) => {
      return (
        <span>{menuType[record]}</span>
      )
    }
  },
  {
    title: '菜品名称',
    dataIndex: 'goodName',
    key: 'goodName'
  },
  {
    title: '菜品图片',
    dataIndex: 'goodUrl',
    key: 'goodUrl',
    render: (record) => {
      return (
        <img  width="160" src={record} />
      )
    }
  },
  {
    title: '菜品价格',
    dataIndex: 'goodPrice',
    key: 'goodPrice'
  },
  {
    title: '是否上架',
    dataIndex: 'showTrue',
    key: 'showTrue',
    render: (record) => {
      return (
        <span>{record ? '是': '否'}</span>
      )
    }
  },
  {
    title: '简单描述',
    dataIndex: 'description',
    key: 'description',
    width: '20%',
    render: (record) => {
      return (
        <span>{record}</span>
      )
    }
  },
  {
    title: '添加时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (record) => {
      return (
        <a onClick={() => clickDelete(record.log_id)}>删除菜品</a>
        // <a href=""> Delete </a>
      )
    }
  },
 ]
  return (
    <div width="100%">
     <div  span={24}>
     <Table 
        span={24}
        columns={columns} 
        bordered
        dataSource={ props && props.menuList && props.menuList.foodList} 
        rowKey='log_id'
        pagination={{ 
          pageSize: 10, 
          total: props && props.menuList && props.menuList.count,
        }}
        onChange={onChangePage}
      />
     </div>
    </div>
)
} 

const mapState = state => ({
  menuList: state.menu.menuList
})

const mapDispatch = (dispatch) => ({
  menuDispatch: dispatch.menu
})
const MenuContainer = connect(mapState, mapDispatch)(Menu)
export default MenuContainer;