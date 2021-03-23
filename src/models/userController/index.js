/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-18 21:51:20
 */
import { get, post } from "../../util/axios";
const userController = {
  state:{
    info:''
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveInfo(state, payload) {
      return{
        info:payload
      }
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getApproveList(payload, rootState) {
      console.log(payload)
      const res =  await get(`/user/registerlist/`,
      {
        currPage: payload
      }
      )
      console.log(res)
      if(res.code === 0) {
        // this.saveToken(res.data)
        // saveInfo('token', res.data)
      }
     
    }
  }
}
export default userController;