import React from 'react'
import autobind from 'autobind-decorator'
import { push } from 'connected-react-router'
import { connect, bindActions } from '~/store'
import { generateVault } from '~/store/app/Vault/action'
import { resetTasks } from '~/store/app/TaskQueue/action'
import Component from './renderer'
import storage from '~/utils/storage'

@connect(
  state => ({
    tasks: state.app.TaskQueue.get('tasks'),
  }),
  dispatch => bindActions({ resetTasks }, dispatch)
)
export default class Route extends React.Component {
  async onClear() {
    await storage.set({ tasks: [] })
    this.props.queryAllBalance()
  }

  get isAllTaskComplete() {
    return !this.props.tasks.some(
      task => task.status !== 'approved' && task.status !== 'rejected'
    )
  }

  render() {
    if (this.props.tasks && this.props.tasks.length) {
      return (
        <Component
          tasks={this.props.tasks}
          resetTasks={this.props.resetTasks}
          isAllTaskComplete={this.isAllTaskComplete}
        />
      )
    }
    return null
  }
}
