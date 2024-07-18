import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
import katexMacros from './katex-macros.js'

export default hopeTheme({
  hostname: 'https://rehnertz.github.io',
  author: {
    name: 'Rehnertz',
  },
  logo: '/avatar.png',
  docsDir: 'src',
  navbar,
  sidebar,
  blog: {
    description: 'Was Sie lieben, ist Ihr Leben.',
    medias: {
      BiliBili: 'https://space.bilibili.com/5678656',
      Gitee: 'https://gitee.com/rehnertz',
      GitHub: 'https://github.com/rehnertz',
      Zhihu: 'https://www.zhihu.com/people/ray-87-74',
    },
  },
  hotReload: false,
  plugins: {
    blog: true,
    mdEnhance: {
      attrs: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      spoiler: true,
      sub: true,
      sup: true,
      katex: {
        macros: katexMacros,
      },
    },
  },
})
