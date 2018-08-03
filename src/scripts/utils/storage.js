import ext from './ext'

const storage = ext.storage.sync ? ext.storage.sync : ext.storage.local

export default class Storage {
  static async get(keyList) {
    return new Promise(resolve => {
      storage.get(keyList, resolve)
    })
  }

  static async set(update) {
    return new Promise(resolve => {
      storage.set(update, resolve)
    })
  }
}
