
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal, Form, Input, Button, Checkbox, Table, message, Tabs,Select } from 'antd';
import { MyTable } from "./component/index"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import  style  from "./index.module.less"
const { Option } = Select;
const TeacherCourse = props => {
  const [createGroupModel, setCreateGroupModel] = useState(false)
  const [enterCourseStatus, setEnterCourseStatus] = useState(false)

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
      align: 'center',
      render: (record) => {
        return (
          <div>
             {/* <a onClick={createGroup(record)}>创建小组</a> */}
             
             <a style={{ marginLeft: 20 }} onClick={()=>clickEnterCourseStatus(true)}>进入课程</a>
             <Button style={{ marginLeft: 20 }} onClick={ ()=>null }> 编辑</Button>
             <Button style={{ marginLeft: 20 }} onClick={ ()=>null }> 删除</Button>
          </div>
         
        )
      }
    }
  ]
  const clickEnterCourseStatus = (type) => {
    if(type){
      setEnterCourseStatus(true)
    }else {
      console.log('推出课程');
      console.log(enterCourseStatus);
      setEnterCourseStatus(false)
    }
  }
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
  const handleChange = () => {

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
  const TabsContent = (props) => {
    const { TabPane } = Tabs;

    const  callback = (key) => {
      console.log(key);
    }
    const auditColumns = [
      {
        title: '小组名称',
        dataIndex: 'groupName',
        key: 'groupName',
        align: 'center'
       
      },
      {
        title: '小组人数',
        dataIndex: 'personCount',
        key: 'personCount',
        align: 'center'
      },
      {
        title: '实验文件',
        dataIndex: 'field',
        key: 'field',
        align: 'center',
        render:() => {
          return (
            <div>
              <a style={{ marginLeft: 20 }} onClick={()=>clickEnterCourseStatus(true)}>实验文件</a>
            </div>
          )
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render:() => {
          return (
            <div>
              <a style={{ marginLeft: 20 }} onClick={()=>clickEnterCourseStatus(true)}>审核小组互评情况</a>
            </div>
          )
        }
      },
      {
        title: '实验分数',
        dataIndex: 'grade',
        key: 'grade',
        align: 'center',
        render:() => {
          return (
            <div>
              <Input  disabled placeholder="请输入分数" style={{ marginLeft: 20, width: "60%" }} ></Input>
            </div>
          )
        }
      },

    ]
    const auditData = [
      {
        groupName: '佩奇',
        personCount: '2',
        field: '111'

      },
      {
        groupName: '佩奇',
        personCount: '2',
        field: '111'

      },
      {
        groupName: '佩奇',
        personCount: '2',
        field: '111'

      }
    ]
    const studentListColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        key: 'studentNumber',
      },
      {
        title: '班级',
        dataIndex: 'classNumber',
        key: 'classNumber',
      }, 
      {
        title: '专业',
        dataIndex: 'major',
        key: 'major',
      },
      {
        title: '小组',
        dataIndex: 'groupName',
        key: 'groupName',
      }, 
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render:() => {
          return (
            <div>
              <a style={{ marginLeft: 20 }} onClick={()=>null}>联系学生</a>
              <a style={{ marginLeft: 20 }} onClick={()=>null}>删除</a>
            </div>
          )
        }
      },
    ]
    const studentListData = [
      {
        name: '王星星',
        studentNumber: '2017111111',
        classNumber: '11001710',
        major: '信息管理',
        groupName: '今天也要吃火锅'
      },
      {
        name: '王星星',
        studentNumber: '2017111111',
        classNumber: '11001710',
        major: '信息管理',
        groupName: '今天也要吃火锅'
      },
      {
        name: '王星星',
        studentNumber: '2017111111',
        classNumber: '11001710',
        major: '信息管理',
        groupName: '今天也要吃火锅'
      }
    ]
    const studentGradeColumns = [
      {
        title: '小组编号',
        dataIndex: 'groupNumber',
        key: 'groupNumber',
      },
      {
        title: '小组名称',
        dataIndex: 'groupName',
        key: 'groupName',
      },
      {
        title: '小组分数',
        dataIndex: 'groupGrade',
        key: 'groupGrade',
      }, 
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render:() => {
          return (
            <div>
              <a style={{ marginLeft: 20 }} onClick={()=>null}>联系学生</a>
              <a style={{ marginLeft: 20 }} onClick={()=>null}>删除</a>
            </div>
          )
        }
      },
    ]
    const studentGradeData = [
      {
        groupNumber: '1',
        groupName: '佩奇的火锅店',
        groupGrade: '90'
      },
      {
        groupNumber: '1',
        groupName: '佩奇的火锅店',
        groupGrade: '90'
      },
      {
        groupNumber: '1',
        groupName: '佩奇的火锅店',
        groupGrade: '90'
      }
    ]
    
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="审核及评分" key="1">
          <Table
            columns={auditColumns}
            dataSource={auditData}
          >

          </Table>
        </TabPane>
        <TabPane tab="学生名单" key="2">
          <Table
              columns={studentListColumns}
              dataSource={studentListData}
            >
          </Table>
        </TabPane>
        <TabPane tab="学生成绩" key="3">
          <Select  defaultValue="学生成绩" style={{ width: 120, margin: 20 }} onChange={handleChange}>
            <Option value="courseName">学生成绩</Option>
            <Option value="courseTeacher">小组成绩</Option>
           
          </Select>
          <Table
            columns={studentGradeColumns}
            dataSource={studentGradeData}
          >
          </Table>
        </TabPane>
      </Tabs>
    )
  }
   

  return (
    <div>
      {
        enterCourseStatus !== true ?  
        
        <MyTable
          title={'课程列表'}
          columns={column}
          dataSource={dataSource}
          total={dataSource.length}
          >
        </MyTable>:
        <div>
          <Button type="primary" style={{ margin: 20, float: 'right' }} onClick={() => clickEnterCourseStatus(false)}>退出课程</Button>
          <TabsContent ></TabsContent>
        </div>
        
      }
     




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
const TeacherCourseContainer = connect(mapState, mapDispatch)(TeacherCourse)
export default TeacherCourseContainer;