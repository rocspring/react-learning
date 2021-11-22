import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { BasicStore } from 'src/stores';

// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Props {
  basicStore?: BasicStore;
}

@inject('basicStore')
@observer
export default class HomePage extends Component<Props> {
  @observable private title: string = 'home page title';

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={`/props`}>props demo page</Link>
          </li>
          <li>
            <Link to={`/state`}>state demo page</Link>
          </li>
          <li>
            <Link to="/comp">组件和生命周期demo</Link>
          </li>
          <li>
            <Link to="/data">数据管理</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
