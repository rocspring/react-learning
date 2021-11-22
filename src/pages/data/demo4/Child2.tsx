// @ts-nocheck
import React from 'react';
import { observer, inject } from 'mobx-react';
import { Input } from 'antd';

const style = {
  width: 500,
  padding: 20,
  margin: 20,
  border: '1px solid black'
};

@inject((stores) => ({
  basicStore: stores.basicStore
}))
@observer
export default class Child2 extends React.Component {
  state = {
    localCount: 0
  };

  render() {
    const { basicStore } = this.props;
    const { localCount } = this.state;

    return (
      <div style={style}>
        <p>个数: {basicStore.count}</p>
        <section>
          <label>修改个数：</label>
          <Input placeholder="请输入新的数字" value={localCount} onChange={this.handleNumChange} />
        </section>
        <br />
        <button onClick={this.handleSubmit}>提交修改</button>
      </div>
    );
  }

  handleNumChange = (e) => {
    this.setState({ localCount: e.target.value });
  };

  handleSubmit = () => {
    const { localCount } = this.state;
    const { basicStore } = this.props;

    if (localCount) {
      basicStore.changeCount(localCount);
      alert(`修改成功!`);
    } else {
      alert('请填写数字！');
    }
  };
}
