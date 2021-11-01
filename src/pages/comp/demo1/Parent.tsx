import React, { Component } from 'react';

import { Tabs } from 'antd';
import Child1 from './Child1';
import Child2 from './Child2';

const { TabPane } = Tabs;

interface State {
  make: string;
  model: string;
  color: string;
}

export default class CompDemo extends Component<any, State> {
  render() {
    return (
      <>
        <Tabs defaultActiveKey="1">
          <TabPane tab="函数组件" key="1">
            <Child1 />
          </TabPane>
          <TabPane tab="类组件" key="2">
            <Child2 />
          </TabPane>
        </Tabs>
      </>
    );
  }
}
