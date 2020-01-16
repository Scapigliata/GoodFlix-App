import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './screens/store/reducers/product'
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (<AppLoading startAsync={fetchFonts} onFinish={() => {
      setFontLoaded(true)
    }}
    />
    )
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
