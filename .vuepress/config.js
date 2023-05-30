// notes/docs/.vuepress/config.js
module.exports = {
    // 网站基础目录
    base: '/',
    // 标题以及描述
    title: '6个月sap奋斗目标',
    description: '云原生sap_intern体验',
    // HTML head 标签中的内容，常用于给网站添加图标和链接样式表
    head: [
      ['link', { rel: 'icon', href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png' }],
    ],
  
    // vuepress 默认主题的设置
    themeConfig: {
      // 导航栏图标
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png',
      // 导航栏项目，按顺序从左到右显示
      nav: [
        // 单项
        { text: '首页', link: '/' },
        { text: '作者', link: 'https://github.com/baobaopandas' },
        { text: '更多相关', link: '/TODO' },
        // 列表项，可以在 item 里嵌套 item 实现分类
        // { text: '歌声合成', link: '/music/' },
        {
          text: '选择章节',
          items: [
            { text: 'goal', items: [{ text:'第一个月完成进度', link: '/goal/第一个月完成进度'}] },
          ],
        },

      ],
  
      
      // // 侧边栏
      // sidebar: {
      //   // HTML 笔记的侧边栏
      //   '/ka/': [
      //     '',
      //     // 分类第一章
      //     {
      //       title: '第一章',
      //       children: [
      //         '分布式/',
      //         'ZooKeeper/',
      //       ],
      //     },
      //   ],
      //   // CSS 笔记的侧边栏
      //   '/web/css/': [
      //     '',
      //     'one/',
      //     'two/',
      //   ],
      //   // JavaScript 笔记的侧边栏
      //   '/web/js/': [
      //     '',
      //     'one/',
      //     'two/',
      //   ],
      // },
    }
  }