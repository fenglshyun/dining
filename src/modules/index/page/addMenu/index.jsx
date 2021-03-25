/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 11:34:40
 * @LastEditTime: 2021-03-25 13:29:27
 * @LastEditors: lsh
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const addMenu = props => (
    <div>
      增加菜品
    </div>
)

const mapState = state => ({
  
})

const mapDispatch = (dispatch) => ({
  menuDispatch: dispatch.menu
})
const addMenuContainer = connect(mapState, mapDispatch)(addMenu)
export default addMenuContainer;