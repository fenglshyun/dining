/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-04-11 20:05:45
 * @LastEditTime: 2021-04-27 18:52:59
 * @LastEditors: lsh
 */

import React, {useEffect, useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';

const Count = props => {
  const ref1 = useRef()
  useEffect(() => {
    console.log(ref1);
  }, [ref1])
  
  return (
    <div>
      <Input ref={ref1} />
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const CountContainer = connect(mapState, mapDispatch)(Count)
export default CountContainer;