import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { BasicStore } from 'src/stores';

interface Props {
  basicStore?: BasicStore;
}

@inject('basicStore')
@observer
export default class HomePage extends Component<Props> {
  @observable private title: string = 'home page title';

  render() {
    const { count } = this.props.basicStore;

    return (
      <div>
        <h2>{this.title}</h2>
        <h2>{count}</h2>
        <p>Home Page</p>
      </div>
    );
  }
}
