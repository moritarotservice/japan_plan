# 小工具可行性排序：含市場飽和度

更新日期：2026-05-14

## 評估標準

這份排序不預設服務日本商家或台灣公司，而是客觀評估：

- 痛點強度
- 付費能力
- 市場飽和度
- 競品替代性
- MVP 速度
- 廣告驗證難度
- 銷售難度
- 是否容易被 AI / Shopify / QR 菜單 / PMS 工具取代
- 是否能延伸成更大的 SaaS

## 飽和度分級

- 低：競品少，替代方案不完整
- 中：有競品，但垂直場景仍可切
- 高：競品多，且已有成熟替代方案
- 很高：紅海，除非有強差異化否則不建議先做

## 排名總表

| 排名 | 計畫 | 綜合可行性 | 市場飽和度 | 一句判斷 |
|---:|---|---|---|---|
| 1 | Salon Guest Check | 中高 | 中 | 垂直場景明確，避開 QR 菜單與 Shopify；已有美容 inbound 平台，但預約前確認仍有切入空間 |
| 2 | 跨境 B2B 詢價與報價 workflow | 中高 | 中 | 長期價值最高之一，但第一版必須做 workflow，不能只做 AI 翻譯 |
| 3 | 外國客評論回覆產生器 | 中 | 中 | 飽和度低於旅宿訊息與 QR 菜單，MVP 快，但容易變成低價 AI 小工具 |
| 4 | 外國旅客 FAQ 產生器 | 中 | 高 | 需求強，但旅宿 AI concierge、FAQ、QR guide、PMS 工具已多 |
| 5 | 多語入住前訊息產生器 | 中 | 高 | 痛點很明確，但 PMS / OTA messaging / AI guest communication 已高度競爭 |
| 6 | 日本對海外採購 / 詢價工具 | 中 | 中 | B2B 價值可觀，但日本端信任與供應商網絡門檻高 |
| 7 | 日本商家外國客 CRM | 中低到中 | 中 | 長期可能有價值，但現在太早，應該從具體場景累積資料後再做 |
| 8 | 日本市場商品頁優化器 | 中低 | 中高 | 容易被 AI 內容生成取代，除非接到通路提案 / 報價流程 |
| 9 | 日本代理商進度追蹤表 | 低到中 | 中 | 痛點真實但客群窄，較像顧問服務或 CRM 模板 |
| 10 | 多語菜單 QR 產生器 | 低 | 很高 | 需求存在但競品非常多，餐飲小店付費能力偏低 |

## 重新排序後的關鍵變化

如果不看飽和度，旅宿類工具會排很前面，因為 inbound 需求與痛點都很強。

但加入飽和度後，旅宿工具排名下降。

原因是日本與海外已經有不少成熟產品：

- hotel / ryokan AI concierge
- PMS 原生 AI assistant
- Booking.com / Airbnb / OTA 訊息自動化
- unified inbox
- 多語 FAQ / 館內 guide
- AI chatbot

這代表旅宿方向不是不能做，而是不能做「一般多語入住訊息」或「一般 FAQ」。要切入旅宿，必須非常窄，例如：

- 只做小型 guesthouse 的繁中 / 韓文入住前包
- 只做地方旅宿的人工審核多語客服代營運
- 只做 OTA 訊息模板與實際導入服務
- 只做某一區域，例如福岡 / 沖繩 / 北海道

否則會直接撞 PMS、AI concierge 與 global guest messaging 工具。

## 前三名理由

### 1. Salon Guest Check

這不是最大市場，但目前相對可行。

優點：

- 垂直場景清楚
- 高單價服務，比餐飲更有付費能力
- 不跟 Shopify 正面競爭
- 不跟 QR 菜單紅海正面競爭
- 預約前確認、取消政策、過敏、照片上傳、服務注意事項是真流程
- 可以先做網站驗證，不需要串系統

飽和度：

- 中
- 有 WellBe、Tokyo Beauty Stars 這類外國客美容平台
- 但它們偏「集客 / 預約平台」，不是商家自己的預約前確認 workflow

主要風險：

- salon 是否願意為這件事付費未知
- 獲客可能需要逐店觸達
- 若只做靜態說明頁，價值不足

建議定位：

> 外國客預約前確認與風險降低工具，不是多語頁面工具。

### 2. 跨境 B2B 詢價與報價 workflow

這個方向長期價值高，但短期驗證比 salon / FAQ 慢。

優點：

- B2B 付費能力較高
- 台日 / 日台商務是長期需求
- 如果做成 quote-to-order workflow，壁壘高於 AI 文字工具
- 可延伸到客戶、報價、規格書、樣品、交期、訂單狀態

飽和度：

- 中
- 有 CRM、Excel、翻譯、貿易商、B2B 平台作為替代
- 但專門處理台日跨境詢價 workflow 的輕量工具不算明顯飽和

主要風險：

- 第一版若只是日文報價生成，會被 AI 取代
- 客戶流程差異大
- 需要很清楚選一邊：台灣賣日本，或日本買海外

建議定位：

> 詢價到報價的流程管理，不是日文生成器。

### 3. 外國客評論回覆產生器

這個不是最大生意，但適合做 lead magnet。

優點：

- MVP 很快
- 商家很容易理解
- 適用旅宿、餐飲、美容、體驗活動
- 可用 Google Review 真實資料驗證
- 飽和度低於 QR 菜單與旅宿 messaging

飽和度：

- 中
- AI 可以生成評論回覆，部分 reputation management 工具有類似功能
- 但針對日本小商家的多語外國客評論洞察仍可切

主要風險：

- 單獨付費意願有限
- 容易被當成免費 AI 小工具
- 最好作為入口，延伸到「外國客洞察 / 評論改善 / 店家多語接客」而不是單獨 SaaS

## 高需求但高飽和的方向

### 多語入住前訊息產生器

需求強，但競爭高。

已存在大量替代方案：

- Airbnb scheduled messages
- Booking / OTA messaging
- PMS automated messaging
- Hospitable 類 STR 工具
- AirHost AI Assistant
- tripla / abi-Ai Concierge 等日本旅宿工具
- Runnr.ai / Upstay / GuestWisely 等 global guest communication tools

所以這個方向不應該做成泛用產品。

可做的狹窄切入：

- 只做沒有 PMS 的小型民宿
- 只做台灣 / 香港旅客常問問題包
- 只做「導入服務 + 模板」而不是 SaaS
- 只做某區域旅宿代理服務

### 外國旅客 FAQ 產生器

比入住訊息更容易做，但付費深度更弱。

可以作為：

- 廣告 lead magnet
- 旅宿導入服務入口
- 多語內容初始設定工具

不適合單獨做成長期產品。

### 多語菜單 QR 產生器

飽和度最高。

日本已有多個餐飲多語 QR 菜單、AI 菜單翻譯、同時通譯與 inbound 餐飲工具。除非有明確差異化，例如訂單、評論、客源分析、Google Maps 導流，否則不建議做。

## 最客觀建議

如果目標是「最少成本做網站，測出有效訊號」：

1. Salon Guest Check
2. 外國客評論回覆產生器
3. 外國旅客 FAQ 產生器

如果目標是「長期公司價值」：

1. 跨境 B2B 詢價與報價 workflow
2. 外國客預約前確認 workflow
3. 旅宿多語客服 / 入住 workflow，但必須非常垂直

如果只能先做一個：

> 先做 Salon Guest Check。  
> 它不是最大市場，但在市場飽和度、MVP 速度、差異化、付費可能性之間，目前平衡最好。

## 參考競品與市場訊號

- JNTO：2025 年訪日外客 42,683,600 人，創歷史新高
- Japan Tourism Agency / Nippon.com：2025 年訪日消費約 9.5 兆日圓
- WellBe：訪日外國人向け美容 / wellness 預約平台，並與 Reserve with Google 連携
- AirHost AI Assistant：宿泊業專用 AI，PMS 原生、多語、OTA 對應
- abi-Ai Concierge：約 800 施設導入的宿泊施設向け多語 AI concierge
- Hospitable / Runnr.ai / GuestWisely / Upstay：global guest communication / automated messaging
- Lingualn Menu / 千客万歳 / World Menu / MenuLingo：多語 QR 菜單與餐飲 inbound 工具

