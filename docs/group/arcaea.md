# Arcaea (韵律源点)

- [Arcaea](https://arcaea.lowiro.com/)是一款音乐游戏, 使用本功能之前, 请确保您拥有一个`Arcaea`账户



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

- 指令: `#arc b30`

::: tip 切换B30样式

您可以使用 `#arc b30 set v2/v3/v4` 指令切换B30的样式, 默认为`v4`

:::



## 查询Best30(官方接口)

:::warning 接口限制

此接口由Lowiro官方提供, 每日限量100名用户, 请不要滥用此接口

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