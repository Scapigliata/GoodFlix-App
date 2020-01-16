import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MovieOverViewScreen from '../screens/shop/MovieOverViewScreen';
import MovieDetailScreen from '../screens/shop/MovieDetailScreen';
import Colors from '../constants/Colours';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const defaultNavigationConfig = {
  defaultNavigationOptions: {
    headerTitle: 'GoodWatch',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  },
};

const MovieNavigator = createStackNavigator(
  {
    MovieOverview: MovieOverViewScreen,
    MovieDetail: MovieDetailScreen
  },
  defaultNavigationConfig
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  //     },
  //     headerTitleStyle: {
  //       fontFamily: 'open-sans-bold'
  //     },
  //     headerBackTitleStyle: {
  //       fontFamily: 'open-sans'
  //     },
  //     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  //   }
  // }
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Movies: {
      screen: MovieNavigator,
      navigationOptions: {
        title: 'Movies',
        tabBarIcon: ({ tintColor }) => <MaterialIcon name='restaurant-menu' size={22} color={tintColor} />,
      },
    },
    Home: {
      screen: MovieNavigator,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcon name='map-marker' size={22} color={tintColor} />,
      },
    },
    Profile: {
      screen: MovieNavigator,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => <MaterialIcon name='person' size={26} color={tintColor} />,
      },
    },
  },
  {
    activeColor: Colors.primary,
    barStyle: { backgroundColor: '#fff' },
  },
);

export default createAppContainer(AppNavigator);
