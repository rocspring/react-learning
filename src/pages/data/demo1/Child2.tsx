// @ts-nocheck
import React from 'react';
import { Input } from 'antd';

const style = {
  width: 500,
  padding: 20,
  margin: 20,
  border: '1px solid black'
};

export default class Child2 extends React.Component {
  state = {
    localCount: ''
  };

  handleNumChange = (e) => {
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
        <p>Child2 -- localCount: {localCount}</p>
        <p>parentCount: {this.props.count}</p>
        <section>
          <label>Child2 -- localCount：</label>
          <Input placeholder="请输入数字" value={localCount} onChange={this.handleNumChange} />
        </section>
        <br />
        <button onClick={this.handleSubmit}>修改父组件count</button>
      </div>
    );
  }
}
