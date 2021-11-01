import React from 'react';

const childStyle = {
  padding: 20,
  margin: 20,
  border: '1px solid black'
};

const TAG = 'Child 组件：';

export default class Child extends React.Component<any, any> {
  constructor(props) {
    super(props);
    console.log(TAG, 'constructor');
    this.state = {
      counter: 0
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(TAG, 'getDerivedStateFromProps');
  //   return null;
  // }

  UNSAFE_componentWillMount() {
    console.log(TAG, 'UNSAFE_componentWillMount');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log(TAG, 'UNSAFE_componentWillReceiveProps');
  }

  UNSAFE_componentWillUpdate() {
    console.log(TAG, 'UNSAFE_componentWillUpdate');
  }

  componentDidMount() {
    console.log(TAG, 'componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(TAG, 'shouldComponentUpdate');
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(TAG, 'getSnapshotBeforeUpdate');
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(TAG, 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(TAG, 'componentWillUnmount');
  }

  render() {
    console.log(TAG, 'render');
    const { num } = this.props;
    const { counter } = this.state;
    return (
      <div style={childStyle}>
        <p>子组件</p>
        <p>父组件传过来的属性 num ： {num}</p>
        <p>自身状态 counter ： {counter}</p>
        <button onClick={this.changeCounter}>改变自身状态 counter</button>
      </div>
    );
  }

  changeCounter = () => {
    let { counter } = this.state;
    this.setState({
      counter: ++counter
    });
  };
}
