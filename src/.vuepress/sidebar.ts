import { basename } from 'path'
import { sidebar } from 'vuepress-theme-hope'
import { globSync } from 'glob'
import type { SidebarOptions } from 'vuepress-theme-hope'

const dirs = globSync('src/*', {
  dot: false,
  ignore: ['src/posts'],
  withFileTypes: true,
})
  .filter((d) => d.isDirectory())
  .map((d) => '/' + basename(d.fullpath()))

let sidebarOptions: SidebarOptions = {
  '/posts': [],
}

for (const dir of dirs) {
  sidebarOptions[dir] = 'structure'
}

export default sidebar(sidebarOptions)
