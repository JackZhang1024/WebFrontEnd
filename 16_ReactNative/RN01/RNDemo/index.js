import { AppRegistry } from 'react-native';
// import App from './App';

//
import {AppStackNavigator} from './navigators/AppNavigators';
import SwitchNavigator from './navigators/SwitchNavigator';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppStackNavigator);

// 注意 registerComponent的第一个参数是项目的名称 不能乱写 否则会产生
// App not registered 问题
AppRegistry.registerComponent('RNDemo', () => AppContainer);
