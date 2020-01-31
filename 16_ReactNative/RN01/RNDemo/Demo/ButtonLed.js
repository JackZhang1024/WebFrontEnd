import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class ButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: 'blue',
        flex: 1
      }
    };
  }

  render() {
    return (
      <View style={this.state.style}>
        <Button
          title="按钮"
          color="red"
          onPress={this.changeColor}
          disabled={false}
        />
      </View>
    );
  }

  changeColor = () => {
    this.setState({
      style: {
          backgroundColor:'rgb('+(Math.random()*255)+','
          +(Math.random()*255)+','+(Math.random()*255)+')',
          flex:1
      }
    })
  }
}




