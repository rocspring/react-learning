// @ts-nocheck
import React from 'react';
import { observer, inject } from 'mobx-react';

const style = {
  width: 500,
  padding: 40,
  margin: 20,
  border: '1px solid pink'
};

@inject((stores) => ({
  basicStore: stores.basicStore
}))
@observer
export default class Child2 extends React.Component {
  render() {
    const { basicStore } = this.props;

    return (
      <div style={style}>
        <p>computed value: {basicStore.computedValue}</p>
      </div>
    );
  }
}
