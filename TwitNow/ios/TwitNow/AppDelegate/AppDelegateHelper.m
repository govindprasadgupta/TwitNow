//
//  AppDelegateHelper.m
//  TwitNow
//
//  Created by Govind Gupta on 25/03/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AppDelegateHelper.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegateHelper

+ (void)setRootViewControllerInWindow:(UIWindow *)window
                  andLaunchingOptions:(NSDictionary *)launchOptions{
  
 NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios"
                                                                  fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"TwitNow"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  window.rootViewController = rootViewController;
  
}
@end
