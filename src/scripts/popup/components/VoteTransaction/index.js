import React from 'react'
import Component from './renderer'
import BandProtocolClient from 'bandprotocol'
import { connect, bindActions } from '~/store'
import { updateTask } from '~/store/app/TaskQueue/action'
import { commitTxn } from '~/store/app/Vault/action'
import { updateVote } from '~/store/app/VoteCommit/action'
import { queryVotingPower } from '~/store/app/Tokens/action'

@connect(
  undefined,
  dispatch =>
    bindActions(
      { updateTask, commitTxn, updateVote, queryVotingPower },
      dispatch
    )
)
export default class Task extends React.Component {
  state = {
    votingPower: 0,
  }

  async componentDidMount() {
    const votingPower = await this.props.queryVotingPower(
      this.props.task.contractAddress
    )
    console.log('votingPower', votingPower)
    this.setState({ votingPower })
  }

  async onApprove() {
    const {
      contractType,
      contractAddress,
      method,
      args,
      extra = {},
    } = this.props.task

    const { votingPower } = this.state

    // Set VoteCommit if method = commit_vote
    let [poll_id] = args
    let { choice } = extra

    const id = `poll_${contractAddress}_${poll_id}`
    let nonce = [...Array(64)]
      .map(() => Math.floor(Math.random() * 10))
      .join('')

    const hash = BandProtocolClient.hashedCommit(choice, nonce)

    await this.props.updateVote(id, {
      type: 'vote',
      poll_id,
      voting_power: votingPower,
      nonce,
      choice,
    })

    const result = await this.props.commitTxn(
      contractType,
      contractAddress,
      method,
      poll_id,
      hash,
      votingPower
    )

    this.props.updateTask(this.props.task.id, { status: 'approved' })
  }

  async onReject() {
    this.props.updateTask(this.props.task.id, { status: 'rejected' })
  }

  render() {
    console.log('Task', this.props.task)
    return (
      <Component
        {...this.props.task}
        votingPower={this.state.votingPower}
        onVotingPowerChange={val => {
          this.setState({ votingPower })
        }}
        onApprove={this.onApprove.bind(this)}
        onReject={this.onReject.bind(this)}
      />
    )
  }
}
