import React from 'react';
import { Form, Input, Checkbox, Icon, Button ,Select} from '@wocloud/design';
import IceContainer from '@icedesign/container';


// import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;


const InputSuffix = ({ type, ...restProps }) => (
  <Icon {...restProps} type={type} style={{ color: 'rgba(0,0,0,.25)' }} />
);

const loginFormItems = [
  {
    id: 'username',
    options: { rules: [{ required: true, message: '请输入用户名' }] },
    component: (
      <Input
        type="text"
        placeholder="用户名"
        suffix={<InputSuffix type="user" />}
      />
    ),
  },
  {
    id: 'password',
    options: { rules: [{ required: true, message: '请输入密码' }] },
    component: (
      <Input
        type="password"
        placeholder="密码"
        suffix={<InputSuffix type="lock" />}
      />
    ),
  },

  {
    id: 'remember',
    options: { valuePropName: 'checked', initialValue: false },
    component: <Checkbox>自动登录</Checkbox>,
  },
];
const LoginPage = props => {
  const handleSubmit1 = () => {
    console.log(123)

  };

  const handleSubmitOne = e => {
    alert(312)
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleSelectChange = value => {
    console.log(value);
    props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  return (
    <IceContainer>

    <Form hideRequiredMark autoComplete="on" onSubmit={handleSubmit1}>
        {/*{loginFormItems.map(({ id, options, component }) => (*/}
        {/*  <Form.Item key={id}>*/}
        {/*    {props.form.getFieldDecorator(id, options)(component)}*/}
        {/*  </Form.Item>*/}
        {/*))}*/}


        <Form.Item label="Note">
          {props.form.getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {props.form.getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }} onClick={handleSubmitOne}>
          <Button type="primary" >
            Submit
          </Button>
        </Form.Item>

        {/*<Form.Item>*/}
        {/*  <Button type="primary" htmlType="submit" block>*/}
        {/*    登录*/}
        {/*  </Button>*/}
        {/*</Form.Item>*/}
      </Form>
    </IceContainer>
  );
};

export default Form.create()(LoginPage);
