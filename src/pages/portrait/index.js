import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import {Descriptions,Tabs, Table, Divider, Form, Input, Button,Card} from '@wocloud/design';
import { Link } from 'react-router-dom';
import { request } from '@wocloud/utils';
import PageTitle from '@/components/PageTitle';

// import styles from './index.module.scss';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const businessColumns =[
  {
    title: '通知方式',
    dataIndex: 'type',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '操作时间',
    dataIndex: 'time',
  },
  {
    title: '状态',
    dataIndex: 'status ',
  }
];
const businessData = [
  {
    key: '1',
    type:'站内信',
    title: '预付费',
    content:'您有预付费资源进行释放，释放后数据无法恢复。 产品信息 到期时间',
    time:'2017-10-01 12:00',
    status:'未通知',
  },
];


const billData = [
  {
    key: '1',
    total:'123',
    December:'1',
    November:'2',
    October:'3',
    September:'4',
    August:'5',
  },
];
// January 一月
// February    二月
// March   三月
// April  四月
// May   五月
// June   六月
// July 七月


const billColumns = [
  {
    title: '账单总金额',
    dataIndex: 'total',
  },
  {
    title: '12月',
    dataIndex: 'December',
  },
  {
    title: '11月',
    dataIndex: 'November',
  },
  {
    title: '10月',
    dataIndex: 'October',
  },
  {
    title: '9月',
    dataIndex: 'September',
  },{
    title: '8月',
    dataIndex: 'August',
  }
];

const customerData = [
  {
    key: '1',
    index:'1',
    type:'沃云A',
    number:'099ALW432135',
    manager:'张三',
    phone:'13244888888',
    time:'2017-10-01 12:00',
  },
  {
    key: '2',
    index:'2',
    type:'沃云A',
    number:'099ALW432135',
    manager:'张三',
    phone:'13244888888',
    time:'2017-10-01 12:00',
  },
  {
    key: '3',
    index:'3',
    type:'沃云A',
    number:'099ALW432135',
    manager:'张三',
    phone:'13244888888',
    time:'2017-10-01 12:00',
  }
];
const customerColumns = [
  {
    title: '序号',
    dataIndex: 'index',
  },
  {
    title: '产品类型',
    dataIndex: 'type',
  },
  {
    title: '业务号码',
    dataIndex: 'number',
  },
  {
    title: '关联客户经理',
    dataIndex: 'manager',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
  },{
    title: '操作时间',
    dataIndex: 'time',
  }
];
export default function portrait() {


  return (
    <IceContainer>
      {/*<PageTitle title="客户名称：河北XXX公司" />*/}
      {/*<Link className={styles.link} to="/">*/}
      {/*  返回*/}
      {/*</Link>*/}
      <Descriptions title="客户名称：河北XXX公司">
        <Descriptions.Item label="发展人">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="客户类型：">1810000000</Descriptions.Item>
        <Descriptions.Item label="省份">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="发展人编码">empty</Descriptions.Item>
        <Descriptions.Item label="联系电话">
          18236911783
        </Descriptions.Item>

        <Descriptions.Item label="地市">empty</Descriptions.Item>
        <Descriptions.Item label="创建时间">empty</Descriptions.Item>
        <Descriptions.Item label="客户等级 ">empty</Descriptions.Item>
        <Descriptions.Item label="积分">empty</Descriptions.Item>

      </Descriptions>

      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="用户概览" key="1">
          <h3>用户概览</h3>
          <Table columns={customerColumns} dataSource={customerData} size="middle" />
          <h3>账单信息</h3>
          <Table columns={billColumns} dataSource={billData} size="middle" />
          <h3>业务通知</h3>
          <Table columns={businessColumns} dataSource={businessData} size="middle" />



        </TabPane>
        <TabPane tab="客户资料" key="2">
          客户资料
        </TabPane>
        <TabPane tab="资源信息" key="3">
          资源信息
        </TabPane>
        <TabPane tab="订单信息" key="4">
          订单信息
        </TabPane>
        <TabPane tab="工单信息" key="5">
          工单信息
        </TabPane>
        <TabPane tab="通知信息" key="6">
          通知信息
        </TabPane>
      </Tabs>

    </IceContainer>
  );
}

