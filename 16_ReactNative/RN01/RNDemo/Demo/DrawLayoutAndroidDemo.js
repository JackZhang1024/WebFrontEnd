import React, { Component } from 'react';
import { DrawerLayoutAndroid, View, Text } from 'react-native';

export default class DrawLayoutAndroidDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={150}
        drawerPosition={'left'}
        renderNavigationView={() => {
          return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>抽屉视图</Text>
            </View>
          )
        }}
      >
        <View style={{ flex: 1, alignitems: 'center' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right',backgroundColor:'blue' }}>
            Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>
            World!</Text>
        </View >
      </DrawerLayoutAndroid >
    );
  }
}
