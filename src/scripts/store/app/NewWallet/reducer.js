import { fromJS } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  lastPrint: null,
  lastAlert: null,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PRINT:
      return state.set('lastPrint', payload.message)

    case actionTypes.alert:
      return state.set('lastAlert', payload.message)

    default:
      return state
  }
}
