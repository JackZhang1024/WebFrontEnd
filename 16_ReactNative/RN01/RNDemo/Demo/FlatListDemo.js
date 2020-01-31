import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.dataSouce = [
      { key: 1, value: '数据' },
      { key: 2, value: '数据' },
      { key: 3, value: '数据' },
      { key: 4, value: '数据' },
      { key: 5, value: '数据' },
      { key: 5, value: '数据' },
      { key: 6, value: '数据' },
      { key: 7, value: '数据' },
      { key: 8, value: '数据' },
      { key: 9, value: '数据' },
      { key: 10, value: '数据' },
      { key: 11, value: '数据' },
      { key: 12, value: '数据' },
      { key: 13, value: '数据' },
      { key: 14, value: '数据' },
      { key: 15, value: '数据' },
      { key: 16, value: '数据' },
      { key: 17, value: '数据' },
    ]
  }

  render() {
    return (
      <FlatList data={this.dataSouce}
        renderItem={(item) => {
          return <Text style={{
            marginLeft: 20,
            backgroundColor: 'red',
            marginTop: 0,
            textAlign: 'center',
            lineHeight: 120,
            fontSize: 22
          }}>item</Text>
        }}
        ItemSeparatorComponent={() => {
          return (<View style={{
            height: 1,
            backgroundColor: 'black'
          }}></View>)
        }}
        ListFooterComponent={() => {
          return (<Text style={{
            backgroundColor: 'blue',
            textAlign: 'center',
            lineHeight: 100,
            fontSize: 18
          }}>Footer</Text>)
        }}
        ListHeaderComponent={() => {
          return (<Text
            style={{
              backgroundColor: 'blue',
              textAlign: 'center',
              lineHeight: 100,
              fontSize: 18
            }}
          >Header</Text>)}
        }
        columnWrapperStyle={{ backgroundColor: 'green' }}
        numColumns={3}
        getItemLayout={(dataArray, index) => {
          return { length: 60, offset: 52 * index, index: index }
        }}
      >

      </FlatList>
    );
  }
}
