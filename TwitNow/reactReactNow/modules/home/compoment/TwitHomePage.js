'use strict';

import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet
} from 'react-native';

import * as GLOBAL from 'TwitNow/reactReactNow/constants/Constants';
import TwitView from 'TwitNow/reactReactNow/modules/twit/components/TwitView';
import TweeterParser from 'TwitNow/reactReactNow/modules/home/utility/TweeterParser';

export default class TwitHomePage extends Component {

  static navigatorID() {
    return TwitHomePage.name;
  }

  static navigationTitle() {
    return GLOBAL.STRINGS.TWEET_TITLE;
  }

  constructor(props : Props) {

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(TweeterParser.TweeterInfo()),
    };
  }

  render() {

    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        style={styles.listView}
        renderRow={this.renderRow.bind(this)}
        showsVerticalScrollIndicator={false}
        renderSeparator={this.renderSeparator}
      />
      </View>
    );
  }

  renderRow(rowData : any) {

      return <TwitView user ={rowData}/>;
  }

  renderSeparator(sectionID: number, rowID: number) {

    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}/>
      );
  }
}

var styles = StyleSheet.create({

  container: {
    flex : 1
  },
  listView: {
    flex: 1,
    paddingTop : 64,
  },
  separator: {
    height:2,
    backgroundColor:GLOBAL.COLOR.LIGHTBLUE,
  }
});
