
'use strict';

import React  from 'react';
import * as GLOBAL from 'TwitNow/reactReactNow/constants/Constants';

function TweeterInfo () {

	let twitterList = TwitListParser();
	var userList = UserListParser();
	for(var userIndex = 0; userIndex<userList.length; userIndex++) {

		let userInfo = userList[userIndex];
		for(var tweeterindex = 0; tweeterindex<twitterList.length; tweeterindex++) {

			let twitInfo = twitterList[tweeterindex];
			if(twitInfo.userName == userInfo.userName) {

					if(!userInfo.twitList) {

						var twitterObj = [];
						twitterObj[0] = twitInfo;
						userInfo["twitList"] = twitterObj;

					} else {
						userInfo.twitList[userInfo.twitList.length] = twitInfo;
					}
			} else {

				var follows = userInfo.follows;
				if(follows) {
						for(var followIndex = 0; followIndex<follows.length; followIndex++) {

								if(twitInfo.userName == follows[followIndex]) {
										if(!userInfo.twitList) {

											var twitterObj = [];
											twitterObj[0] = twitInfo;
											userInfo["twitList"] = twitterObj;

										} else {
											userInfo.twitList[userInfo.twitList.length] = twitInfo;
										}
									}
								}
				}
			}
		}
	}

	return userList;
}

//Tweet parsing
function TwitListParser() {

	let twitData = require('TwitNow/reactReactNow/inputFiles/tweet.json');
	let twitterInfoList = twitData.tweet;
	var twitterList = [];
	for (var index = 0; index<twitterInfoList.length; index++) {
		let twitInfo = twitterInfoList[index];
		let twitterInfo = twitInfo.split("> ");

		var tempTwit = {};
		tempTwit["userName"] = twitterInfo[0];
		tempTwit["twit"] = twitterInfo[1];
		twitterList[index] = tempTwit;
	}

	return twitterList;
}

//User parsing
function UserListParser() {

	let userData = require('TwitNow/reactReactNow/inputFiles/user.json');
	let useInfoList = userData.userList;
	var userList = [];
	for (var index = 0; index<useInfoList.length; index++) {

		let userInfo =  useInfoList[index];
		let tempUserList = userInfo.split(" follows ")
		let tempFollowUserList = tempUserList[1].split(", ")

			for(var followIndex = 0; followIndex<tempFollowUserList.length; followIndex++) {

				let followerName = tempFollowUserList[followIndex];
				var matched = false;
						for (var userIndex = 0; userIndex<userList.length; userIndex++) {

								var tempUserName = userList[userIndex];
								if(tempUserName.userName  == followerName) {

										matched = true;
										break;
									}
						}
						if(matched == false) {
								var tempUser = {};
								tempUser["userName"] = followerName;
								userList[userList.length] = tempUser;
				}
			}
			var matched = false;
			for (var userIndex = 0; userIndex<userList.length; userIndex++) {

				let tempUserName = userList[userIndex];
				if(tempUserName.userName  == tempUserList[0]) {

					matched = true;
					tempUserName["follows"] = tempFollowUserList;
					break;
				}
			}
			if(matched == false) {
				var tempUser = {};
				tempUser["userName"] = tempUserList[0];
				tempUser["follows"] = tempFollowUserList;
				userList[userList.length] = tempUser;
			}
		}
		return userList;

}

module.exports = {
	TweeterInfo: TweeterInfo
};
