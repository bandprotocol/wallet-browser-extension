import { fromJS } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  votes: {},
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_VOTE:
      const votes = state.get('votes')
      return state.set('votes', votes.set(payload.id, payload.vote))

    case actionTypes.REMOVE_VOTE:
      return state.removeIn(['votes', payload.id])

    case actionTypes.SET_VOTES:
      return state.set('votes', payload.votes)
    default:
      return state
  }
}
