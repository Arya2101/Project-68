import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb from './screens.js/Fb';
import Insta from './screens.js/Insta';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:Fb},
  Instagram: {screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator);