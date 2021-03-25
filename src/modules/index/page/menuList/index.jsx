import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { Table } from "antd";
const Menu = props => {
  const { menuDispatch } = props;
  const getMenuList = async (page) => {
    await menuDispatch.findMenuList(page)
    console.log(props);
  }
  const onChangePage = (page) => {
    console.log(page.current);
    getMenuList(page.current)
  }
  useEffect( ()=> {
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
    key: 'goodNum'
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
      console.log(record);
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
        // <a onClick={() => clickDelete(record.log_id)}>Delete</a>
        <a href=""> Delete </a>
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