module.exports = {
    title: 'chieri bot docs',
    description: 'cheiri bot 频道文档',
    host: "0.0.0.0",
    port: 8080,

    markdown: {
        lineNumbers: false  // 代码块行号
      },
      themeConfig: {
        nav:[ // 导航栏配置
          {text: "爱发电", link: "https://afdian.net/@chieri"},
          {text: "哔哩哔哩", link: "https://space.bilibili.com/697847106"}
        ],
        
        sidebar: {
            '/' : [
                "/",
                "everydaysign",
                "arcaea",
                "maimai",
                "osu",
                "pjsk",
                "sdvx",
                "ycm",
                "others"
            ]
        },

        sidebarDepth: 2, // 侧边栏显示2级
      }

  }