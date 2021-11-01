import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const style = {
  width: 500,
  padding: 40,
  margin: 20,
  border: '1px solid pink'
};

export default function Child1(props: Props) {
  return (
    <div style={style}>
      <p>我是函数组件</p>
    </div>
  );
}
