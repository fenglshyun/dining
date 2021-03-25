/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-13 23:34:03
 */
import axios from 'axios';
import { getStorage } from './index'

// const http = axios.create({

// })
axios.defaults.timeout = 30000;
axios.defaults.baseURL = "http://localhost:7001/";


// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    const token = getStorage('token')
    // console.log(token);
    config.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`

    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error);
    })
  })
}

export function post (url, data) {
  return new Promise((resolve, reject) => {
    try {
      axios.post(url, data)
      .then((res) => {
        if(res.status === 200) { 
          resolve(res.data);
        } else{
          reject(res)
        }
        
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      })
    } catch (error) {
      console.log(error);
      reject(error);
    }
    
    
  })
}


