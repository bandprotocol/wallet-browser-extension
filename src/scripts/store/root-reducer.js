/**
 * Combine all reducers as a rootReducer. Use this for Redux!
 */

import { combineReducers } from 'redux'
import app from './app'

export default combineReducers({
  app,

  // ^^^ Add more reducers here
})
