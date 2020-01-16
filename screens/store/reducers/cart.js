import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../../models/cart-items'

const initialState = {
  items: {}
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      const addedMovie = payload
      const movieRating = addedMovie.rating
      const movieTitle = addedMovie.title
      const movieContent = addedMovie.content

      if (state.items[addedMovie.id]) {
        const updatedCartItem = new CartItem(
          state.item[addedMovie.id],
          movieTitle,
          moviier,
          movieContent
        )
        return {
          ...state,
          items: {...state.items, [addedMovie.id]: updatedCartItem}
        }
      } else {
        const newCartItem = new CartItem(movieRating, movieTitle, movieContent)
        return {
          ...state,
          items: { ...state.items, [addedMovie.id]: newCartItem }
        }
      }
  }
  return state
}