import { createScopedActionTypes } from '~/store/utils'
import { getBandProtocolClient } from '~/store/utils/bandprotocol'
import { BandBalance, TokenBalance } from '~/store/utils/token-balance'
import ext from '~/utils/ext'
import storage from '~/utils/storage'

export const actionTypes = createScopedActionTypes('app.TaskQueue', [
  'SET_VOTES',
  'UPDATE_VOTE',
  'REMOVE_VOTE',
])

export const updateVote = (id, vote) => async (dispatch, getStore) => {
  dispatch({
    type: actionTypes.UPDATE_VOTE,
    payload: {
      id,
      vote,
    },
  })

  await storage.set({ votes: newVote })
}

export const reviveVotes = () => async (dispatch, getStore) => {
  const { votes } = await storage.get(['votes'])

  dispatch({
    type: actionTypes.SET_VOTES,
    payload: { votes: votes || [] },
  })
}
