//
//  AppDelegateHelper.h
//  TwitNow
//
//  Created by Govind Gupta on 25/03/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface AppDelegateHelper : NSObject

+ (void)setRootViewControllerInWindow:(UIWindow *)window
                  andLaunchingOptions:(NSDictionary *)launchOptions;

@end
