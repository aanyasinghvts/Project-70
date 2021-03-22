import React from "react"; 
import { StyleSheet, Text, View } from "react-native"; 
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs"; 

import WriteStoryScreen from "./screens/WriteStoryScreen"; 
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends React.Component () {
  render() {
    return (
    <AppContainer />
    )
  }
}

var AppNavigator = createBottomTabNavigator({
  ReadStory: { screens: ReadStoryScreen },
  WriteStory: { screens: WriteStoryScreen }
})

const AppContainer = createAppContainer(TabNavigator)