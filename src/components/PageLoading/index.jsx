import React from 'react';
import { Spin } from '@wocloud/design';

export default () => (
  <div style={{ paddingTop: 200, textAlign: 'center' }}>
      <Spin tip="页面正在加载，请稍候……" />
  </div>
);
