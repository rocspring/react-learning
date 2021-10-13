import React, { Component } from 'react';
import Child from './Child';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export default class Parent extends Component<Props> {
  render() {
    return (
      <div>
        <p>demo1 parent</p>
        <Child name="child" a="aaa" b="bbb">
          child children
        </Child>
      </div>
    );
  }
}
