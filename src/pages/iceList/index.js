import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Table } from '@wocloud/design';
import { Link } from 'react-router-dom';
import { request } from '@wocloud/utils';
import PageTitle from '@/components/PageTitle';

import styles from './index.module.scss';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

request.get('./fake/123').catch(err=>{
  console.log(err);
  console.log('全局变量配置',ASSETS_VERSION);
});

export default function List() {

  return (
    <IceContainer>
      <PageTitle title="商家列表" />
      <Link className={styles.link} to="/list">
                跳转
              </Link>
      <Table columns={columns} dataSource={data}/>
    </IceContainer>
  );
}
