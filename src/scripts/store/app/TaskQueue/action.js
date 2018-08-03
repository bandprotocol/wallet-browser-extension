import { createScopedActionTypes } from '~/store/utils'
import { getBandProtocolClient } from '~/store/utils/bandprotocol'
import { BandBalance, TokenBalance } from '~/store/utils/token-balance'
import ext from '~/utils/ext'
import storage from '~/utils/storage'

export const actionTypes = createScopedActionTypes('app.TaskQueue', [
  'UPDATE_TASKS',
])

export const resetTasks = () => async (dispatch, getStore) => {
  dispatch({
    type: actionTypes.UPDATE_TASKS,
    payload: {
      tasks: [],
    },
  })

  await storage.set({ tasks: [] })
  ext.browserAction.setBadgeText({ text: '' })
}

export const updateTask = (id, update) => async (dispatch, getStore) => {
  const tasks = getStore().app.TaskQueue.get('tasks')

  const index = tasks.findIndex(task => task.id === id)

  if (index >= 0) {
    const newTask = [...tasks]
    newTask[index] = {
      ...tasks[index],
      ...update,
    }

    dispatch({
      type: actionTypes.UPDATE_TASKS,
      payload: {
        tasks: newTask,
      },
    })

    await storage.set({ tasks: newTask })
  }
}

export const reviveTasks = () => async (dispatch, getStore) => {
  const { tasks } = await storage.get(['tasks'])

  dispatch({
    type: actionTypes.UPDATE_TASKS,
    payload: { tasks: tasks || [] },
  })
}
