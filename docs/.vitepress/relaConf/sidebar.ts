import { DefaultTheme } from 'vitepress';
// 配置左侧或右侧的侧边栏导航结构，支持多级嵌套
export const sidebar: DefaultTheme.Sidebar = {
  // /column/algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/algorithm/': [
    // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/algorithm/001_stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/algorithm/002_stack'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/algorithm/001_stack'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/algorithm/001_stack'
        }
      ]
    }
  ]
};
