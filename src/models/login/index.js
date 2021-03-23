/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-13 21:17:24
 */
import {  post } from "../../util/axios";
import { setStorage } from "../../util/index";
 const login = {
  state:{
    state:2,
    token:'111'
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload
    },
    saveToken(state, payload) {
      return{
        token:payload
      }
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment(payload)
    },
    async submitLogin(payload, rootState) {
      const res =  await post('user/login', payload)
      console.log(res)
      if(res.code === 0) {
        this.saveToken(res.data)
        setStorage('token', res.data)
      }
     
    }
  }
}
export default login;