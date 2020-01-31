import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

// TouchableOpacity 的属性都是和TouchableWithoutFeedback的通用
export default class TouchableOpacitykDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ top: 100, left: 100 }}>
        <TouchableOpacity
          activeOpacity= { 0.5}
          onLongPress={() => {
            console.log("long press")
          }}
          onPress={() => {
            console.log("press")
          }}
          onPressIn={() => {
            console.log("press in")
          }}
          onPressOut={() => {
            console.log("press out")
          }}
        >
          <View>
            <Image source={require('../source/bamboo.jpg')}
              style={{ width: 50, height: 50 }}
            />
            <Text>Button</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

