import {
  HardDrives,
  Browser,
  DeviceMobile,
  Database,
  Cloud,
  GitBranch,
  Plugs,
  TreeStructure,
  FileMagnifyingGlass,
  AppWindow,
  Kanban,
  Lightning,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

export const iconMap: Record<string, Icon> = {
  server: HardDrives,
  browser: Browser,
  mobile: DeviceMobile,
  database: Database,
  cloud: Cloud,
  devops: GitBranch,
  plug: Plugs,
  tree: TreeStructure,
  ocr: FileMagnifyingGlass,
  saas: AppWindow,
  tools: Kanban,
  automation: Lightning,
}
