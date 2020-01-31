import {createStackNavigator} from 'react-navigation';
import {Button, Text} from 'react-native';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            // 动态配置
            title: `${navigation.state.params.name}页面名`,
        }),
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            // 在这里定义每个页面的导航数据，静态配置
            title: 'this is page2',
        },
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            // 在这里定义每个页面的导航属性，动态配置
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3'
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            // 在这里定义每个页面的导航数据，静态配置
            title: 'this is page4',
        },
    },
    Page5: {
        screen: Page5,
    },
});
