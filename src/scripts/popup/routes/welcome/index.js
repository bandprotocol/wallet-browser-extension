import React from 'react'
import { connect, bindActions } from '~/store'
import { push } from 'connected-react-router'
import Component from './renderer'

@connect(
  state => ({}),
  dispatch =>
    bindActions(
      {
        goToVaultPassword: () => push('/vault-password'),
      },
      dispatch
    )
)
export default class Route extends React.Component {
  componentDidMount() {
    this.props.goToVaultPassword()
  }

  render() {
    return <Component />
  }
}
