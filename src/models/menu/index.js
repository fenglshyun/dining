/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 17:06:14
 * @LastEditTime: 2021-04-01 17:35:04
 * @LastEditors: lsh
 */
import { get, post } from "../../util/axios";
const menu = {
  state:{
    menuTypeList:[],
    menuList:{
      foodList: [],
      count: 0
    },
    orderList: {
      orderList: [],
      count: 0
    }
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveList(state, payload) {
      return{
        menuTypeList:payload
      }
    },
    saveMenuList(state, payload) {
      return {
        menuList: payload
      }
    },
    saveOrderList(state, payload) {
      return {
        orderList: payload
      }
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getMenuTypeList(payload, rootState) {
      const res =  await get(`/menu/findMenuType`)
      if(res.code === 0) {
        this.saveList(res.data)
        return res.data
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
      } else {
        return false
      }
     
    },
    async addMenuTypeList(payload, rootState) {
      const res = await post (`/menu/addMenuType`, {menuName: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },  

    async deleteMenuTypeList(payload, rootState) {
      const res = await post (`/menu/deleteMenuType`, {log_id: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async findMenuList(payload, rootState) {
      console.log(payload);
      const res =  await get(`/menu/findMenu`,{ page: payload })
      console.log(res)
      if(res.code === 0) {
        this.saveMenuList(res.data)
        return res.data
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
      }
    },
    async findOrderList(payload, rootState) {
      console.log(payload);
      const res =  await get(`/order/orderListPage`,{ page: payload })
      console.log(res)
      if(res.code === 0) {
        this.saveOrderList(res.data)
        return res.data
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
      }
    },
    async updateOrder(payload, rootState) {
      const res = await post (`/order/updateOrder`, { orderNumber: payload })
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async deleteGood(payload, rootState) {
      const res = await post (`/menu/deleteGood`, {log_id: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
  }
}
export default menu;