
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal, Form, Input, Button, Checkbox, Table, message, Tabs,Select, Alert  } from 'antd';
import { MyTable } from "./component/index"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import  style  from "./index.module.less"
const { Option } = Select;
const TeacherCourse = props => {
  const { gradeDispatch } = props
  const [createGroupModel, setCreateGroupModel] = useState(false)
  const [enterCourseStatus, setEnterCourseStatus] = useState(false)
  const [isEditCourseModalVisible, setIsEditCourseModalVisible] = useState(false)
  const [teacherCourseTable, setTeacherCourseTable] = useState({table: [], count: 0})
  const [courseKey, setCourseKey] = useState(0)

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  
  const column = [
    {
      title: '课程名称',
      dataIndex: 'courseName',
      key: 'courseName'
    },
    {
      title: '课程编号',
      dataIndex: 'courseNum',
      key: 'courseNum'
    },
    {
      title: '任课教师',
      dataIndex: 'teacherName',
      key: 'teacherName'
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
      render: (record) => { //todo:
        return (
          <div>
             {/* <a onClick={createGroup(record)}>创建小组</a> */}
             
             <a style={{ marginLeft: 20 }} onClick={()=>clickEnterCourseStatus(true, record)}>进入课程</a>
            
             <Button style={{ marginLeft: 20 }} onClick={ ()=>deleteCourseTeacher(record.log_id) }> 删除</Button>
          </div>
         
        )
      }
    }
  ]
  const clickEnterCourseStatus = (type, record) => {
    if(type){
      setEnterCourseStatus(true)
      console.log(record);
      setCourseKey(record.log_id)

    }else {
      setEnterCourseStatus(false)
    }
  }
  const clickEditCourse = () => {
    setIsEditCourseModalVisible(true)
  }
  const handleEditCourseOk = () => {
    setIsEditCourseModalVisible(false)
  } // TODO:
  const handleEditCourseCancel = () => {
    setIsEditCourseModalVisible(false)
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
  const addCourse = async(courseName, courseNum, courseClass, groupCount, teacherKey, teacherName) => {
    const result = await gradeDispatch.postAddCourse({courseName, courseNum, courseClass, groupCount, teacherKey, teacherName}) 
    if(result) {
      message.info('添加成功')
      setIsEditCourseModalVisible(false)
      getTeacherCourseTable(1,  props.userInfo.userId)
    }else {
      message.fail('添加失败')
    }
  }
  const deleteCourseTeacher = async (log_id) => {
    const result = await gradeDispatch.postDeleteCourse(log_id) 
    if(result) {
      message.info('删除成功')
      getTeacherCourseTable(1,  props.userInfo.userId)
    }else {
      message.fail('删除失败')
    }
  }
  const onFinishCreateCourse = values => {
    const {courseName, courseNum, courseClass, groupCount} = values
    const {userId, userName} = props.userInfo
    console.log(values);
    console.log(userId, );
    addCourse(courseName, courseNum, courseClass, groupCount, userId, userName)

  };
  const onFinish = values => {

  }
  const TabsContent = (props) => {
    const studentGradeColumnsDefault = [
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
        title: '小组',
        dataIndex: 'groupName',
        key: 'groupName',
      }, 
      {
        title: '小组分数',
        dataIndex: 'groupGrade',
        key: 'groupGrade',
      }, 
      {
        title: '学生分数',
        dataIndex: 'gradePerson',
        key: 'gradePerson',
      },
  
    ]
    const { courseKey } = props;
    const [courseStudentTable, setCourseStudentTable] = useState({table: [], count: 0})
    const [studentGradeColumns, setStudentGradeColumns] = useState(studentGradeColumnsDefault)
    const [studentGradeTable, setStudentGradeTable] = useState({table: [], count: 0})
    console.log(courseKey);

  

    const getCourseStudent = async (page = 1, teacherKey, courseKey) => {
      const result = await gradeDispatch.getCourseStudentList({ page, teacherKey, courseKey}) 
      console.log(result);  
      setCourseStudentTable(result)
    }
    const getStudentGradeTable = async(page, courseKey) => {
      const result = await gradeDispatch.getGradeStudentList({ page, courseKey}) 
      console.log(result); 
      setStudentGradeTable(result)
    }
    const getGroupGradeTable = async(page, courseKey) => {
      const result = await gradeDispatch.getGradeGroupList({ page, courseKey}) 
      console.log(result); 
      setStudentGradeTable(result)
    }
    const clickPhone = async (record) => {

      const { studentNumber }  = record
      const result = await gradeDispatch.getStudentPhone({ studentNumber}) 
      
      Modal.confirm({
        title: `联系方式${result}`
      })
    }

    const clickDeleteStudent = async (record) => {
      const { log_id }  = record

      Modal.confirm({
        title: `是否删除该学生`,
        onOk: async () => {
          const result = await gradeDispatch.deleteCourseTeacher(log_id) 
          if(result) {
            message.info('删除成功')
            getCourseStudent(1,props.props.userInfo.userId, courseKey )
          }else {
            message.fail('删除失败')
          }
        }
      }) 
    }

    const handleChange = (value) => {
      if(value === 'student') {
        const studentGradeColumns = [
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
            title: '小组',
            dataIndex: 'groupName',
            key: 'groupName',
          }, 
          {
            title: '小组分数',
            dataIndex: 'groupGrade',
            key: 'groupGrade',
          }, 
          {
            title: '学生分数',
            dataIndex: 'gradePerson',
            key: 'gradePerson',
          },
      
        ]
        getStudentGradeTable(courseKey, 1)
      
        setStudentGradeColumns(studentGradeColumns)
      } else {
        const studentGradeColumns = [
          {
            title: '小组编号',
            dataIndex: 'groupId',
            key: 'groupId',
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
          }
          
        ]
        getGroupGradeTable(courseKey, 1)
        setStudentGradeColumns(studentGradeColumns)
      }
      console.log(value);
  
    }



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
        dataIndex: 'courseClass',
        key: 'courseClass',
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
        render: (text, record) => { // TODO:
          console.log(record);
          console.log(text);
          return (
            <div>
              <a style={{ marginLeft: 20 }} onClick={()=>clickPhone(record)}>联系学生</a>
              <a style={{ marginLeft: 20 }} onClick={()=>clickDeleteStudent(record)}>删除</a>
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

    useEffect(() => {
      getCourseStudent(1,props.props.userInfo.userId, courseKey )
      console.log(props);
      getStudentGradeTable(courseKey, 1 )
      console.log('1111111111');
    }, [])
    
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
              dataSource={courseStudentTable.table}
              total={courseStudentTable.count}

            >
          </Table>
        </TabPane>
        <TabPane tab="学生成绩" key="3">
          <Select  defaultValue="学生成绩" style={{ width: 120, margin: 20 }} onChange={handleChange}>
            <Option value="student">学生成绩</Option>
            <Option value="group">小组成绩</Option>
           
          </Select>
          <Table
            columns={studentGradeColumns}
            dataSource={studentGradeTable.table}
            total={studentGradeTable.count}
          >
          </Table>
        </TabPane>
      </Tabs>
    )
  }
  const getTeacherCourseTable = async (page = 1, teacherKey) => {
    const result = await gradeDispatch.getTeacherCourseList({page, teacherKey}) 
    console.log(result);  
    setTeacherCourseTable(result)
  }

  useEffect(() => {
    props.userInfo && props.userInfo.userId && getTeacherCourseTable(1,  props.userInfo.userId)
  }, [props.userInfo])
   

  return (
    <div>
      {
        enterCourseStatus !== true ?  
        <div>

      
          <Button type="primary"  style={{ margin: 20, float: 'right' }} onClick={ ()=>clickEditCourse() }> 添加课程</Button>
          
          <MyTable
            title={'课程列表'}
            columns={column}
            dataSource={teacherCourseTable.table}
            total={teacherCourseTable.count}
            >
          </MyTable>
        </div>:
        <div>
          <Button type="primary" style={{ margin: 20, float: 'right' }} onClick={() => clickEnterCourseStatus(false)}>退出课程</Button>
          <TabsContent props = {props} courseKey= {courseKey} ></TabsContent>
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

      <div>
      <Modal title="Basic Modal" footer={null} destroyOnClose visible={isEditCourseModalVisible} onOk={handleEditCourseOk} onCancel={handleEditCourseCancel}> 
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinishCreateCourse}
        >
          <Form.Item
            label="课程名称"
            name="courseName"
            rules={[{ required: true}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="课程编号"
            name="courseNum"
            rules={[{ required: true}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="小组人数"
            name="groupCount"
            rules={[{ required: true}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="课程班级"
            name="courseClass"
            rules={[{ required: true}]}
          >
            <Input />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
)
} 

const mapState = state => ({
  userInfo: state.login.userInfo
})

const mapDispatch = (dispatch) => ({
  gradeDispatch: dispatch.grade

})
const TeacherCourseContainer = connect(mapState, mapDispatch)(TeacherCourse)
export default TeacherCourseContainer;