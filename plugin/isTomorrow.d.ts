import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@josephmulder/dayjs' {
  interface Dayjs {
    isTomorrow(): boolean
  }
}
