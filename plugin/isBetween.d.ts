import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}
