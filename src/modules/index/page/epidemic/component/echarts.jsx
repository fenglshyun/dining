import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
import * as echarts from 'echarts';
// const { Search } = Input;
const MyEcharts = props => {
  const { id, title, xData, seriesName, seriesData } = props
  
  const initEcharts = (xdata_1) => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById(`${id}`));
      // 绘制图表
    const option = {
      title: { text: title },
      tooltip: {},
      xAxis: {
          data: xData 
      },
      yAxis: {},
      series: [{
          name: seriesName,
          type: "bar",
          data: seriesData
      }]
    }
    xData && myChart.setOption(option);

    return myChart
  }
   
  useEffect (() => {

    initEcharts(xData)
   
  }, [props.xData])

  return (
    <div >
      <div id={`${id}`} style={{ width: 400, height: 400, margin: '40px'}}></div>
    </div>
    
    
  )
}
export default MyEcharts