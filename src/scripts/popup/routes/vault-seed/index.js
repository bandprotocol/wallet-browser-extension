import React from 'react'
import { connect, bindActions } from '~/store'
import { push } from 'connected-react-router'
import Component from './renderer'

@connect(
  state => ({ mnemonic: state.app.Vault.get('mnemonic') }),
  dispatch =>
    bindActions(
      {
        goToWallet: () => push('/wallet'),
      },
      dispatch
    )
)
export default class Route extends React.Component {
  render() {
    return (
      <Component
        mnemonic={this.props.mnemonic}
        onDone={this.props.goToWallet}
      />
    )
  }
}
