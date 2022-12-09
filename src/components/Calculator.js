import React from 'react';
import Buttons from './Buttons';
import Output from './Output';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <Output />
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
