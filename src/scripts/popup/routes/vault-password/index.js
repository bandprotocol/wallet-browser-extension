import React from 'react'
import autobind from 'autobind-decorator'
import { push } from 'connected-react-router'
import { connect, bindActions } from '~/store'
import { generateVault } from '~/store/app/Vault/action'
import Component from './renderer'

@connect(
  undefined,
  dispatch =>
    bindActions(
      {
        generateVault,
        goToVaultSeed: () => push('/vault-seed'),
      },
      dispatch
    )
)
export default class Route extends React.Component {
  state = {
    password: '',
    confirmPassword: '',
  }

  @autobind
  async onCreateVault() {
    const { password, confirmPassword } = this.state
    console.log(password, confirmPassword)

    if (password.length < 8) {
      return alert('Password must contain 8+ characters')
    }

    if (password !== confirmPassword) {
      return alert('Password do not match')
    }

    await this.props.generateVault(password)
    this.props.goToVaultSeed()
  }

  render() {
    return (
      <Component
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        onPasswordChange={val => this.setState({ password: val })}
        onConfirmPasswordChange={val => this.setState({ confirmPassword: val })}
        onCreateVault={this.onCreateVault}
      />
    )
  }
}
