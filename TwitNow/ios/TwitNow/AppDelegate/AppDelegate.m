//
//  AppDelegate.m
//  TwitNow
//
//  Created by Govind Gupta on 25/03/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AppDelegate.h"
#import "AppDelegateHelper.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  [AppDelegateHelper setRootViewControllerInWindow:self.window
                               andLaunchingOptions:launchOptions];
  [self.window makeKeyAndVisible];
  return YES;
}

@end
