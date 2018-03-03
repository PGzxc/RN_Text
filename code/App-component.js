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
    render() {
        return (
            <View>
                <MyAppText>
                    Text styled with the default font for the entire application
                </MyAppText>
                <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
            </View>
        );
    }
}

class MyAppHeaderText extends Component {
    render() {
        return <MyAppText>
            <Text style={{fontSize: 20,color:'#ff0000'}}>{this.props.children}</Text>
        </MyAppText>;
    }
}

class MyAppText extends Component {
    render() {
        return  <Text style={{fontSize: 30,color:'#ff00ff'}}>{this.props.children}</Text>
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

