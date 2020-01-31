/**
 * desc：
 * author：
 * date：  2020/1/30 3:21 下午
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, View, Text} from 'react-native';

export default class RightButton extends Component {

    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
        this.setPress =()=> {
            if (!!this.props.method) {
                this.props.method();
            }
        }
    }

    render() {
        return (
            <View>
              <Text onPress={this.setPress}>{this.props.title}</Text>
            </View>
        );
    }
}
