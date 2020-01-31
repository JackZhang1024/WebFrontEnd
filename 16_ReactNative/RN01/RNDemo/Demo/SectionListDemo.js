import React, { Component } from 'react';
import { SectionList, View, Text } from 'react-native';

export default class SectionListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.sectionSource = [
      {
        data: [
          { title: '分区1数据1', key: 'r1' },
          { title: '分区1数据2', key: 'r2' },
        ],
        key: 's1'
      },
      {
        data: [
          { title: '分区2数据1', key: 'r3' },
          { title: '分区2数据2', key: 'r4' },
        ],
        key: 's2'
      },
      {
        data: [
          { title: '分区3数据1', key: 'r5' },
          { title: '分区3数据2', key: 'r6' },
        ],
        key: 's3'
      },
      {
        data: [
          { title: '分区4数据1', key: 'r7' },
          { title: '分区4数据2', key: 'r8' },
        ],
        key: 's4'
      }
    ]
  }

  render() {
    return (
      <SectionList
        renderItem={(data) => {
          return (<Text style={itemStyle}>{data.item.title}</Text>)
        }}
        sections={this.sectionSource}
        ItemSeparatorComponent={() => {
          return (<View style={separatorStyle}></View>)
        }}
        ListFooterComponent={() => {
          return (<Text style={footerOrHeadStyle}>Footer</Text>)
        }}
        ListHeaderComponent={() => {
          return (<Text style={footerOrHeadStyle}>Header</Text>)
        }}
        SectionSeparatorComponent={() => {
          return (<View style={separatorStyle}></View>)
        }}
        renderSectionHeader={(data) => {
          return (<Text style={itemStyle}>{data.section.key}</Text>)
        }}
        refreshing={true}
        onRefresh={()=>{
          console.log('refreshing...')
        }}
      >
      </SectionList>
    );
  }
}

let itemStyle = {
  lineHeight: 30,
  backgroundColor: 'red',
  textAlign: 'center',
  fontSize: 22
}

let separatorStyle = {
  left: 30,
  backgroundColor: 'gray',
  height: 1
}

let footerOrHeadStyle = {
  lineHeight: 50,
  backgroundColor: 'blue',
  textAlign: 'center',
  fontSize: 24
}




