import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ImageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <Image source={require('../source/bamboo.jpg')} style={{width:100, height:100}}/>
      <Image source={{uri:'https://img.52z.com/upload/news/image/20190626/20190626072747_98920.jpg'}}
       style={{width:300, height:300}} 
      //  blurRadius={10} 
       />
    );
  }
}


