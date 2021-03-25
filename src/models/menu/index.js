/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 17:06:14
 * @LastEditTime: 2021-03-25 14:58:30
 * @LastEditors: lsh
 */
import { get, post } from "../../util/axios";
const menu = {
  state:{
    menuTypeList:[],
    menuList:{
      foodList: [],
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
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getMenuTypeList(payload, rootState) {
      console.log(payload)
      const res =  await get(`/menu/findMenuType`)
      console.log(res)
      if(res.code === 0) {
        this.saveList(res.data)
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
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
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
      }
    }
  }
}
export default menu;