import React, { Component } from 'react';
import { ProgressViewIOS } from 'react-native';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ProgressViewIOS
       style={{top:100}}
       progressTintColor='red'
       progressViewStyle={'default'}
       progress={0.5}
      />
    );
  }
}
