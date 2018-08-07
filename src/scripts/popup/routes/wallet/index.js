import React from 'react'
import { connect, bindActions } from '~/store'
import { push } from 'connected-react-router'
import Component from './renderer'
import { BigNumber } from 'bignumber.js'
import KnownTokens from '~/config/tokens'

import { queryAllBalance } from '~/store/app/Tokens/action'
import { commitMint, commitTransfer } from '~/store/app/Vault/action'

@connect(
  state => ({
    wallet: state.app.Vault.get('vault').wallets[0],
    balance: state.app.Tokens.get('balance'),
  }),
  dispatch =>
    bindActions(
      {
        goToVaultPassword: () => push('/vault-password'),
        queryAllBalance,
        commitMint,
        commitTransfer,
      },
      dispatch
    )
)
export default class Route extends React.Component {
  async componentDidMount() {
    await this.props.queryAllBalance()
  }

  async onMint(token) {
    const amount = window.prompt(
      `How many ${token ? 'tokens' : 'BANDs'} do you want?`
    )
    if (amount) {
      const result = await this.props.commitMint(amount, token)
      setTimeout(() => this.props.queryAllBalance(), 1000)
    }
  }

  async onSend(token) {
    const amount = window.prompt(`How many BAND do you want to send?`)
    if (amount) {
      const recipientAddress = window.prompt(
        `What address do you want to send to?`
      )
      if (recipientAddress) {
        const result = await this.props.commitTransfer(amount, recipientAddress)
        setTimeout(() => this.props.queryAllBalance(), 1000)
      }
    }
  }

  onAddressClick() {
    // Copy
    document.oncopy = event => {
      event.clipboardData.setData('text/plain', this.props.wallet.address)
      event.preventDefault()
    }
    document.execCommand('copy', false, null)
  }

  render() {
    const identicon = `https://api.adorable.io/avatars/128/${
      this.props.wallet.address
    }.png`

    return (
      <Component
        balance={this.props.balance}
        wallet={this.props.wallet}
        identicon={identicon}
        onAddressClick={this.onAddressClick.bind(this)}
        onMint={this.onMint.bind(this)}
        onSend={this.onSend.bind(this)}
        knownTokens={KnownTokens}
      />
    )
  }
}
