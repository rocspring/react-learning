// @ts-nocheck
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

export default class DataPropDemo extends Component<any, State> {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <Tabs defaultActiveKey="1">
          <TabPane tab="子组件1" key="1">
            <Child1 count={count} changeCount={this.changeCount} />
          </TabPane>
          <TabPane tab="子组件2" key="2">
            <Child2 count={count} changeCount={this.changeCount} />
          </TabPane>
        </Tabs>
      </>
    );
  }

  changeCount = (newCount) => {
    this.setState({ count: newCount });
  };
}
