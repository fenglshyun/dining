import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const addMenu = props => (
    <div>
      增加菜单
    </div>
)

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const addMenuContainer = connect(mapState, mapDispatch)(addMenu)
export default addMenuContainer;