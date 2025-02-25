import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-demo/', // 这里将会影响之后生成的根路径
  title: "little-sunflower",
  description: "记录~",
  themeConfig: {
    logo: '/avatar.jpg',
    nav,
    sidebar,
    // 社交链接 添加 GitHub、Twitter 等图标链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' },
      { icon: 'twitter', link: 'https://twitter.com/your-account' }
    ],
    // 集成本地搜索或 Algolia 全文搜索
    search: {
      provider: 'local',
      // options: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME'
      // }
    },
    // 页面元信息,显示文档最后更新时间（需 Git 支持）
    lastUpdated: {
      text: '最后更新于',
      // formatOptions: {
      //   dateStyle: 'short'
      // }
    }
  }
})
