import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage = ({ name = 'UserName', email = 'user@email.com', phoneNumber = '0123456789'}) => {
  return (
      <View style={styles.product}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{email}</Text>
        <Text style={styles.name}>{phoneNumber}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 500,
    margin: 20,
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    marginVertical: 2,
    textAlign: 'center'
  },
  name: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'open-sans',
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
});


export default ProfilePage;
