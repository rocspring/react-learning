/**
 * 生命周期执行过程
 *
 * 初始化：constructor -> static getDerivedStateFromProps -> render -> componentDidMount
 * 更新：static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 * 销毁：componentWillUnmount
 */
import React, { Component } from 'react';
import { Button } from 'antd';

import Child1 from './Child1';

const parentStyle = {
  padding: 40,
  margin: 20,
  border: '1px solid pink'
};

const TAG = 'Parent 组件：';

export default class Parent extends Component<any, any> {
  /**
   * 组件创建时调用
   * 可以在这里做一些初始化操作
   */
  constructor(props) {
    super(props);
    console.log(TAG, 'constructor');
    this.state = {
      num: 0,
      mountChild: true
    };
  }

  /**
   * 组件初次渲染或者更新之前触发
   *
   * 返回值会作为新的 state 值与组件中之前的 state 进行合并
   */
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

  /**
   * 组件初次挂载完成时触发
   * 可以在这里处理一些异步操作，比如：事件监听，网络请求等
   */
  componentDidMount() {
    console.log(TAG, 'componentDidMount');
  }

  /**
   * 组件触发更新时调用，决定组件是否需要更新
   * 返回 true，则组件会被更新，返回 false，则组件停止更新
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(TAG, 'shouldComponentUpdate');
    return true;
  }

  /**
   * 组将 render 之后，提交更新之前触发，返回值会作为 componentDidUpdate 的第三个参数传入
   */
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(TAG, 'getSnapshotBeforeUpdate');
  //   return null;
  // }

  /**
   * 组件更新结束后触发
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(TAG, 'componentDidUpdate');
  }

  /**
   * 组将即将被卸载时触发
   * 一般在这里进行自定义事件或者第三方库的销毁逻辑，防止内存泄漏
   */
  componentWillUnmount() {
    console.log(TAG, 'componentWillUnmount');
  }

  /**
   * 渲染函数 render
   */
  render() {
    console.log(TAG, 'render');
    const { num, mountChild } = this.state;
    return (
      <div style={parentStyle}>
        <div>
          <p>父组件</p>
          <Button onClick={this.changeNum}>改变传给子组件的属性 num</Button>
          <br />
          <br />
          <Button onClick={this.toggleMountChild}>卸载 / 挂载子组件</Button>
        </div>
        {mountChild ? <Child1 num={num} /> : null}
      </div>
    );
  }

  /**
   * 修改传给子组件属性 num 的方法
   */
  changeNum = () => {
    let { num } = this.state;
    this.setState({
      num: ++num
    });
  };

  /**
   * 切换子组件挂载和卸载的方法
   */
  toggleMountChild = () => {
    let { mountChild } = this.state;
    this.setState({
      mountChild: !mountChild
    });
  };
}
