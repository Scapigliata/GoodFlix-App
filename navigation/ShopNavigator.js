import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import MovieOverViewScreen from '../screens/shop/MovieOverViewScreen';
import MovieDetailScreen from '../screens/shop/MovieDetailScreen';
import Colors from '../constants/Colours';

const MovieNavigator = createStackNavigator(
  {
    MovieOverview: MovieOverViewScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(MovieNavigator);
