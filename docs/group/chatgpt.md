# chatGPT

- 若需要使用此功能，请[购买 tokens](https://afdian.net/item/2b761622086e11efbc015254001e7c00)



## 费用相关

每次对话都会消耗 tokens，每次对话完成后都会结算一次。

**注意：使用的模型可能会发生变化，变化后本页文档可能没有及时更新。请以购买页的说明和 `/chat history` 指令内所显示的模型为准。** 

使用 `gpt-3.5-turbo-0125` 模型。模型价格可在 [官网](https://openai.com/pricing) 查询到。该模型目前价格为：

输入 `US$0.0005` / `1K` tokens；输出 `US$0.0015` / `1K` tokens。最大上下文为 `16,385` tokens 

chieri 这边为了方便计算，统一以 `$0.0005` / `1K` tokens 计算。输入消耗 `1` 倍，输出消耗 `3` 倍。

tokens 价格按照 openAI 官网价格换算到人民币 + 平台 `6%` 抽成 作为总价格。价格可能会根据汇率变化而变化。



## Chat 相关

- 设置群内 system prompt: `/chat set system  你的prompt`
- 删除自定义 system prompt: `/chat del system`
- 对话: `/chat`
- 切换对话模式为 `群内共享上下文 (默认)` / `个人独立上下文` 模式: `/chat switch`
- 回滚对话: `/chat rollback`, `/chat rb`
  - 您也可以一次回滚多轮对话，例如回滚 3 轮对话: `/chat rb 3`
- 查看对话历史: `/chat history`
- 刷新对话记录: `/chat refresh`, `/chat ref`