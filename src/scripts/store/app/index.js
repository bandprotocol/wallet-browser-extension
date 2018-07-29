/**
 * Combined reducer for app state namespace
 */

import { combineReducers } from 'redux'
import NewWallet from './NewWallet/reducer'

export default combineReducers({
  NewWallet,

  // ^^^ Add more reducers here
})
