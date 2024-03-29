# maimai dx (Chinese Server)

- `舞萌DX`是一款街机音乐游戏, 使用前请前往[舞萌 DX 查分器](https://www.diving-fish.com/maimaidx/prober/)绑定自己的ID

:::warning 注意

在discord环境中, `用户名`为必填参数, 不可省略

:::



## 查询Best40/50

- 指令: `/mai b40 用户名` / `/mai b50 用户名`



## 查询理论值

- 指令: `/mai b40 理论值` / `/mai b50 理论值`



## 查询曲目信息

- 指令: `/mai song 曲名`
- 使用ID查询: `/mai song id曲目id` 
  - 例: `/mai song id777`



## 查询曲目分数线

- 指令: `/mai calc 难度 曲目 acc` 
  - 例: `/mai calc 白777 100.01`

:::tip 分数线查询参数说明

难度: "绿"、"黄"、"红"、"紫"、"白" 

曲目：可填写"id"、"曲名"、"曲目别称" 

acc：希望达到的Acc

:::



## 查询指定曲目成绩

- 指令: `/mai info 曲名 --用户名`
  - 例: `/mai info 雪月花 --hidden`



## 底分分析

- 指令: `/mai base 用户名`



## 随机曲目

- 指令: `/mai rand [参数]`

:::tip 随机曲目参数
关键词有: "dx", "sd", "标准", "绿", "黄", "红", "紫", "白"
以及: "1、2、3 ... 13、13+ ... 15" 等标级

 - 您可以自由组合这些关键词，关键词以外的词语将会自动忽略
例: "/mai rand dx紫13+" , "/mai rand 来一首14+的紫谱"

:::



## 按难度查分

- 指令: `/mai level 定数 用户名 [页数]`
  - `页数`为可选参数, 默认为`1`




## 某定数下达成率与Rating关系查询

- 指令: `/mai graph 定数`



## 查询底分排行

- 指令: `/mai rank 用户名`



## 查询姓名版达成进度

- 指令: `/mai plate 姓名版名称 用户名`



## 查询成就达成要求

- 指令: `/mai plateinfo 姓名版名称`