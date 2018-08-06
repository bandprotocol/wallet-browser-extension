import React from 'react'
import Component from './renderer'
import { connect, bindActions } from '~/store'
import { updateTask } from '~/store/app/TaskQueue/action'
import { commitTxn } from '~/store/app/Vault/action'
import { updateVote } from '~/store/app/VoteCommit/action'

@connect(
  undefined,
  dispatch => bindActions({ updateTask, commitTxn, updateVote }, dispatch)
)
export default class Task extends React.Component {
  async onApprove() {
    const {
      contractType,
      contractAddress,
      method,
      args,
      extra = {},
    } = this.props.task

    const result = await this.props.commitTxn(
      contractType,
      contractAddress,
      method,
      ...args
    )

    this.props.updateTask(this.props.task.id, { status: 'approved' })
  }

  async onReject() {
    this.props.updateTask(this.props.task.id, { status: 'rejected' })
  }

  render() {
    return (
      <Component
        {...this.props.task}
        onApprove={this.onApprove.bind(this)}
        onReject={this.onReject.bind(this)}
      />
    )
  }
}
