import { createScopedActionTypes } from '~/store/utils'
import { getBandProtocolClient } from '~/store/utils/bandprotocol'
import { BandBalance, TokenBalance } from '~/store/utils/token-balance'
import ext from '~/utils/ext'
import storage from '~/utils/storage'
import { fromJS } from 'immutable'

export const actionTypes = createScopedActionTypes('app.TaskQueue', [
  'SET_VOTES',
  'UPDATE_VOTE',
  'REMOVE_VOTE',
])

export const updateVote = (id, vote) => async (dispatch, getStore) => {
  const newVotes = dispatch({
    type: actionTypes.UPDATE_VOTE,
    payload: {
      id,
      vote,
    },
  })

  await storage.set({
    votes: getStore()
      .app.VoteCommit.get('votes')
      .toJS(),
  })
}

export const removeVote = id => async (dispatch, getStore) => {
  const newVotes = dispatch({
    type: actionTypes.UPDATE_VOTE,
    payload: {
      id,
      vote: undefined,
    },
  })

  await storage.set({
    votes: getStore()
      .app.VoteCommit.get('votes')
      .toJS(),
  })
}

export const reviveVotes = () => async (dispatch, getStore) => {
  const { votes } = await storage.get(['votes'])

  dispatch({
    type: actionTypes.SET_VOTES,
    payload: { votes: fromJS(votes || {}) },
  })
}
