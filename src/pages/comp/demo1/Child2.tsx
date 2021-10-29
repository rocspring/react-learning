import React, { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export default class Child extends Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>我是类组件</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
}
