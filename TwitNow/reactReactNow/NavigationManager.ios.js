
'use strict';

import React, { Component } from 'react';
import { Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TwitHomePage from 'TwitNow/reactReactNow/modules/home/compoment/TwitHomePage';
import * as GLOBAL from 'TwitNow/reactReactNow/constants/Constants';

export default class NavigationManager extends Component {

  render() {
    var initialRoute = {
      component: TwitHomePage,
      id: TwitHomePage.navigatorID(),
      title : TwitHomePage.navigationTitle(),
      index : 0,
    };

    return (
      <View style = {styles.container}>
      <Navigator
      initialRoute={initialRoute}
      configureScene={() => {
        return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene = {this._renderScene}
      navigationBar = {
        <Navigator.NavigationBar
        routeMapper = {
          {
            LeftButton: this._getLeftButton,
            RightButton: this._getRightButton,
            Title: this._getTitle,
          }
        }
        style = {styles.navcontainer}
        />
      }
      />
    </View>
  );
}

_renderScene(route, navigator) {
  let RouteComponent = route.component;
  return <RouteComponent navigator={navigator} {...route.passProps} />;
}

_getRightButton(route, navigator, index, navState){
  return (<View/>);
}

_getLeftButton(route, navigator, index, navState){
  return (<View/>);
}

_getTitle(route, navigator, index, navState) {

  return (
    <Text style = {styles.navTitle}> {route.title} </Text>
  );
}

}

var styles = StyleSheet.create({
  container: {
    flex: 1.0
  },
  navcontainer: {
    flex: 0.5,
    backgroundColor : GLOBAL.COLOR.LIGHTBLUE,
  },
  navTitle : {
    color: GLOBAL.COLOR.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop : 10
  },
});
