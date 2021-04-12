import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
import * as echarts from 'echarts';
// const { Search } = Input;
const MyEcharts = props => {
  useEffect (() => {
    console.log('echarts');
    // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '未打卡人数汇总' },
            tooltip: {},
            xAxis: {
                data: ["软件工程学院", "通信学院", "国际学院", "传媒学院", "外国语学院", "计算机学院","传媒学院", "外国语学院", "计算机学院"]
            },
            yAxis: {},
            series: [{
                name: "人数",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20,10,10,10]
            }]
        });
  })

  return (
    <div >
      <div id="main" style={{ width: 800, height: 400, margin: 'auto'}}></div>
    </div>
    
    
  )
}
export default MyEcharts