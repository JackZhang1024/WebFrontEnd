import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class ScrollViewScrollDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex:1}}
        contentContainerStyle={{backgroundColor:'blue'}}
        // pagingEnabled={true}
        // stickyHeaderIndices={[0]}
        snapToAlignment={'center'}
        ref='scrollView'
      >
        <Text style={textStyle}
        onPress={()=>{
           this.refs.scrollView.scrollTo({x:0, y:100, animated:true})
        }}
        >Hello World 1 </Text>
        <Text style={textStyle}
        onPress={()=>{
          this.refs.scrollView.scrollToEnd({animated:true});
        }}
        >Hello World 2 </Text>
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
