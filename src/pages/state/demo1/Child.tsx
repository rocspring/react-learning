import React, { Component } from 'react';

interface Props {
  name: string;
  a: string;
  b: string;
}

export default class Child extends Component<Props> {
  render() {
    return (
      <div>
        <p>demo1 child</p>
        <h2>{JSON.stringify(this.props)}</h2>
      </div>
    );
  }
}
