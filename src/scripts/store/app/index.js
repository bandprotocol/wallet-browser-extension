/**
 * Combined reducer for app state namespace
 */

import { combineReducers } from 'redux'
import Vault from './Vault/reducer'

export default combineReducers({
  Vault,

  // ^^^ Add more reducers here
})
