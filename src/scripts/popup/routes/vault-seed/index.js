import React from 'react'
import { connect } from '~/store'
import Component from './renderer'

@connect(state => ({ mnemonic: state.app.Vault.get('mnemonic') }))
export default class Route extends React.Component {
  render() {
    return <Component mnemonic={this.props.mnemonic} onDone={() => false} />
  }
}
