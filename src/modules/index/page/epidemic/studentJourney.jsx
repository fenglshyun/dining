import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';
import EpidemicEcharts from './component/epidemicEcharts'
const Journey = props => {
  
  return (
    <div>
      111
      <EpidemicEcharts>

      </EpidemicEcharts>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const JourneyContainer = connect(mapState, mapDispatch)(Journey)
export default JourneyContainer;