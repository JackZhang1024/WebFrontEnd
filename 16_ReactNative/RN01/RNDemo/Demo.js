import React, { Component } from 'react';
import {Text} from 'react-native';
// import TextDemo from './Demo/TextDemo';
// import ButtonDemo from './Demo/ButtonDemo';
// import ButtonLed from './Demo/ButtonLed';
// import ImageDemo from './Demo/ImageDemo';
// import SwitchDemo from './Demo/SwitchDemo';
// import ActivityIndicatorDemo from './Demo/ActivityIndicatorDemo';
// import StatusBarDemo from './Demo/StatusBarDemo';
// import WebViewDemo from './Demo/WebViewDemo';
// import TouchableWithoutFeedbackDemo from './Demo/TouchableWithoutFeedbackDemo';
// import TouchableOpacityDemo from './Demo/TouchableOpacityDemo';
// import TouchableNativeFeedbackDemo from './Demo/TouchableNativeFeedbackDemo';
// import TouchableHighlightDemo from './Demo/TouchableHighlightDemo';
// import ScrollViewDemo from './Demo/ScrollViewDemo';
// import ScrollViewScrollDemo from './Demo/ScrollViewScrollDemo';
// // import ListViewDemo from './Demo/ListViewDemo';
// import FlatListDemo from './Demo/FlatListDemo';
// import SectionListDemo from './Demo/SectionListDemo';
// import RefreshControlDemo from './Demo/RefreshControlDemo';
// import DrawLayoutAndroidDemo from './Demo/DrawLayoutAndroidDemo';
import ProgressBar from './Demo/ProgressBar';

type Props = {};
export default class Demo extends Component<Props> {

    render() {
        return (<Text style={{
           flex: 1,
           top: 48,
           left: 48,
           fontSize: 30
        }}>HelloWorld</Text>
        );

        // 自定义文本控件
        // return <TextDemo/>;

        // 自定义Button
        // return <ButtonDemo/>

        // 自定义ButtonLed
        // return <ButtonLed/>

        // 图片组件
        // return <ImageDemo/>

        // switch组件
        // return <SwitchDemo/>

        // return <ActivityIndicatorDemo/>

        // 状态栏
        // return <StatusBarDemo/>

        // 网页
        // return <WebViewDemo/>

        // return <TouchableWithoutFeedbackDemo/>

        // return <TouchableOpacityDemo/>

        // return <TouchableNativeFeedbackDemo/>

        // return <TouchableHighlightDemo/>

        // return <ScrollViewDemo/>

        // return <ScrollViewScrollDemo/>

        // return <ListViewDemo/>

        // return <FlatListDemo/>

        // return <SectionListDemo/>

        // return <RefreshControlDemo/>

        // return <DrawLayoutAndroidDemo/>
        // return <ProgressBar />

        // 工具条 RN在0.61版本之后已经取消掉ToolBar
        // 需要重新考虑引入问题
        // return <ToolbarAndroidDemo/>

        // 导航在0.44版本之后也不能用 坑爹啊
        // return <NavigatorDemo/>
    }

}
