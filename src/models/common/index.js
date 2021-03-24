/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-18 21:13:14
 */
import { get } from "../../util/axios";
 const common = {
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
    // async getInfo(payload, rootState) {
    //   const res =  await get('api/user/register', payload)
    //   console.log(res)
    //   if(res.code === 0) {
    //     this.saveToken(res.data)
    //     // saveInfo('token', res.data)
    //   }
     
    // }
  }
}
export default common;