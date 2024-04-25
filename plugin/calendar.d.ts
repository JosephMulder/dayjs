import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
