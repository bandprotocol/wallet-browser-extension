import { fromJS, setIn } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  balance: {},
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_BALANCE:
      return setIn(state, ['balance', payload.address], payload.value)

    default:
      return state
  }
}
