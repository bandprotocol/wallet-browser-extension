import React from 'react'
import Component from './renderer'
import { connect, bindActions } from '~/store'
import { commitTxn } from '~/store/app/Vault/action'
import { queryAllBalance, queryVotingPower } from '~/store/app/Tokens/action'
import { TokenBalance } from '~/store/utils/token-balance'
import storage from '~/utils/storage'

@connect(
  state => {
    const votes = state.app.VoteCommit.get('votes').toJS()
    const voteCommits = []
    Object.keys(votes).map(id =>
      voteCommits.push({
        id,
        ...votes[id],
      })
    )
    console.log('voteCommits', voteCommits)
    return {
      voteCommits: voteCommits.sort(
        (a, b) => parseInt(a.poll_id) - parseInt(b.poll_id)
      ),
    }
  },
  dispatch =>
    bindActions({ queryVotingPower, commitTxn, queryAllBalance }, dispatch)
)
export default class Vote extends React.Component {
  state = {
    votingPower: 0,
  }

  async componentDidMount() {
    this.fetchVotingPower()
  }

  async fetchVotingPower() {
    const votingPower = await this.props.queryVotingPower(
      this.props.voting_address
    )
    console.log('Voting', votingPower)
    this.setState({ votingPower })
  }

  async onRequestVotingPower() {
    const votingPower = window.prompt(`How much power do you want to increase?`)

    if (votingPower) {
      const realVotingPower = new TokenBalance(votingPower).toSmallUnit()
      await this.props.commitTxn(
        'Voting',
        this.props.voting_address,
        'request_voting_power',
        realVotingPower
      )
      setTimeout(() => {
        this.fetchVotingPower()
        this.props.queryAllBalance()
      }, 1000)
    }
  }

  async onWithdrawVotingPower() {
    const votingPower = window.prompt(`How much power do you want to withdraw?`)

    if (votingPower) {
      const realVotingPower = new TokenBalance(votingPower).toSmallUnit()
      await this.props.commitTxn(
        'Voting',
        this.props.voting_address,
        'withdraw_voting_power',
        realVotingPower
      )
      setTimeout(() => {
        this.fetchVotingPower()
        this.props.queryAllBalance()
      }, 1000)
    }
  }

  render() {
    return (
      <Component
        voting_address={this.props.voting_address}
        voteCommits={this.props.voteCommits}
        votingPower={this.state.votingPower}
        onRequestVotingPower={this.onRequestVotingPower.bind(this)}
        onWithdrawVotingPower={this.onWithdrawVotingPower.bind(this)}
      />
    )
  }
}
