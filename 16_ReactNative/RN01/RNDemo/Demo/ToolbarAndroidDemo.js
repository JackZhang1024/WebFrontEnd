import React, { Component } from 'react';
import ToolbarAndroid from 'react-native';  

export default class ToolbarAndroidDemo extends Component {

  render() {
    return (
      // <ToolbarAndroid
      //   style={{ height: 56, backgroundColor: 'green' }}
      //   logo={require('../source/chuangzuo.png')}
      //   navIcon={require('../source/chuangzuo.png')}
      //   overflowIcon={require('../source/chuangzuo.png')}
      //   subtitle='React Native'
      //   subtitleColor='blue'
      //   title='ToolbarAndroid'
      //   titleColor='red'
      //   actions={[
      //     {
      //       title: 'setting1',
      //       icon: require('../source/chuangzuo.png'),
      //       show: 'always',
      //       showWithText: true
      //     },
      //     {
      //       title: 'setting2',
      //       icon: require('../source/chuangzuo.png'),
      //       show: 'ifRoom',
      //       showWithText: true
      //     },
      //     {
      //       title: 'setting3',
      //       icon: require('../source/chuangzuo.png'),
      //       show: 'never',
      //       showWithText: true
      //     },
      //   ]
      //   }
      //   onActionSelected={(position)=>{
      //      console.log(position)
      //   }}
      //   onIconClicked={()=>{
      //     console.log('icon')
      //   }}
      // />

      <ToolbarAndroid
        logo={require('../source/chuangzuo.png')}
        title="首页"
        style={{ height: 56, backgroundColor: '#ffffff' }}>
      </ToolbarAndroid>
      // <Text>12</Text>
    );
  }
}
