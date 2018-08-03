import ext from './utils/ext'
import storage from './utils/storage'

ext.browserAction.setBadgeBackgroundColor({ color: '#17BD99' }, () => false)
storage
  .get(['tasks'])
  .then(({ tasks = [] }) =>
    ext.browserAction.setBadgeText({ text: tasks.length || '' })
  )

const generateRandomString = (length: number = 32) => {
  const characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array(length)
    .fill(0)
    .map(_ => characterPool[Math.floor(Math.random() * characterPool.length)])
    .join('')
}

ext.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.type === 'BAND_PROTOCOL') {
    if (request.op === 'task') {
      console.log('task')
      // Add task to the task queue
      const { tasks = [] } = await storage.get(['tasks'])

      ext.browserAction.setBadgeText({ text: `${tasks.length + 1}` })

      await storage.set({
        tasks: tasks.concat({
          ...request.param,
          created_at: new Date().toISOString(),
          id: generateRandomString(),
        }),
      })
    }
  }

  console.log('sender', sender, request)
})
