import React, { Component } from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';

// scrollView刷新
export default class RefreshControlDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}
        contentContainerStyle={{ backgroundColor: 'blue' }}
        pagingEnabled={false}
        stickyHeaderIndices={[0]}
        snapToAlignment={'center'}
        ref="scrollView"
        refreshControl={this.getRefreshControl()}
      >
        <Text style={textStyle}
          onPress={() => {
            this.refs.scrollView.scrollTo({
              x: 0,
              y: 100, animated: ture
            })
          }}
        >Hello World </Text>
        <Text style={textStyle}
          onPress={() => {
            this.refs.scrollView.scrollToEnd({ animated: ture })
          }}
        >Hello World </Text>
        <Text style={textStyle}
          onPress={() => {
            this.setState({
              refresh: false
            })
          }}
        >Hello World 3333</Text>
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

  getRefreshControl() {
    return (<RefreshControl
      onRefresh={() => {
        this.setState({
          refresh: true
        })
        console.log('开始刷新')
      }}
      refreshing={this.state.refresh}
      colors={['red', 'green']}
      enabled={true}
      progressBackgroundColor='blue'
      size={RefreshControl.SIZE.LARGE}
      progressViewOffset={100}
      tintColor='red'
      title="refreshing"
    />)
  }
}

let textStyle = {
  color: 'red',
  backgroundColor: 'black',
  fontSize: 40,
  textAlign: 'center'
}
