// @ts-nocheck
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { ThemeContext, CounterContext } from './Context';
import ContextType from './ContextType';
import ConsumerContext from './ConsumerContext';

const { TabPane } = Tabs;

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <CounterContext.Provider value={{ count, setCount }}>
        <h2 style={{ color }}>App 页面 </h2>
        <p>count: {count}</p>
        <Tabs defaultActiveKey="1">
          <TabPane tab="子组件1" key="1">
            <ContextType />
          </TabPane>
          <TabPane tab="子组件2" key="2">
            <ConsumerContext />
          </TabPane>
        </Tabs>
      </CounterContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
