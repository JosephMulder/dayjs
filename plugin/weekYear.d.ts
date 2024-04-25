import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  interface Dayjs {
    weekYear(): number
  }
}
