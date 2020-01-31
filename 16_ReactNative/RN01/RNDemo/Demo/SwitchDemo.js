import React, { Component } from 'react';
import { View, Switch } from 'react-native';

export default class SwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }

  render() {
    return (
      <Switch style={switchStyle}
        value={this.state.value}
        disabled={false}
        onValueChange={
          (value) => {
            this.setState({ value: value })
          }
        }
        thumbColor='green'
        trackColor ='green' 
      />
    );
  }

}

let switchStyle = {
  top: 100,
  left: 100,
  width: 50,
  height: 50
}