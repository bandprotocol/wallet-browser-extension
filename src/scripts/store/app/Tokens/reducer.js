import { fromJS, setIn } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  balance: {
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb: 0,
  },
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_BALANCE:
      return state.setIn(['balance', payload.address], payload.balance)

    default:
      return state
  }
}
