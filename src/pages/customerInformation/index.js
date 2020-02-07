import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Divider, Tabs,Form, Select, Input, Button,Card} from '@wocloud/design';
import { Link } from 'react-router-dom';
import { request } from '@wocloud/utils';
import PageTitle from '@/components/PageTitle';

// import styles from './index.module.scss';
const { TabPane } = Tabs;
const { Option } = Select;


const columns = [
  {
    title: '地址',
    dataIndex: 'address',
    render: text => <a>{text}</a>,
  },
  {
    title: '客户名称',
    dataIndex: 'name',
  },
  {
    title: '客户类型',
    dataIndex: 'type',
  },
  {
    title: '认证状态',
    dataIndex: 'status',
  },
  {
    title: '客户来源',
    dataIndex: 'source',
  },
  {
    title: '创建时间',
    dataIndex: 'time',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>修改</a>
          <Divider type="vertical" />

        <a>360画像</a>
      </span>
    ),
  },

];
const data = [
  {
    key: '1',
    address:'北京市海淀区',
    name: 'John Brown',
    age: 32,
    type:'金融',
    status:'已认证',
    source:'云策',
    time:'2019-02-03',
  },
  {
    key: '2',
    address:'北京市海淀区2',
    name: 'John Brown',
    age: 32,
    type:'金融',
    status:'已认证',
    source:'云策',
    time:'2019-02-03',
  },
  {
    key: '3',
    address:'北京市海淀区3',
    name: 'John Brown',
    age: 32,
    type:'金融',
    status:'已认证',
    source:'云策',
    time:'2019-02-03',
  },
  {
    key: '4',
    address:'北京市海淀区4',
    name: 'John Brown',
    age: 32,
    type:'金融',
    status:'已认证',
    source:'云策',
    time:'2019-02-03',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

export default function customerInformation() {


  return (
    <IceContainer>
      <PageTitle title="客户列表" />
      {/*<Link className={styles.link} to="/">*/}
      {/*  返回*/}
      {/*</Link>*/}
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="客户资料管理" key="1">
            <p>客户资料管理 1</p>
            <p>客户资料管理 1</p>
            <p>客户资料管理 1</p>
          </TabPane>
          <TabPane tab="用户资料管理" key="2">
            <p>用户资料管理2</p>
            <p>用户资料管理2</p>
            <p>用户资料管理2</p>
          </TabPane>
          <TabPane tab="账户资料管理" key="3">
            <p>账户资料管理3</p>
            <p>账户资料管理3</p>
            <p>账户资料管理3</p>
          </TabPane>
        </Tabs>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

    </IceContainer>
  );
}

