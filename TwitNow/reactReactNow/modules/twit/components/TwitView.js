'use strict';

 import React, { Component } from 'react';
 import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

 import * as GLOBAL from 'TwitNow/reactReactNow/constants/Constants';

 class TwitView extends Component {

   render() {

     if(this.props.user.twitList &&
       this.props.user.twitList.length > 0) {

         var twitList = this.props.user.twitList;
         var twit = "@" +twitList[0].userName+": "+  twitList[0].twit;

         for (var index = 1; index < twitList.length; index++) {
           twit = twit +"\n \n @" +twitList[index].userName+": "+  twitList[index].twit;
         }
       }

     return (
       <View style = {styles.container}>
        <Text style = {styles.userName}>{this.props.user.userName}</Text>
        <Text style = {styles.twitList}>{twit}</Text>
       </View>
     );
   }
 }

 var styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingLeft : 10,
     paddingRight : 10
   },
   userName: {
     fontWeight: 'bold',
     fontSize: 24,
     color: GLOBAL.COLOR.BLACK,
     paddingTop : 10,
   },
   twitList: {
     fontSize: 18,
     paddingTop : 10,
     paddingBottom : 5,
     color: GLOBAL.COLOR.DARKGRAY,
   },

 });

 module.exports = TwitView;
