import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import MovieItem from '../../components/shop/MovieItem'

const MovieOverViewScreen = props => {
  const products = useSelector(state => state.products.availableProducts)
  console.log(products)
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData =>
        <MovieItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          rating={itemData.item.rating}
          onViewDetail={() => {
            console.log('hej')
            props.navigation.navigate('MovieDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            })
          }}
          onAddToCart={() => { }} />}
    />
  )
}

export default MovieOverViewScreen
