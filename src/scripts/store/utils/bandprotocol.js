import { BLOCKCHAIN_ENDPOINT } from '~/config/blockchain'
import BandProtocolClient from 'bandprotocol'

export const getBandProtocolClient = secretKey =>
  new BandProtocolClient(BLOCKCHAIN_ENDPOINT, secretKey)
