/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 17:06:14
 * @LastEditTime: 2021-03-24 17:12:42
 * @LastEditors: lsh
 */
import { get, post } from "../../util/axios";
const menu = {
  state:{
    menuTypeList:[]
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveList(state, payload) {
      return{
        menuTypeList:payload
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
     
    }
  }
}
export default menu;