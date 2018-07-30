import { fromJS } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  vault: null,
  mnemonic: null,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.VAULT:
      return state.set('vault', payload.value)

    case actionTypes.MNEMONIC:
      return state.set('mnemonic', payload.value)

    default:
      return state
  }
}
