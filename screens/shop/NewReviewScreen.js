import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Form,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colours';

const NewReviewScreen = (props) => {
  const error = false;

  return (
    <ScrollView>
      <Text style={styles.rating}>Title</Text>
      <TextInput
        autoCapitalize="none"
        style={[styles.input, { borderColor: error ? '#fc6d47' : '#c0cbd3' }]}
      />
      <Text style={styles.rating}>Review</Text>
      <TextInput
        autoCapitalize="none"
        style={[
          styles.inputContainer,
          { borderColor: error ? '#fc6d47' : '#c0cbd3' },
        ]}
      />
      <TouchableOpacity style={styles.icon}>
        <MaterialIcon name="attachment" size={35} color="#D3D3D3" />
      </TouchableOpacity>
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Publish" />
      </View>
    </ScrollView>
  );
};

NewReviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  icon: {
    marginLeft: 30,
  },
  rating: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold',
  },
  content: {
    fontSize: 14,
    marginHorizontal: 40,
    fontFamily: 'open-sans',
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  inputContainer: {
    padding: 60,
    backgroundColor: '#cecece',
    borderRadius: 5,
    margin: 20,
  },
  input: {
    padding: 20,
    backgroundColor: '#cecece',
    borderRadius: 5,
    margin: 20,
  },
});

export default NewReviewScreen;
