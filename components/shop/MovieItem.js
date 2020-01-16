import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colours';

const MovieItem = ({ onViewDetail, image, title, rating, onAddToCart }) => {
  const [favoriteColor, setFavoriteColor] = useState(false);
  const [likeColor, setlikeColor] = useState(false);

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const handleFavIconPress = () => setFavoriteColor(!favoriteColor);

  const handleLikeIconPress = () => setlikeColor(!likeColor);

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={handleLikeIconPress}>
                <MaterialIcon
                  name="thumb-up"
                  size={35}
                  color={likeColor ? Colors.accent : '#D3D3D3'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFavIconPress}>
                <MaterialIcon
                  name="favorite"
                  size={35}
                  color={favoriteColor ? Colors.favourite : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableCmp>
      </View>
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
    height: 300,
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
  },
  rating: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'open-sans',
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

export default MovieItem;
