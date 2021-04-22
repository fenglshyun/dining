
import React, { useEffect, useState, useCallback } from 'react'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
const MyTable = (props) => {
   const { columns, dataSource, total, title, key} = props
  
  return (
    <div>
      <h2>{title}</h2>
      <Table 
      columns={columns} 
      dataSource={dataSource} 
      rowKey={dataSource.log_id}
     
      pagination={{ 
        pageSize: 10, 
        total: total,
      }}
      // onChange={}
    />
    </div>
    
  )

}
export default MyTable