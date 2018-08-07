import React from 'react'
import Component from './renderer'
import { connect, bindActions } from '~/store'

import { queryAllBalance } from '~/store/app/Tokens/action'

@connect(
  undefined,
  dispatch => bindActions({ queryAllBalance }, dispatch)
)
export default class Header extends React.Component {
  state = { refreshing: false }

  async onRefresh() {
    this.setState({ refreshing: true })
    let isBalanceFetched = false
    this.stopRefreshAnimation = setTimeout(() => {
      if (isBalanceFetched) {
        this.setState({ refreshing: false })
      }
      this.stopRefreshAnimation = false
    }, 1200)
    await this.props.queryAllBalance()
    isBalanceFetched = true
    if (!this.stopRefreshAnimation) {
      this.setState({ refreshing: false })
      this.stopRefreshAnimation = true
    }
  }

  render() {
    return (
      <Component
        onRefresh={this.onRefresh.bind(this)}
        refreshing={this.state.refreshing}
      />
    )
  }
}
