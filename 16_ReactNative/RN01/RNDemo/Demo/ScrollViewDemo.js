import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class ScrollViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
        <Text style={textStyle}>Hello World </Text>
      </ScrollView>
    );
  }
}

let textStyle = {
  color: 'red',
  backgroundColor: 'black',
  fontSize: 40,
  marginTop: 10,
  textAlign: 'center'
}
