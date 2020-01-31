import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{top: 48}}>
        <Button 
         title = "按钮"
         color = 'red'
         onPress = {()=>{
           console.log('Button被点击了...')
         }}
         disabled={false}
         ></Button>
      </View>
    );
  }
}



