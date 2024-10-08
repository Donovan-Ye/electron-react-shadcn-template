import { lstat } from 'node:fs/promises'
import process from 'node:process'
import { ipcRenderer } from 'electron'

ipcRenderer.on('main-process-message', (_event, ...args) => {
  // eslint-disable-next-line no-console
  console.log('[Receive Main-process message]:', ...args)
})

lstat(process.cwd()).then((stats) => {
  // eslint-disable-next-line no-console
  console.log('[fs.lstat]', stats)
}).catch((err) => {
  console.error(err)
})
