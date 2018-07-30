import { createScopedActionTypes } from '~/store/utils'
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
  const client = new BandProtocolClient({
    keyProvider: secretKey,
  })
  const secretbox = client.key.encrypt(password)

  // Create vault object
  const vault = {
    wallets: {
      name: 'Primary Wallet',
      address,
      secretbox,
    },
  }

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

export const reviveVault = () => async (dispatch, getStore) => {
  return new Promise(resolve =>
    storage.get(['vault'], ({ vault }) => {
      dispatch({
        type: actionTypes.VAULT,
        payload: { value: vault },
      })
      resolve()
    })
  )
}

export const importVault = vault => (dispatch, getStore) => {
  // TODO
}
