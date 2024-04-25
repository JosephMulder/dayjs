import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hso/dayjs' {
  export function updateLocale(localeName: string, customConfig: Record<string, unknown>): Record<string, unknown>
}
