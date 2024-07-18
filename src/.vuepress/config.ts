import { defineUserConfig } from 'vuepress'
import { markdownContainerPlugin } from '@vuepress/plugin-markdown-container'
import theme from './theme.js'
import head from './head.js'
import math from './md-plugins/math.js'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Rehnertz',
  description: '基于 vuepress-theme-hope 的个人博客。',
  head,
  theme,

  extendsPage({ path, frontmatter }) {
    if (path.startsWith('/measure-theory-and-probability')) {
      frontmatter.category ??= '数学'
      frontmatter.tag ??= '概率论'
      frontmatter.dir ??= {}
      ;(frontmatter.dir as any).text ??= frontmatter.title.replace('【概率论】', '')
    }
  },

  extendsMarkdown(md) {
    md.use(math)
  },
  plugins: [
    markdownContainerPlugin({
      type: 'definition',
      before: (info) =>
        `<div class="hint-container tip"><p class="hint-container-title">${
          info === '' ? '定义' : '定义（' + info + '）'
        }</p>`,
      after: (info) => '</div>',
    }),
    markdownContainerPlugin({
      type: 'theorem',
      before: (info) =>
        `<div class="hint-container info"><p class="hint-container-title">${
          info === '' ? '定理' : '定理（' + info + '）'
        }</p>`,
      after: (info) => '</div>',
    }),
    markdownContainerPlugin({
      type: 'proposition',
      before: (info) =>
        `<div class="hint-container info"><p class="hint-container-title">${
          info === '' ? '命题' : '命题（' + info + '）'
        }</p>`,
      after: (info) => '</div>',
    }),
    markdownContainerPlugin({
      type: 'exercise',
      before: (info) =>
        `<div class="hint-container info"><p class="hint-container-title">${
          info === '' ? '习题' : '习题（' + info + '）'
        }</p>`,
      after: (info) => '</div>',
    }),
  ],
})
