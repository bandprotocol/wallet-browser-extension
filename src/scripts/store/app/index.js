/**
 * Combined reducer for app state namespace
 */

import { combineReducers } from 'redux'
import Vault from './Vault/reducer'
import Tokens from './Tokens/reducer'
import TaskQueue from './TaskQueue/reducer'
import VoteCommit from './VoteCommit/reducer'

export default combineReducers({
  Vault,
  Tokens,
  TaskQueue,
  VoteCommit,

  // ^^^ Add more reducers here
})
