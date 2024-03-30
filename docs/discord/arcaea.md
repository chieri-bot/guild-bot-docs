# Arcaea

- [Arcaea](https://arcaea.lowiro.com/) is a rhythm game, please make sure you have an `Arcaea` account before using.
- We cannot directly get ranking data now. So we need to use `st3` archiving to get it. Steps below.
- Score management page: [https://www.chinosk6.cn/arc/](https://www.chinosk6.cn/arc/)



## Sync Local `st3` Database

- Please select the method based on your device
- Local data may not match some cloud data. If you want to modify this part of the data, please go to [here](https://www.chinosk6.cn/arc/) to manage your grades.



### Android, No ROOT, Not Use LSPatch

1. Download coexistence apk（`arc b30 x.x.xc(no root available).apk`）: [Google Drive](https://drive.google.com/drive/folders/1xt4bXPqwSy6tNNHw7nWhhJ6ReImqLuOR?usp=sharing)
2. Login，**AND DOWNLOAD YOUR CLOUD DATA**
3. Click the chieri avatar in the upper right corner，select `Upload st3` 



### Android, NO ROOT, Use LSPatch

1. Download XPosed module and install: （`arc_st3_upload(xposed module).apk`）: [Google Drive](https://drive.google.com/drive/folders/1xt4bXPqwSy6tNNHw7nWhhJ6ReImqLuOR?usp=sharing)
2. In LSPatch，Use `Local Mode` patch your Arcaea and install（Previously done, this step can be skipped）
3. Change Arcaea's module scope, then check the module installed in the first step.
4. Start Arcaea，**AND DOWNLOAD YOUR CLOUD DATA**
5. Click the chieri avatar in the upper right corner，select `Upload st3` 



### Android, Has ROOT

1. Download XPosed module and install: （`arc_st3_upload(xposed module).apk`）: [Google Drive](https://drive.google.com/drive/folders/1xt4bXPqwSy6tNNHw7nWhhJ6ReImqLuOR?usp=sharing)
2. Enable module
3. Start Arcaea，**AND DOWNLOAD YOUR CLOUD DATA**
4. Click the chieri avatar in the upper right corner，select `Upload st3` 



### I Can Extract `st3` File Myself

1. Go to [website](https://www.chinosk6.cn/arc/) - `Account Manage` page can be manually uploaded



### iOS，No Android Device，No PC，Can't Use Android Simulator

- There's no way...





## Bind An Account

- Command: `/arc bind xxxxxxxxx(your friends code)`



## Recent Grades

- Command: `/arc recent`
- Switch image type: `/arc conf_img`



## Single Song Grades


- Command: `/arc info songname [difficulty]`
  - `difficulty` is optional, support: `pst`/`prs`/`ftr`/`byd`



## Best 30

- Command: `/arc b30`

::: tip switch B30 type

Command: `/arc b30_set v2/v3/v4` , default `v4`

:::



## Best 30 (official)

:::warning Limited

This API is officially provided by Lowiro and is limited to 100 users per day. Please do not abuse this API.

:::

- Command: `/arc b30 official`



## Song Info

- Command: `/arc song songname`



## Song Population Ranking

:::tip

Data from [Arcaea official site](https://arcaea.lowiro.com/zh/song_ranking)

:::

- Command: `/arc pop` 



## Charts Preview

- Command: `/arc charts songname [difficulty]`



## Random Song

- Command: `/arc rand [level]`



## Song Rating Calculation

- Command: `/arc calc score songname [difficulty]`



## 有车吗

- Arcaea模块支持车牌查询, 详见: [有车吗](/discord/ycm)
