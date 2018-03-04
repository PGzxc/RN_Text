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
            <Text style={{fontWeight: 'bold'}} onLayout={this.Layout}>
                I am bold
                <Text style={{color: 'red'}}>
                    and red
                </Text>
            </Text>
        );
    }


    Layout(event) {
        var msg = 'width:' + event.nativeEvent.layout.width + '\n';
        msg += 'height:' + event.nativeEvent.layout.height + '\n';
        msg += 'x:' + event.nativeEvent.layout.x + '\n';
        msg += 'y:' + event.nativeEvent.layout.y;
        alert(msg)
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