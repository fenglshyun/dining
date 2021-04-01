import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { Table, message } from "antd";
const Order = props => {
  const { menuDispatch } = props;
  const [page, setPage] = useState(1)
  const getOrderList = async (page) => {
    const res = await menuDispatch.findOrderList(page)
    console.log('----', res);
  }
  const onChangePage = (page) => {
    setPage(page.current)
    console.log(page.current);
    getOrderList(page.current)
  }
  const clickUpdate = async (log_id) => {
    console.log(props);
    const result = await menuDispatch.updateOrder(log_id)
    if(result === true) {
      message.success('确认成功')
      getOrderList(page)
    } else {
      message.error('确认失败')
    }
  }

  // const clickDelete = async (log_id) => {
  //   const result = await menuDispatch.deleteMenuTypeList(log_id)
  //   if(result === true) {
  //     message.success('删除成功')
  //     getMenuTypeList()
  //   } else {
  //     message.success('删除失败')
  //   }
  // };

  useEffect( ()=> {
    getOrderList(1)
  
 }, [])




 const columns = [
  {
    title: '订单标号',
    dataIndex: 'log_id',
    key: 'log_id'
  },
  {
    title: '下单用户',
    dataIndex: 'wxName',
    key: 'wxName'
  },
  {
    title: '消费金额',
    dataIndex: 'totalPrice',
    key: 'totalPrice'
  },
  {
    title: '就餐人数',
    dataIndex: 'eatPeople',
    key: 'eatPeople',
    render: (record) => {
      return (
       <span>{record} 人就餐</span>
      )
    }
  },
  {
    title: '菜品数量',
    dataIndex: 'goodCount',
    key: 'goodCount'
  },
  {
    title: '订单状态',
    dataIndex: 'state',
    key: 'state',
    render: (record) => {
      return (
        <span>{record === '1' ? '已下单': '已结账'}</span>
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
       if (record.state === '1' ) {
        return (
          <a onClick={() => clickUpdate(record.log_id)}> 支付确认 </a>
        )
       } else {
        return (
          <span> 已结账 </span>
        )
       }
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
        dataSource={ props && props.orderList && props.orderList.orderList} 
        rowKey='log_id'
        pagination={{ 
          pageSize: 10, 
          total: props && props.orderList && props.orderList.count,
        }}
        onChange={onChangePage}
      />
     </div>
    </div>
)
} 

const mapState = state => ({
  menuList: state.menu.menuList,
  orderList: state.menu.orderList
})

const mapDispatch = (dispatch) => ({
  menuDispatch: dispatch.menu
})
const OrderContainer = connect(mapState, mapDispatch)(Order)
export default OrderContainer;