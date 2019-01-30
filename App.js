import React, {Component} from 'react';
import Navigator from "./Navigator";
import {StatusBar, View} from "react-native";
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex:1}}>
          <StatusBar
              backgroundColor="#ea5252"
              barStyle="light-content"
          />
          <Navigator/>
        </View>
    );
  }
}