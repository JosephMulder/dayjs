import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  interface Dayjs {
    isSameOrBefore(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
