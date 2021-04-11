/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-18 21:51:20
 */
import { get, post } from "../../util/axios";
const userController = {
  state:{
    info:'',
    userList:[]
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveInfo(state, payload) {
      return{
        info:payload
      }
    },
    saveUserList(state, payload) {
      return {
        userList: payload
      }
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getApproveList(payload, rootState) {
      console.log(payload)
      const res =  await get(`/user/getUserList`)
      console.log(res)
      if(res.code === 0) {
        this.saveUserList(res.data)
      }
     
    },
    async deleteUser (payload, rootState) {
      const res = await post (`/user/deleteUser`, {log_id: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async addUser(payload, rootState) {
      const res = await post (`/user/addUser`, {
        userInfo: payload
      })
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
  }
}
export default userController;