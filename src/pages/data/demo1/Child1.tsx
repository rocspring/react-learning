// @ts-nocheck
import React from 'react';
import { Input } from 'antd';

const style = {
  width: 500,
  padding: 40,
  margin: 20,
  border: '1px solid pink'
};

export default class Child1 extends React.Component {
  state = {
    localCount: ''
  };

  handleNameChange = (e) => {
    this.setState({ localCount: e.target.value });
  };

  handleSubmit = () => {
    const { changeCount } = this.props;
    const { localCount } = this.state;

    if (localCount) {
      changeCount(localCount);
      alert(`修改父数据成功!`);
    } else {
      alert('请填写数字！');
    }
  };

  render() {
    const { localCount } = this.state;
    return (
      <div style={style}>
        <p>Child1 -- localCount: {localCount}</p>
        <p>parentCount: {this.props.count}</p>
        <section>
          <label>Child1 -- localCount：</label>
          <Input placeholder="请输入数字" value={localCount} onChange={this.handleNameChange} />
        </section>
        <br />
        <button onClick={this.handleSubmit}>修改父组件count</button>
      </div>
    );
  }
}
