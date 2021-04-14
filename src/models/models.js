/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2020-12-26 14:43:37
 */
// export const count = {
//     state: 3, // initial state
//     reducers: {
//       // handle state changes with pure functions
//       increment(state, payload) {
//         return state + payload
//       }
//     },
//     effects: {
//       // handle state changes with impure functions.
//       // use async/await for async actions
//       async incrementAsync(payload, rootState) {
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         this.increment(payload)
//       }
//     }
// }
export { default as login } from './login'
export { default as common } from './common'
export { default as userController } from './userController'
export { default as menu } from './menu'
export { default as health } from './epidemic'