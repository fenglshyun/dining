import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';

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