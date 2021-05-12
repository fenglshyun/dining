/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-13 21:17:24
 */
import {  post } from "../../util/axios";
import { setStorage } from "../../util/index";
 const login = {
  state:{
    state:0,
    token:'111',
    userPower: '',
    userName:'',
    userInfo:{}
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveUserPower(state, payload) {
      return {
        userPower: payload
      }
    },
    saveUserName(state, payload) {
      return {
        userName: payload
      }
    },
    saveToken(state, payload) {
      return{
        token:payload
      }
    },
    saveUserInfo(state, payload) {
      return {
        userInfo: payload
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
        this.saveToken(res.data.token)
        this.saveUserName(`${res.data.userName}`)
        setStorage('token', res.data.token)
        return res
      } else {
        return 1
      }
    },
    async getUserInfo(payload, rootState) {
      const res = await post('user/getUser', { token: payload})
      if(res.code === 0) {
        this.saveUserName(`${res.data.userName}`)
        this.saveUserInfo(res.data)
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getUserInfoAll(payload, rootState) {
      const res = await post('/user/userInfo', { userId: payload})
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async updateUserInfo(payload, rootState) {
      const res = await post('/user/update/updateInfo', { receiveData: payload})
      if(res.code === 0) {
        return true
      } else {
        console.log(res);
        return false
      }
    },
    async updateUserPassword(payload, rootState) {
      const res = await post('/user/update/updatePassword', { receiveData: payload})
      if(res.code === 0) {
        return true
      } else {
        console.log(res);
        return false
      }
    },
  }
}
export default login;