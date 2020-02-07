import React, {useState, useEffect} from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from '@wocloud/design';
import IceContainer from '@icedesign/container';
import residences from './area';

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

const InputSuffix = ({type, ...restProps}) => (
  <Icon {...restProps} type={type} style={{color: 'rgba(0,0,0,.25)'}}/>
);

const loginFormItems = [
  {
    id: 'username',
    options: {rules: [{required: true, message: '请输入用户名'}]},
    component: (
      <Input
        type="text"
        placeholder="用户名"
        suffix={<InputSuffix type="user"/>}
      />
    ),
  },
  {
    id: 'password',
    options: {rules: [{required: true, message: '请输入密码'}]},
    component: (
      <Input
        type="password"
        placeholder="密码"
        suffix={<InputSuffix type="lock"/>}
      />
    ),
  },

  {
    id: 'remember',
    options: {valuePropName: 'checked', initialValue: false},
    component: <Checkbox>自动登录</Checkbox>,
  },
];
const newFrom = props => {

  const [confirmDirty, setConfirmDirty] = useState(false);
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const handleSubmit1 = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const compareToFirstPassword = (rule, value, callback) => {
    const {form} = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const {form} = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  const handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    setAutoCompleteResult(autoCompleteResult);
    // this.setState({ autoCompleteResult });
  };

  const handleConfirmBlur = e => {
    const {value} = e.target;
    setConfirmDirty(confirmDirty || !!value);
    // this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };


  const {getFieldDecorator} = props.form;

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
  })(
    <Select style={{width: 70}}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>,
  );

  const websiteOptions = autoCompleteResult.map(website => (
    <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
  ));

  return (
    <IceContainer>

      <Form hideRequiredMark autoComplete="on" {...formItemLayout} onSubmit={handleSubmit1}>
        <Row>
          <Col  md={12} xs={12}>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input/>)}
            </Form.Item></Col>
          <Col  md={12} xs={12}>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              })(<Input.Password/>)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={handleConfirmBlur}/>)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <span>
              Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
              })(<Input/>)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="Habitual Residence">
              {getFieldDecorator('residence', {
                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [
                  {type: 'array', required: true, message: 'Please select your habitual residence!'},
                ],
              })(<Cascader options={residences}/>)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone', {
                rules: [{required: true, message: 'Please input your phone number!'}],
              })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="Website">
              {getFieldDecorator('website', {
                rules: [{required: true, message: 'Please input website!'}],
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={handleWebsiteChange}
                  placeholder="website"
                >
                  <Input/>
                </AutoComplete>,
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{required: true, message: 'Please input the captcha you got!'}],
                  })(<Input/>)}
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </IceContainer>
  );
};

export default Form.create()(newFrom);
