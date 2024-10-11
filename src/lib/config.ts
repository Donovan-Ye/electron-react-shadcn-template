import fs from 'node:fs'
import path from 'node:path'
import { app } from 'electron'

const USER_DATA_PATH = path.join(app.getPath('home'), 'user_data.json')

export function getConfigByName(name: string) {
  const config = fs.readFileSync(USER_DATA_PATH, 'utf-8')
  return JSON.parse(config)[name]
}

export function setConfigByName(name: string, value: any) {
  const config = fs.readFileSync(USER_DATA_PATH, 'utf-8')
  const newConfig = JSON.parse(config)
  newConfig[name] = value
  fs.writeFileSync(USER_DATA_PATH, JSON.stringify(newConfig))
}
