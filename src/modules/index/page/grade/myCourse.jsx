
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal, Form, Input, Button, Checkbox, Table, message } from 'antd';
import { MyTable } from "./component/index"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import  style  from "./index.module.less"
const MyCourse = props => {
  const [createGroupModel, setCreateGroupModel] = useState(false)

  const column = [
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName'
    },
    {
      title: '课程编号',
      dataIndex: 'courseNumber',
      key: 'courseNumber'
    },
    {
      title: '任课教师',
      dataIndex: 'courseTeacher',
      key: 'courseTeacher'
    },
    {
      title: '课程班级',
      dataIndex: 'courseClass',
      key: 'courseClass'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '添加',
      dataIndex: '',
      key: 'x',
      render: (record) => {
        return (
          <div>
             {/* <a onClick={createGroup(record)}>创建小组</a> */}
             <Button onClick={ ()=>createGroup(record) }> 创建小组</Button>
             <a style={{ marginLeft: 20 }} onClick={()=>enterCourse(record)}>进入课程</a>
          </div>
         
        )
      }
    }
  ]
  const createGroup = (log_id) => {
    setCreateGroupModel(true);
  }
  const handleOkCreateGroup = ()=> {
    setCreateGroupModel(false)
    console.log(createGroupModel);
  }
  const handleCancelCreateGroup = () => {
    setCreateGroupModel(false)
  }
  const enterCourse = () => {
    message.info('请先创建小组')
  }
  const dataSource = [
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    },
    {
      courseName: '数据库设计',
      courseNumber: 'S2030360',
      courseTeacher: '佩奇',
      courseClass: '030011701',
      createTime: '2021/04/16'
    }
  ];
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  }
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
  const onFinish = values => {
    console.log(values);
  };
   

  return (
    <div>
      <MyTable
        title={'课程列表'}
        columns={column}
        dataSource={dataSource}
        total={dataSource.length}
      
      >
      </MyTable>


      <div>
        <Modal title="创建小组" visible={createGroupModel}  
          footer={[
          // 重点：定义右下角 
            <Button onClick={handleCancelCreateGroup}>
              取消
            </Button>
          ]}
        >
         <div>
         <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
          <Form.List
            name="names"
          >
          {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayout)}
                label={index === 0 ? '组长学号' : '成员学号'}
                required={false}
                key={field.key}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "不能为空",
                  },
                ]}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "不能为空",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="请输入学号" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    style={{marginLeft: 10}}
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
               添加成员
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
          )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
         </div>
        </Modal>
      </div>
    </div>
)
} 

const mapState = state => ({
})

const mapDispatch = (dispatch) => ({

})
const MyCourseContainer = connect(mapState, mapDispatch)(MyCourse)
export default MyCourseContainer;