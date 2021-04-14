/*
 * @Description: 
 * @Author: lsh
 * @Email: 864115770@qq.com
 * @Date: 2021-03-24 11:34:40
 * @LastEditTime: 2021-04-14 16:40:14
 * @LastEditors: Please set LastEditors
 */
import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Table, message, Select, Upload  } from 'antd';
import { UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddMenu = props => {
  // const formRef = React.createRef();
  const [form] = Form.useForm();
  // const { getFieldDecorator } = this.props.form;
  const { menuDispatch } = props;
  const [menuType, setMenuType] = useState([])
  const [photoToken, setPhotoToken] = useState('')
  const [goodUrl, setGoodUrl] = useState('')
  const changeGoodUrl = useCallback((goodUrl) =>setGoodUrl(goodUrl), [])
  
  const getMenuTypeList = async () => {
   const result =  await menuDispatch.getMenuTypeList()
    setMenuType(result)
    console.log(menuType);
  }

 

  const onFinish = async (values) => {
    console.log(values);
    const submitForm = {
      ...values,
      goodNum: values.goodNum.value,
      goodUrl: goodUrl,
      showTrue: true
    }
    console.log(submitForm);
    const result = await menuDispatch.addGood(submitForm)
    if(result === true) {
      message.success('添加成功')
    } else {
      message.success('添加失败')
    }

  };
  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const renderOption = (arr, key, label) => {
    return (
      arr.map((item) => (
        <Option key={item[key]} value={item[key]} > {item[label]}</Option>
      ))
    )
  }
  

  useEffect( ()=> {
    getMenuTypeList()
   
  
 }, [])

  const MyUploadPhoto = (props) => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const { goodUrl, changeGoodUrl } = props;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const getPhotoToken = async () => {
      const result =  await menuDispatch.getPhotoToken()
      setPhotoToken(result)
      uploadProps.token = result
     }


     const uploadProps = {
      token: ''
    }
    const beforeUpload = (file = false) => {
      if(file === false) return false
      const isPNG = file.type === "image/png";
      const isJPEG = file.type === "image/jpeg";
      const isJPG = file.type === "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;
  
      if (!isPNG && !isJPEG && !isJPG) {
        message.error("上传头像图片只能是 jpg、png、jpeg 格式!");
        return false;
      }
      if (!isLt2M) {
        message.error("上传头像图片大小不能超过 2MB!");
        return false;
      }
      
      return uploadProps
    }
    const uploadStatus = (file) => {
      if(file.file.response) {
        const { response } = file.file
        setImageUrl (`http://img.dashabi666.com/${response.key}`)
        // imageUrl = `http://img.dashabi666.com/${response.key}`
        changeGoodUrl(`http://img.dashabi666.com/${response.key}`)
        console.log(imageUrl);

      }
    }
  
    const photoProps = {
      name: 'file',
      listType: "picture-card",
      action: 'https://upload-z2.qiniup.com',
      data: uploadProps,
      beforeUpload: beforeUpload()
     
      // onChange: uploadStatus()
    }

    useEffect(() => {
      getPhotoToken()
    }, [uploadProps.token])
    
    return (
      <Upload 
        {...photoProps} 
        onChange={uploadStatus}  
        maxCount={1}
       
        >
        {imageUrl ? null : uploadButton}
      </Upload>
    )
  }


  return(
    
    
    <div>
      <div>
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          span={8}
          form={form}
        >
          <Form.Item
            label="菜品名称"
            name="goodName"
            rules={[{ required: true, message: '请输入菜品名称' }]}
            >
            <Input />
          </Form.Item>
          
          <Form.Item name="goodNum" label="菜品类型"  rules={[{ required: true, message: '请输入菜品名称' }]}>
            
            <Select  
              key={menuType.length}   
              value={menuType.length} 
              labelInValue
              filterOption={false}  
              optionFilterProp="children"  
            >
              {renderOption(menuType, 'log_id', 'menuName')}

            </Select>
            
          
          </Form.Item>
    
          <Form.Item
            label="菜品价格"
            name="goodPrice"
            rules={[{ required: true, message: '请填写菜品价格' }]}
            >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="简单描述"
            name="description"
            >
            <Input />
          </Form.Item>
          
          <Form.Item
             label="上传图片"
             name="imgImage"
          >
            <MyUploadPhoto goodUrl={goodUrl} changeGoodUrl={changeGoodUrl}>
              
            </MyUploadPhoto>
          </Form.Item>
         

          <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>

          </Form.Item>
        </Form>
      </div>
     
    </div>
  )


}


const mapState = state => ({
  menuType: state.menu.menuTypeList,
  photoToken: state.menu.photoToken
})

const mapDispatch = (dispatch) => ({
  menuDispatch: dispatch.menu
})
const AddMenuContainer = connect(mapState, mapDispatch)(AddMenu)
export default AddMenuContainer;