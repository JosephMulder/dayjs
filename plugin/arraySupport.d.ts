import { PluginFunc } from 'dayjs'

declare module '@hso/dayjs' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export = plugin
