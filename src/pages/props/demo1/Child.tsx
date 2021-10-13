// @ts-nocheck
import React, { Component } from 'react';

interface Props {
  name: string;
  a: string;
  b: string;
}

export default class Child extends Component<Props> {
  componentDidMount() {
    // this.props.name = 'modify child';
  }

  render() {
    // const { name } = this.props;
    return (
      <div>
        <p>demo1 child</p>
        <h2>{JSON.stringify(this.props)}</h2>
        {/* <h2>name属性: {name}</h2> */}
        {/* <h2>children属性: {this.props.children}</h2> */}
      </div>
    );
  }
}
