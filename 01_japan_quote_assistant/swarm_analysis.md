# Salon Guest Check Swarm 分析

更新日期：2026-05-14

## 說明

使用多代理視角分析 Salon Guest Check 計畫。

原本嘗試使用本機 `claude` CLI，但目前 CLI 未登入，回覆 `Not logged in · Please run /login`。因此改用本地可用的多代理方式，分成四個視角：

- 市場 / 競品 / 飽和度
- 產品 / MVP / 使用者流程
- GTM / 廣告 / 銷售 / 定價
- 風險 / 法務 / 商業模式

## 最終結論

Salon Guest Check 值得做 14 天驗證，但不值得現在做完整 SaaS。

目前企劃方向需要再收斂：

從：

> 日本美容 / 沙龍外國客預約前確認頁產生器

改成：

> 外国人のお客様向け予約前確認フォーム

核心不是「多語頁面」或「AI 翻譯」，而是：

> 幫日本 salon 在外國客到店前確認 cancellation policy、遲到規則、付款方式、服務注意事項、造型照片、過敏 / 禁忌資訊，降低 no-show、認識違い與現場接待負擔。

## 代理共識

四個分析視角的共識如下：

1. 市場不是空白，但仍有縫隙。
2. 不能做 booking platform、目錄、AI 翻譯、泛用多語頁。
3. 最大替代品不是 SaaS，而是 Google Form、LINE、Instagram DM 模板、自製英文頁、Hot Pepper 備註。
4. 第一版 MVP 現在偏大，需要縮小。
5. 早期獲客不應先賭廣告，應手動找高意圖 salon 做客製 sample。
6. 早期收入比起月費，更可能來自 setup fee。
7. 需要注意個資、照片、過敏 / 禁忌等敏感資訊風險。
8. 是否繼續，應看商家是否願意把 link 放進真實流程，而不是只看流量。

## 市場與競品判斷

### 競品地圖合理，但要補低技術替代品

既有競品分類合理：

- Hot Pepper Beauty：日本既有 salon booking 主流平台
- WellBe：訪日外國人美容 / wellness 預約平台
- Fresha：全球 beauty booking platform
- SAKURA Beauty Bookings：訪日外國人 salon booking
- WaBee / Japaholic：內容與 inbound promotion
- hAIr TOKYO / AI chat：多語溝通與 AI chat

但真正最危險的替代品是低技術流程：

- Google Form
- Typeform
- LINE 訊息模板
- Instagram 固定回覆
- Notion / Google Docs 英文說明頁
- 自製多語 FAQ
- Hot Pepper 備註欄
- DeepL / ChatGPT / Google Translate

這些替代品很便宜、立即可用，會壓低「多語頁產生器」的付費意願。

### 市場飽和度

| 類型 | 飽和度 | 判斷 |
|---|---|---|
| 美容預約 / booking platform | 高 | 不應進入 |
| 外國客美容資訊 / 目錄 | 高 | 不應進入 |
| 多語 AI chat / 翻譯 | 中高 | 不應主打 |
| 外國客預約前確認 / intake | 中到低 | 可測 |
| 顧客回覆收集 + 店員 checklist | 中到低 | 最有價值的縫隙 |

## 建議重新定位

### 不要用的定位

- 多語接客頁產生器
- 多語預約前說明頁
- AI 翻譯工具
- 外國人 friendly salon directory
- booking platform
- QR code 工具

### 建議定位

日文：

> 外国人のお客様向け予約前確認フォーム。キャンセルポリシー、支払い、遅刻、施術前の注意事項、希望スタイル写真、アレルギー情報を来店前に多言語で確認し、当日の認識違いとスタッフ対応の負担を減らします。

中文：

> 日本 salon 接待外國客前的風險確認與 intake 工具。

### 產品核心

不是：

- 翻譯
- 多語頁
- QR code
- 預約平台

而是：

- policy confirmation
- customer intake
- style photo collection
- allergy / contraindication collection
- staff checklist
- record of customer acknowledgement

## MVP 修正

### 目前 MVP 問題

原本第一版同時想做：

- 多語頁生成
- QR / link 下載
- Email gate
- Instagram DM 模板
- 店員 checklist
- 顧客端 sample page
- 結果頁
- 升級 CTA
- GA / Pixel
- 廣告轉換

這會讓驗證焦點模糊。

第一版真正要驗證的是：

> 日本 salon 是否願意建立並發送「外國客預約前確認 link」，用來降低 no-show、認識違い與現場溝通成本。

### 最小可驗證流程

1. 商家看到日文 landing page
2. 點「無料で確認フォームを作成」
3. 填 6-8 個必要欄位
4. 產生英文版外國客預約前確認頁 preview
5. 商家輸入 Email 取得 link
6. 顯示 CTA：「顧客回答・写真・アレルギー確認を受け取る有料版を試す」

### 第一版表單欄位

保留：

- 店名
- 店型 / 服務類型
- 最近車站或地址
- 予約・店舗リンク：Instagram / website / Google Maps URL
- 取消期限
- 遲到規則
- 付款方式
- 需要事前確認的事項：照片 / 過敏 / 禁忌 / 頭髮或皮膚狀況
- 聯絡 Email

延後：

- 營業時間
- 詳細聯絡方式
- walk-in
- 訂金
- 是否可更改時間
- 不支援的付款方式
- 稅金與服務費
- 孕婦或特殊狀況
- 顧客姓名 / 預約日期 / 聯絡方式

第一版商家表單不要超過 8 題。

## 第一版網站

### Hero

> 外国人のお客様向け 予約前確認フォームを3分で作成

### Subhead

> キャンセル・遅刻・支払い・施術前の注意事項を多言語で案内し、DM対応と当日の認識違いを減らします。

### Page Flow

1. Hero
2. 痛點三欄：DM 說明重複、無断キャンセル / 遅刻、施術前確認不足
3. 使用流程：入力 → リンク作成 → Instagram DM / LINE / Hot Pepper 備考に送る
4. Demo form
5. English confirmation preview
6. Email gate
7. Pro CTA：顧客回答、写真、アレルギー確認を受け取る版を試す

### 最重要事件

事件優先級：

1. `form_started`
2. `form_completed`
3. `preview_generated`
4. `email_submitted_for_link`
5. `pro_interest_clicked`
6. `consultation_clicked`
7. `qr_downloaded`

最重要的是：

> 商家產生確認頁後，留下 Email 取得可發送 link。

## GTM 建議

### 不要一開始只靠廣告

廣告可以測文案，但不應作為主要驗證方式。

最有效的是：

> 人工找高外國客比例 salon + 客製 sample + Instagram DM / email 驗證。

### 第一批名單

地區：

- 東京：表參道、原宿、銀座、新宿、澀谷
- 大阪：心齋橋、難波、梅田
- 京都：河原町、祇園、四条

店型：

- hair color / bleach
- nail art
- eyelash / eyebrow
- head spa
- esthetic

篩選條件：

- Instagram 經營活躍
- Google Maps 有英文 / 中文 / 韓文評論
- 店家介紹提到 foreigner / tourist / English
- 高單價、高溝通服務

### 廣告角度排序

1. Instagram DM 重複說明負擔
2. 無断キャンセル / 認識違い
3. 英語が話せない
4. 免費產生多語頁 / 3 分鐘建立

第一個角度最適合第一波：

> 外国人のお客様の予約対応、毎回DMで説明していませんか？

## 定價判斷

### 早期不要主推月費

月費 SaaS 是否成立還不確定。早期最可能成交的是 setup fee。

### 建議測試價格

Free：

- 1 個確認頁
- 英文 preview
- 有品牌標記
- 取得 link

Setup：

- 30,000-100,000 日圓
- 代設定多語確認頁
- 整理 cancellation policy
- 建立 DM 模板
- 設定顧客回覆欄位

Pro：

- 9,800 日圓 / 月
- 顧客回覆收集
- 造型照片上傳
- policy checkbox
- allergy / contraindication 欄位
- 店員 checklist email

付費點不是多語頁，而是：

- 店家不用自己整理規則
- 顧客提交照片 / 過敏 / 禁忌
- 顧客勾選理解取消與遲到規則
- 店員收到 checklist
- 發生爭議時有紀錄

## 風險

### 最大商業風險

產品被認為是：

- Google Form
- Typeform
- LINE
- Instagram DM 模板
- 翻譯工具

就能替代的小工具。

避免方式：

- 不賣多語頁
- 不賣 QR code
- 改賣預約前風險確認 workflow

### 法務 / 個資 / 信任風險

可能收集：

- 姓名
- 聯絡方式
- 預約日期
- 照片
- 過敏
- 皮膚敏感
- 懷孕
- 禁忌資訊

因此 MVP 要限制：

- 只做預約前資訊確認，不做醫療問診
- 先不碰美容醫療 clinic
- 不提供醫療、適應症、安全判斷
- 最終服務可否執行由店家現場確認
- 過敏 / 禁忌採自由填寫或簡單選項，不做判斷
- 需要隱私政策、保存期間、用途、刪除方式
- checkbox 不能包裝成完整法律免責或醫療同意書

## 14 天判斷標準

### 繼續做的最低條件

- 至少 10 家輸入真實店家資訊
- 至少 5 家留下 Email
- 至少 3 家下載 link / 要求 sample
- 至少 3 家明確表示願意放進 IG DM / LINE / 店內 / Google Maps / Hot Pepper 備註
- 至少 1 家願意試用顧客回覆收集功能
- 或至少 1 家詢問價格、導入、代設定

### 強烈繼續的訊號

- 有店家問「可以幫我設定嗎」
- 有店家願意提供 cancellation policy、付款方式、服務注意事項
- 有店家願意給真實外國客使用
- 有店家願意付 30,000 日圓以上 setup fee
- 店家關心的是 no-show、認識違い、事前確認、照片收集，而不是翻譯

### 停止或轉向的訊號

- 只有點擊，沒人填真實店家資料
- 大多數使用者只把它當免費翻譯工具
- 沒有人願意留下 Email
- 沒有人願意把 link 放進實際流程
- DM 回覆多數是「Google Form / Hot Pepper / Google Translate / LINE 已足夠」
- 回應者都是低客單、偶發外國客的店
- 商家真正想要的是集客或預約平台，而不是確認 workflow

## Swarm 最終建議

建議先做，但要遵守三個限制：

1. 只做 14 天驗證版。
2. 定位改成「外国人のお客様向け予約前確認フォーム」。
3. 第一版以人工找 50 家高意圖 salon + 客製 sample + DM 驗證為主，廣告只作為文案測試。

如果 14 天內拿不到真實導入意願，應停止 salon 方向，轉測其他高風險預約服務，例如旅宿、體驗活動、非醫療診所前置說明、不動產看房前確認。

