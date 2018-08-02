import React, { Component } from 'react';
import { NumberInput } from './NumberInput';

const getSum = (...params) => {
  let result = 0;
  params.forEach(param => {
    const number = parseInt(param, 10);
    if (!isNaN(number)) {
      result += number;
    }
  });
  return result;
}

class GridContainer extends Component {
  constructor() {
    super();
    this.state = {
      names: ["numberOne", "numberTwo", "numberThree"],
      numberOne: 0,
      numberTwo: 0,
      numberThree: 0,
    };
  }

  handleNumberChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { numberOne, numberTwo, numberThree } = this.state;
    return (
      <div className="grid-border flex flex-wrap justify-content">
        {this.state.names.map(name => (
          <NumberInput
            key={name}
            name={name}
            onChange={this.handleNumberChange}
          />
        ))}
        <div className="grid-border flex-item">
          {getSum(numberOne, numberTwo, numberThree)}
        </div>
      </div>
    );
  }
}

export default GridContainer;
