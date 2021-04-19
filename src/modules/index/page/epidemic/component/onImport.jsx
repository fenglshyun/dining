import React from 'react'
import { Input, Icon, Button, Upload  } from 'antd'
import * as XLSX from 'xlsx';
import  styles  from "./index.module.less"
const OnImport = props => {
  const { receiveChildren, aHref } = props
  const onImportExcel = (file) => {
    const { files } = file.target;
    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const { result } = event.target;
        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });
        let data = []; // 存储获取到的数据
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        console.log(data);
        receiveChildren(data)
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        console.log('文件类型不正确');
        return;
      }
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }
  
  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <Button className={`${styles['upload-wrap']} uploadAfter`}>
          <Icon type='upload' />
          <input className={`${styles['file-uploader']}` } type='file' accept='.xlsx, .xls' onChange={onImportExcel} />
          {/* <span  className={styles['upload-text']}  >上传文件</span> */}
          上传文件
        </Button>
        <p className={styles['upload-tip']}>支持 .xlsx、.xls 格式的文件</p>
        <Button style={{marginLeft: 20}} href={aHref}> 点击下载示</Button>
      </div >
    </div>
  )
} 
export default OnImport