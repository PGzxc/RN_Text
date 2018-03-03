/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={5}>
                    {this.state.bodyText}
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});