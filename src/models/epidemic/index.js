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
     
    },
    studentHealthTable:{},
    studentJourneyTable: {},
    studentQuarantineTable: {},
    eidemicEcharts: [],
    collegeQuarantine: {},
    studentUserInfo: {},
    studentBackBatch: {},
    studentBackQuarantine: {}
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
    },
    saveStudentJourneyTable(state, payload) {
      return {
        studentJourneyTable: payload
      }
    },
    saveStudentQuarantineTable (state, payload) {
      return {
        studentQuarantineTable: payload
      }
    },
    saveEpidemicEcharts (state, payload) {
      return {
        eidemicEcharts: payload
      }
    },
    saveCollegeQuarantine (state, payload) {
      return {
        collegeQuarantine: payload
      }
    },
    saveStudentUserInfo(state, payload) {
      return {
        studentUserInfo: payload
      }
    },
    saveStudentBackBatch(state, payload) {
      return {
        studentBackBatch: payload
      }
    },
    saveStudentBackQuarantine(state, payload) {
      return {
        studentBackQuarantine: payload
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
    async getStudentUserInfo(payload, rootState) {
      const res = await get('/user/getStudentUserInfo',{page: payload})
      if(res.code === 0) {
        this.saveStudentUserInfo(res.data)
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getStudentInfo(payload, rootState) {
      const res = await get('/epidemic/studentHealth',{page: payload})
      if(res.code === 0) {
        this.saveStudentHealth(res.data)
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getStudentHealth(payload, rootState) {
      const res = await get('/epidemic/studentHealth', {dateTime: payload})
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
    },
    async getStudentJourney (payload, rootState) { // 学生行程
      const res = await get('/epidemic/studentJourney', {
        page: payload
       })
       if(res.code === 0) {
         this.saveStudentJourneyTable(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async getStudentQuarantine (payload, rootState) { // 获取隔离学生名单
      const res = await get('/epidemic/studentQuarantine', {
        page: payload
       })
       if(res.code === 0) {
         this.saveStudentQuarantineTable(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async getEpidemicEcharts (payload, rootState) { // 获取隔离学生名单
      const res = await get('/epidemic/locationJourney',{page: payload})
       if(res.code === 0) {
         this.saveEpidemicEcharts(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async getCollegeQuarantine (payload, rootState) { // 获取隔离学生名单
      const res = await get('/epidemic/getCollegeQuarantine',{page: payload})
       if(res.code === 0) {
         this.saveCollegeQuarantine(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async postStudentUserInfo (payload, rootState) {
      const res = await post (`/epidemic/post/upload/userInfo`, { dataArray: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async postStudentHealth (payload, rootState) {
      const res = await post (`/epidemic/post/upload/studentHealth`, { dataArray: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async postStudentJourney (payload, rootState) {
      const res = await post (`/epidemic/post/upload/studentJourney`, { dataArray: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async updateStudentQuarantine (payload, rootState) {
      const res = await post (`/epidemic/post/studentQuarantine`, { log_id: payload.log_id, quarantine: payload.quarantine})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async getStudentBackBatch (payload, rootState) { // 获取学生返校批次
      const res = await get('/epidemic/getStudentJourneyBatch',{page: payload.page, type: payload.type})
       if(res.code === 0) {
         this.saveStudentBackBatch(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async getStudentBackQuarantine (payload, rootState) { // 获取学生返校 隔离名单
      const res = await get('/epidemic/getStudentQuarantine',{page: payload})
       if(res.code === 0) {
         this.saveStudentBackQuarantine(res.data)
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async updateStudentBackQuarantine (payload, rootState) { // 更改学生隔离状态
      const res = await post (`/epidemic/updateQuarantine`, { log_id: payload.log_id, quarantine: payload.quarantine})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async getStudentBackCount (payload, rootState) { // 获取学生返校 批次条数
      const res = await get('/epidemic/getStudentBackCount',{page: payload})
       if(res.code === 0) {
         return res.data
       } else {
         console.log(res);
         return 1
       }
    },
    async postStudentJourney (payload, rootState) { // 导入返校数据
      const res = await post (`/epidemic/post/upload/backSchool`, { dataArray: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async studentPostHealth (payload, rootState) {
      const res = await post (`/epidemic/student/post/health`, { postData: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async studentPostJourney (payload, rootState) {
      const res = await post (`/epidemic/student/post/journey`, { postData: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async studentUpdatePassword (payload, rootState) {
      const res = await post (`/epidemic/student/update/password`, { postData: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async studentGetNoticed (payload, rootState) {
      const res = await get (`/epidemic/student/get/noticed`, { studentNumber: payload})
      if(res.code === 0) {
        return res.data
      }else {
        return false
      }
    },
    async studentAddNoticed (payload, rootState) {
      const res = await post (`/epidemic/student/post/noticed`, { postData: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    },
    async studentAddBatchNoticed (payload, rootState) {
      const res = await post (`/epidemic/student/post/batchNoticed`, { type: payload})
      if(res.code === 0) {
        return true
      }else {
        return false
      }
    }
  }
}
export default health;