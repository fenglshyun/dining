
import React, { useEffect, useState, useCallback } from 'react'
import { Form, Input, Button, Checkbox, Table, message, Badge } from 'antd';
import  style  from "./index.module.less"
// const { Search } = Input;
const MySearch = props => {
  const searchValue = {
    studentNumber: '',
    name: ''


  }

  const onSearch = () => {
    console.log(searchValue);
  }
  const onchangeInput = (e) => {
    const { id, value } = e.target;
    searchValue[id] = value
    console.log(searchValue);
  }

  return (
    <div>
      {/* <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        allowClear={true}
      /> */}
      <div className={style.margin20}>
        <Input
          className={style.margins20}
          addonBefore={<span>学号搜索</span>}
          style={{ width: '20%' }} 
          allowClear={true}
          placeholder="input search text"
          onChange={onchangeInput}
          id="studentNumber"
          // defaultValue="0571" 
        />
        <Input
          className={style.margins20}
          addonBefore={<span>姓名搜索</span>}
          style={{ width: '20%' }} 
          allowClear={true}
          placeholder="input search text"
          onChange={onchangeInput}
          id="name"
        />
        <Button onClick={onSearch}>
          搜索
        </Button>

      </div>
      
    </div>
    
    
  )
}
export default MySearch