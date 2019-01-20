import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import { AbsencesScreen, CheckInScreen, DelaysScreen } from '../screens';

const CheckInStack = createStackNavigator({
  ChekIn: CheckInScreen,
});

CheckInStack.navigationOptions = {
  tabBarLabel: 'Pointer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pin`
          : 'ios-pin'
      }
    />
  ),
};

const AbsencesStack = createStackNavigator({
  Absences: AbsencesScreen,
});

AbsencesStack.navigationOptions = {
  tabBarLabel: 'Absences',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-thumbs-down' : 'ios-thumbs-down'}
    />
  ),
};

const DelaysStack = createStackNavigator({
  Delays: DelaysScreen,
});

DelaysStack.navigationOptions = {
  tabBarLabel: 'Retards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-timer' : 'ios-timer'}
    />
  ),
};

export default createBottomTabNavigator({
  CheckInStack,
  AbsencesStack,
  DelaysStack,
});
