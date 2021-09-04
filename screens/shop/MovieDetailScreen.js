import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colours';

const MovieDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add Review"
          onPress={() => {
            props.navigation.navigate('NewReviewScreen', {
              productId: '',
              productTitle: '',
            });
          }}
        />
      </View>
      <Text style={styles.rating}>{selectProduct.rating}</Text>
      <Text style={styles.content}>{selectProduct.content}</Text>
    </ScrollView>
  );
};

MovieDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
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
});

export default MovieDetailScreen;
