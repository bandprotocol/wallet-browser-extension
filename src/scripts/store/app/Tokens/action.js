import { createScopedActionTypes } from '~/store/utils'
import BandProtocolClient from 'bandprotocol'
import storage from '~/utils/storage'

export const actionTypes = createScopedActionTypes('app.Tokens', [
  'UPDATE_BALANCE',
])
