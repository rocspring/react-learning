// @ts-nocheck
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

// count、todos 会被挂载到组件的 props 中
const mapStateToProps = ({ count, todos }) => ({ count, todos });

// mapDispatchToProps 为函数时，actionCreators 中的 actionCreator 需要自己处理，返回的对象会被合并到组件的 props 中去
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators(actionCreators, dispatch)
});

// eslint-disable-next-line @typescript-eslint/no-use-before-define
const ConnectTodoList = connect(mapStateToProps)(TodoList);

class ConnectUse extends React.Component {
  state = {
    value: ''
  };

  componentDidMount() {
    this.props.getAsyncTodos();
  }

  render() {
    const { count, increment, decrement } = this.props;
    const { value } = this.state;

    return (
      <div>
        <p>count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <br />
        <br />
        <input placeholder="请输入待办事项" value={value} onChange={(e) => this.setValue(e.target.value)} />
        <button onClick={this.add}>add</button>
        <ConnectTodoList />
      </div>
    );
  }

  setValue = (value) => {
    this.setState({ value });
  };

  add = () => {
    const { value } = this.state;
    const { addTodo } = this.props;

    if (value) {
      // 分发 action
      addTodo(value);
      this.setValue('');
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectUse);
