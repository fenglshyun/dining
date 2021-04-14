/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-04-14 16:00:39
 */
import {  get, post } from "../../util/axios";
 const health = {
  state:{
    state:0,
    studentHealth:{
      '1':1
    },
    studentHealthTable:{}
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
    saveStudentHealth(state, payload) {
       
      return {
        studentHealth: payload
      }
    },
    saveStudentHealthTable(state, payload) {
      return {
        studentHealthTable:payload
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
    async getStudentHealth(payload, rootState) {
      const res = await get('/epidemic/studentHealth')
      if(res.code === 0) {
        this.saveStudentHealth(res.data)
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },

    async getStudentHealthTable(payload, rootState) {
      console.log(payload);
      const res = await get('/epidemic/studentHealthTable', {
       page: payload.page,
       dateTime: payload.dateTime,
       type: payload.type
      })
      if(res.code === 0) {
        this.saveStudentHealthTable(res.data)
        return res.data
      } else {
        console.log(res);
        return 1
      }
    }
  }
}
export default health;