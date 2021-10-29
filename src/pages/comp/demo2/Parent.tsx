import React, { Component } from 'react';

import Child1 from './Child1';

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
      </>
    );
  }
}
