import { createScopedActionTypes } from '~/store/utils'

export const actionTypes = createScopedActionTypes('app.Example', [
  'PRINT',
  'ALERT',
])

export const print = (
  message = 'You can print you own message by passing it to action creator.'
) => ({
  type: actionTypes.PRINT,
  payload: { message },
})

export const alert = (
  message = 'You can print you own message by passing it to action creator.'
) => ({
  type: actionTypes.ALERT,
  payload: { message },
})
