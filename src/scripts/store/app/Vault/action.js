import { createScopedActionTypes } from '~/store/utils'
import { getBandProtocolClient } from '~/store/utils/bandprotocol'
import { BandBalance, TokenBalance } from '~/store/utils/token-balance'
import BandProtocolClient from 'bandprotocol'
import storage from '~/utils/storage'

export const actionTypes = createScopedActionTypes('app.Vault', [
  'VAULT',
  'MNEMONIC',
])

export const generateVault = password => async (dispatch, getStore) => {
  const {
    address,
    mnemonic,
    secretKey,
    verifyKey,
  } = BandProtocolClient.generateRandomKey()

  // Generate secretbox, encrypted with the password
  const client = getBandProtocolClient(secretKey)
  const secretbox = client.key.encrypt(password)

  // Create vault object
  const vault = {
    wallets: [
      {
        name: 'Primary Wallet',
        address,
        secretbox,
        secretKey,
      },
    ],
  }

  // Create Account
  await dispatch(commitCreateAccount(secretKey, verifyKey))

  // Save vault
  await storage.set({ vault })

  // Set redux
  dispatch({
    type: actionTypes.VAULT,
    payload: { value: vault },
  })

  dispatch({
    type: actionTypes.MNEMONIC,
    payload: { value: mnemonic },
  })
}

export const commitCreateAccount = (secretKey, verifyKey) => async (
  dispatch,
  getStore
) => {
  const client = getBandProtocolClient(secretKey)

  const creator = await client.blockchain
    .contract('Creator')
    .call([...Array(40).fill('0')].join(''))
  const addr = await creator
    .method('create')
    .call(
      client.blockchain
        .contract('Account')
        .__constructor__(client.key.getVerifyKey())
    )
  const account = await client.blockchain.contract('Account').call(addr)
}

export const commitTxn = (
  contractType,
  contractAddress,
  method,
  ...args
) => async (dispatch, getState) => {
  const secretKey = getState().app.Vault.get('vault').wallets[0].secretKey
  const client = getBandProtocolClient(secretKey)

  const nonce = await client.blockchain
    .contract('Account')
    .call(client.key.getAddress())
    .method('get_nonce')
    .call()

  const contract = await client.blockchain
    .contract(contractType)
    .call(contractAddress)
  const result = contract
    .method(method)
    .call(client.key, nonce.toNumber() + 1, ...args)

  return result
}

export const commitMint = (
  amount,
  contractAddress = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
) => async (dispatch, getState) => {
  const BalanceClass =
    contractAddress === 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      ? BandBalance
      : TokenBalance
  const balance = new BalanceClass(amount.toString()).toSmallUnit()
  return dispatch(commitTxn('Token', contractAddress, 'mint', balance))
}

export const commitRegistryApply = (contractAddress, content, amount) => async (
  dispatch,
  getState
) => {
  const balance = new TokenBalance(amount.toString()).toSmallUnit()
  return dispatch(
    commitTxn('Registry', contractAddress, 'apply', content, balance)
  )
}

export const reviveVault = () => async (dispatch, getStore) => {
  const { vault } = await storage.get(['vault'])

  dispatch({
    type: actionTypes.VAULT,
    payload: { value: vault },
  })
}

export const importVault = vault => (dispatch, getStore) => {
  // TODO
}
