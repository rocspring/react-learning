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
    username: ''
  };

  handleNameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = () => {
    const { username } = this.state;
    if (username) {
      alert(`提交成功，username = ${username}`);
    } else {
      alert('请填写用户名！');
    }
  };

  render() {
    const { username } = this.state;
    return (
      <div style={style}>
        <p>username: {username}</p>
        <section>
          <label>用户名：</label>
          <Input placeholder="请输入用户名" value={username} onChange={this.handleNameChange} />
        </section>
        <br />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
