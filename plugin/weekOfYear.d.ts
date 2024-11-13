import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@josephmulder/dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
