import React, { Component } from 'react';
import { ProgressBarAndroid, View } from 'react-native';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ProgressBarAndroid 
       style={{top:100}}
       color='red'
       styleAttr= {'Horizontal'}
       progress={0.5}
       indeterminate={false}
      />
    );
  }
}
