import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ICHI superCute</Text>
      <Button onPress={() => console.log('f')} title="GO" />
    </View>
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
