import {  get, post } from "../../util/axios";
 const grade = {
  state:{
    state:0, 
    studentHealthTable: {}

  }, // initial state
  reducers: {
    // handle state changes with pure functions
    saveStudentHealthTable(state, payload) {
      return {
        studentHealthTable:payload
      }
    },
    
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getTeacherCourseList(payload, rootState) {
      const res = await post('/grade/course/teacher/get', {
        courseData: payload
      })
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getCourseStudentList(payload, rootState) {
      const res = await get('/grade/course/teacher/student/get', payload)
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getStudentPhone(payload, rootState) {
      const res = await get('/grade/course/teacher/student/phone/get', payload)
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return '暂无'
      }
    },
    async deleteCourseTeacher(payload, rootState) {
      const res = await post('/grade/course/teacher/student/delete', {
        log_id: payload
      })
      if(res.code === 0) {
        return true
      } else {
       
        return false
      }
    },
    async getGradeStudentList(payload, rootState) {
      const res = await get('/grade/course/teacher/person/grade/get', payload)
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getGradeGroupList(payload, rootState) {
      const res = await get('/grade/course/teacher/group/grade/get', payload)
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async postAddCourse(payload, rootState) {
      const res = await post('/grade/course/add', {courseData: payload})
      if(res.code === 0) {
        return true
      } else {
        console.log(res);
        return false
      }
    },
    async postDeleteCourse(payload, rootState) {
      const res = await post('/grade/course/delete', { log_id: payload})
      if(res.code === 0) {
        return true
      } else {
        console.log(res);
        return false
      }
    },
    async getStudentCourseList(payload, rootState) {
      const res = await post('/grade/course/student/get', {courseData: payload})
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async getStudentSearchCourseList(payload, rootState) {
      const res = await post('/grade/course/student/list/get', {receive: payload})
      if(res.code === 0) {
        return res.data
      } else {
        console.log(res);
        return 1
      }
    },
    async studentAddCourse(payload, rootState) {
      const res = await post('/grade/course/student/addCourse', {courseData: payload})
      if(res.code === 0) {
        return res.code
      } else {
        console.log(res);
        return res.code
      }
    },

    
  }
}
export default grade;