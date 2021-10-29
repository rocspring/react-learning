import React, { Component } from 'react';

import Child1 from './Child1';
import Child2 from './Child2';

interface State {
  make: string;
  model: string;
  color: string;
}

export default class CompDemo extends Component<any, State> {
  render() {
    return (
      <>
        <Child1 />
        <Child2 />
      </>
    );
  }
}
