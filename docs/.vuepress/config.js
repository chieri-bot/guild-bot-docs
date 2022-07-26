module.exports = {
    title: 'chieri bot docs',
    description: 'cheiri bot 频道文档',
    host: "0.0.0.0",
    port: 18794,

    head: [ 
        ['link', { rel: 'icon', href: '/g.jpg' }],
      ],

    markdown: {
        lineNumbers: false  // 代码块行号
      },
      themeConfig: {
        logo: "/logo.png",
        nav:[ // 导航栏配置
          {text: "爱发电", link: "https://afdian.net/@chieri"},
          {text: "哔哩哔哩", link: "https://space.bilibili.com/697847106"}
        ],
        
        sidebar: {
            '/channel' : [
                "/channel/",
                "/channel/everydaysign",
                "/channel/arcaea",
                "/channel/maimai",
                "/channel/osu",
                "/channel/pjsk",
                "/channel/sdvx",
                "/channel/ycm",
                "/channel/others",
                "/channel/about"
            ]
        },
        repo: 'chieri-bot/guild-bot-docs',
        repoLabel: 'GitHub',

        sidebarDepth: 2, // 侧边栏显示2级
      }

  }