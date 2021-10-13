import React, { Component } from 'react';

interface State {
  make: string;
  model: string;
  color: string;
}

export default class StateDemo extends Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      make: 'Yamaha',
      model: 'R15',
      color: 'green'
    };
  }

  colorList = ['blue', 'red', 'green', 'yellow', 'black'];

  changeBikeColor = () => {
    const randomIndex = Math.floor(Math.random() * this.colorList.length);

    this.setState({ color: this.colorList[randomIndex] });
  };

  render() {
    return (
      <div>
        <h2>My {this.state.make}</h2>

        <p style={{ background: this.state.color }}>
          It is a {this.state.color} {this.state.model}.
        </p>

        <button type="button" onClick={this.changeBikeColor}>
          Change color
        </button>
      </div>
    );
  }
}
