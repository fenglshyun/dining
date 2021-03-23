/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-16 18:42:43
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Approve = props => {
  const { userControllerDispatch } = props;
 
  const getApproveList = () => {
    // userControllerDispatch.getApproveList(1)
  }

  getApproveList()
  return (
    <div>
      成员审批111
    </div>
  )
}

const mapState = state => ({
  // approveList = state.userController
})

const mapDispatch = (dispatch) => ({
  userControllerDispatch : dispatch.userController

})
const ApproveContainer = connect(mapState, mapDispatch)(Approve)
export default ApproveContainer;