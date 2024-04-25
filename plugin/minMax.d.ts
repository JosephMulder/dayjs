import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  export function max(dayjs: Dayjs[]): Dayjs | null
  export function max(...dayjs: Dayjs[]): Dayjs | null
  export function min(dayjs: Dayjs[]): Dayjs | null
  export function min(...dayjs: Dayjs[]): Dayjs | null
}
