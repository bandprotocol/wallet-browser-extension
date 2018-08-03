import { fromJS, setIn } from 'immutable'
import { actionTypes } from './action'

const initialState = fromJS({
  tasks: [],
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_TASKS:
      return state.set('tasks', payload.tasks)

    default:
      return state
  }
}
