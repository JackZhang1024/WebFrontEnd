import React, { Component } from 'react';
// 在react-native 中，WebView已经被废弃了 
// 需要从react-native-webview中导入 
// 执行npm install react-native-webview -D
import { WebView } from 'react-native-webview';
import { Text } from 'react-native';

export default class WebViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://wwww.baidu.com' }}
        bounces={false}
        dataDetectorTypes={['link']}
        decelerationRate={'normal'}
        domStorageEnabled={true}
        injectedJavaScript="var a = 100;"
        scalesPageToFit={true}
        startInLoadingState={true}
        renderLoading={()=>{
            return <Text>Loading</Text> 
        }}
        renderError={()=>{
            return <Text>Load Error</Text> 
          }
        }
      />
    );
  }
}
