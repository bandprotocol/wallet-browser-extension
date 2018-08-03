import { createScopedActionTypes } from '~/store/utils'
import { getBandProtocolClient } from '~/store/utils/bandprotocol'
import { BandBalance, TokenBalance } from '~/store/utils/token-balance'
import KnownTokens from '~/config/tokens'
import storage from '~/utils/storage'

export const actionTypes = createScopedActionTypes('app.Tokens', [
  'UPDATE_BALANCE',
])

export const queryBalance = (
  contractAddress = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
) => async (dispatch, getState) => {
  const secretKey = getState().app.Vault.get('vault').wallets[0].secretKey
  const client = getBandProtocolClient(secretKey)

  const token = await client.blockchain.contract('Token').call(contractAddress)
  const raw_balance = await token
    .method('balance')
    .call(client.key.getAddress())

  const Balance =
    contractAddress === 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      ? BandBalance
      : TokenBalance

  const balance = Balance.fromSmallUnitBigNumber(raw_balance).toUnitString()

  dispatch({
    type: actionTypes.UPDATE_BALANCE,
    payload: {
      address: contractAddress,
      balance: balance,
    },
  })

  return balance
}

export const queryAllBalance = () => async (dispatch, getState) => {
  return await Promise.all([
    dispatch(queryBalance()),
    ...KnownTokens.map(token => dispatch(queryBalance(token.token_address))),
  ])
}
