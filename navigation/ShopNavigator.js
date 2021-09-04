import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MovieOverViewScreen from '../screens/shop/MovieOverViewScreen';
import MovieDetailScreen from '../screens/shop/MovieDetailScreen';
import NewReviewScreen from '../screens/shop/NewReviewScreen';
import ProfilePage from '../screens/user/ProfilePage';
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
    MovieDetail: MovieDetailScreen,
    NewReviewScreen: NewReviewScreen,
  },
  defaultNavigationConfig
);

const ReviewNavigator = createStackNavigator(
  {
    NewReview: NewReviewScreen,
  },
  defaultNavigationConfig
);

const ProfileNavigator = createStackNavigator(
  {
    ProfilePage,
  },
  defaultNavigationConfig
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Movies: {
      screen: MovieNavigator,
      navigationOptions: {
        title: 'Movies',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcon name="movie" size={22} color={tintColor} />
        ),
      },
    },
    Home: {
      screen: MovieNavigator,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcon name="home" size={22} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcon name="person" size={26} color={tintColor} />
        ),
      },
    },
  },
  {
    activeColor: Colors.accent,
    barStyle: { backgroundColor: '#fff' },
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
