/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-04-11 20:05:45
 * @LastEditTime: 2021-04-11 20:05:58
 * @LastEditors: lsh
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Count = props => {
  
  return (
    <div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const CountContainer = connect(mapState, mapDispatch)(Count)
export default CountContainer;