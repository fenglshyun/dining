
import React, { useEffect, useState, useCallback } from 'react'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
const MyTable = (props) => {
   const { columns, dataSource, total} = props
  
  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
      rowKey='log_id'
      pagination={{ 
        pageSize: 10, 
        total: total,
      }}
      // onChange={}
    />
  )

}
export default MyTable