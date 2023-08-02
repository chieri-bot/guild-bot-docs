# Arcaea (韵律源点)

- [Arcaea](https://arcaea.lowiro.com/) 是一款音乐游戏, 使用本功能之前, 请确保您拥有一个`Arcaea`账户




## 绑定账号

- 指令: `#arc bind 您的好友码`



## 查询绑定账号的详细信息

- 指令: `#arc bind info`



## 查询最近成绩

- 指令: `#arc`
- 切换最近成绩样式: `#arc conf img`



## 查询单曲最佳

::: tip 注意
查询单曲最佳的用户名与潜力值均为缓存, 缓存刷新方式为 [查询最近成绩](#查询最近成绩)
:::


- 指令: `#arc info 曲名 [难度]`
  - 其中`难度`为可选参数, 支持的输入有: `pst`/`prs`/`ftr`/`byd`



## 查询Best30

:::warning

此接口目前正在测试，可能出现查询缓慢/失败的情况。

为了帮助 B30 复活，是[兄弟就来砍一刀！](https://www.chinosk6.cn/arc/kanyidao/)

:::

- 指令: `#arc b30`

::: tip 切换B30样式

您可以使用 `#arc b30 set v2/v3/v4` 指令切换B30的样式, 默认为`v4`

:::



## 查询Best30(官方接口)

:::warning 接口限制

前置条件：[同步数据](#同步数据)

:::

- 指令: `#arc b30 official`



## 查询歌曲信息

- 指令: `#arc song 曲名`



## 查询某定数所有歌曲

- 指令: `#arc rating 定数`



## 查询某歌曲别称

- 指令: `#arc alias 曲名`



## 查询曲目热度

:::tip 数据来源

数据来自[Arcaea官网](https://arcaea.lowiro.com/zh/song_ranking)

:::

- 指令: `#arc pop` 



## 查询谱面预览

- 指令: `#arc charts 曲名 [难度]`



## 切换查分图样式

### 切换最近成绩样式

- `#arc conf img` - 重复输入该指令, 可在 `chieri bot v2`, `chieri bot v3`, `RABiBOT` 之间切换

### 切换B30样式

- `#arc b30 set v2/v3/v4`



## 随机歌曲

- 指令: `#arc rand [标级]`



## 歌曲定数计算

- 指令: `#arc calc 分数 曲目 [难度]`



## 自定义查分角色

### 添加自定义角色

:::tip 图片要求

请使用带有Alpha图层的立绘, 不要使用插画

:::

- 指令: `#arc set char` 

### 删除自定义角色

- 指令: `#arc del char`



## 查看您的Arcaea年报

:::tip

仅分析您在chieri查询过的成绩。若希望明年统计数据时更加准确, 请多多使用chieri查询最近成绩哟~

:::

- 指令: `#arc conc`



## 猜歌

- `#arc guess` - 发起音频猜歌
- `#arc guess2` - 发起曲绘猜歌
- `#arc guess3` - 发起key音猜歌



## 设置指令兼容

- 设置**您所在的群聊**Arcaea指令是否兼容`/arc`, 开启后可以使用`/a`, `/arc` 等指令替换`#arc`。默认为开启状态`on`。

- 指令: `#arc set slash on/off`



## 有车吗

- Arcaea模块支持车牌查询, 详见: [有车吗](/group/ycm)



## 同步数据

:::warning 注意

**使用官方接口查询B30**

目前不需要订阅 Arcaea Online 也可以同步数据

**iOS 安装方式不同，并且无法同步 cookie。请参考[这篇文章](https://docs.nightcode.cn/guide/ab30/)，安装完成后跳转到第三步。**

:::

- 1. 安装 [油猴脚本 Tampermonkey](https://www.tampermonkey.net/)，电脑/手机均可。安卓推荐 [FireFox](https://www.mozilla.org/zh-CN/firefox/browsers/mobile/)。

  2. 进入脚本的设置页面，点击 `实用工具`，在 `从 URL 安装` 输入框内输入下面的[地址](https://www.chinosk6.cn/arc/arc_tm.js)，然后点击安装

     ```
     https://www.chinosk6.cn/arc/arc_tm.js
     ```

     ![step1](/tm_step1.png)

  3. 进入 [Arcaea 官网](https://arcaea.lowiro.com/zh/profile/)，若脚本正常安装，你应该可以看到右下角有一个如下图所示的工具框。若没有，请刷新一下页面，或者检查脚本是否正常安装。

     ![step2](/tm_step2.png)

  4. **登录你的账号**

  5. 点击 `Update Bests` 即可同步数据！具体功能介绍请看下方。**若弹出跨域请求框，请点击允许，否则无法同步数据。**

  6. 同步完成后即可使用 `/a b30 official` 指令查分。

  

- 下面是各部分功能说明

  - `From Rank`  - 从排行榜同步数据，不需要订阅 Arcaea Online，数据最全。
  - `From Purchase`  - 从官方订阅接口获取数据，**需要订阅 Arcaea Online 才能使用**，数据不全，无法获取 `Pure/Far/Lost` 数据。
  - `Upload Cookie` - 将您的 Cookie 上传到服务器，在此 Cookie 的有效期内，查询最近成绩和单曲最佳都不需要手动同步数据了 (查询 B30 仍然需要手动同步)。

  

- 默认情况下，选定 `Update Self Bests`，即更新自己的 B30。

- 若您担心因为同步 B30 数据导致自己的账号被封禁，可以按照下面的步骤使用小号查询：

  - 1. 登录你的大号，点击 `Update Me` 即可。
    2. 换上你的小号，加上大号的好友，选择 `Update Others Bests`。
    3. 在下拉列表内找到你的大号，然后点击 `Update Bests` 即可使用小号同步。

