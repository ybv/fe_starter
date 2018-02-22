import * as types from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  posts: [],
  failed: false
}

export function posts(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
