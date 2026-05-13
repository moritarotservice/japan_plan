# Salon Guest Check 14 天執行計畫

更新日期：2026-05-14

## 目標

用 14 天驗證日本 salon 是否願意使用「外国人のお客様向け予約前確認フォーム」。

第一階段不做完整 SaaS，只做可測需求的網站與手動銷售流程。

## 驗證核心

真正要驗證的不是「會不會有人點網站」，而是：

> 商家是否願意把確認 link 放進 Instagram DM、LINE、Google Business、Hot Pepper 備註或店內流程。

## 第一版產品範圍

### 做

- 日文 landing page
- 6-8 題商家表單
- 英文預約前確認頁 preview
- Email capture
- 取得確認 link
- Pro CTA：顧客回答・写真・アレルギー確認を受け取る
- 事件追蹤
- 手動收集 50 家目標 salon 名單
- 手動 DM / email 驗證

### 不做

- 不做完整登入
- 不做付款
- 不做 booking
- 不做 marketplace
- 不做 Hot Pepper Beauty 整合
- 不做 Google Reserve 整合
- 不做 chat
- 不做 QR code 作為核心
- 不做完整多語 CMS
- 不碰美容醫療問診

## 第一版網站結構

### Hero

標題：

> 外国人のお客様向け 予約前確認フォームを3分で作成

副標：

> キャンセル・遅刻・支払い・施術前の注意事項を多言語で案内し、DM対応と当日の認識違いを減らします。

主 CTA：

> 無料で確認フォームを作成

### 痛點區

三個痛點：

- 外国人のお客様に毎回 DM で同じ説明をしている
- 無断キャンセル・遅刻・認識違いを減らしたい
- 施術前に写真・アレルギー・注意事項を確認したい

### 使用流程

1. 入力
2. 確認リンク作成
3. Instagram DM / LINE / Hot Pepper 備考で送る
4. Pro 版では顧客回答と写真を受け取る

### Demo form

欄位：

- 店名
- 店型 / 服務類型
- 最近車站或地址
- 予約・店舗リンク
- 取消期限
- 遲到規則
- 付款方式
- 需要事前確認的事項
- 聯絡 Email

### Preview

先只做英文 preview：

- Booking Policy
- Late Arrival Policy
- Payment Methods
- Before Your Visit
- Please Prepare Style Photos
- Allergy / Sensitivity Notice

### Email gate

文案：

> 確認リンクを受け取るにはメールアドレスを入力してください。

### Pro CTA

文案：

> 顧客回答・希望スタイル写真・アレルギー確認を受け取れる Pro 版を試す

## 事件追蹤

事件優先級：

1. `form_started`
2. `form_completed`
3. `preview_generated`
4. `email_submitted_for_link`
5. `pro_interest_clicked`
6. `consultation_clicked`
7. `sample_requested`

最重要事件：

> `email_submitted_for_link`

## 14 天排程

### Day 1：定稿

- 定稿日文 landing page 文案
- 定稿表單欄位
- 定稿英文 preview template
- 定稿 DM 文案

### Day 2-4：網站 MVP

- 建立單頁網站
- 建立表單
- 建立 preview
- 建立 Email gate
- 建立 Pro CTA
- 串接資料收集

### Day 5：追蹤與 QA

- 設定 GA / Pixel
- 設定轉換事件
- 測試表單
- 測試 Email capture
- 測試手機版

### Day 6：建立名單

整理 50 家目標 salon。

篩選條件：

- 東京 / 大阪 / 京都核心區
- hair color / bleach / nail / eyelash / head spa / esthetic
- Google Maps 有英文 / 中文 / 韓文評論
- Instagram 活躍
- 服務需要高溝通

### Day 7-10：手動觸達

- 每天發送 10-15 封 Instagram DM / email
- 每家訊息客製化
- 提供 sample link
- CTA 是看 sample 或免費幫店家做第一版，不是購買

### Day 7-14：小額廣告

廣告只用來測文案。

預算：

- Meta / Instagram：NT$5,000-10,000
- Google Search：可選，最多 NT$5,000

### Day 11-14：判斷

檢查：

- 有多少店家填真實資訊
- 有多少留下 Email
- 有多少要求 sample
- 有多少願意放進 DM / LINE / 店內流程
- 有多少問 setup / Pro

## 手動 DM 策略

### DM 原則

- 不大量亂發
- 每封提到店家的具體服務
- 不直接賣產品
- 提供 sample
- 詢問是否想放到 Instagram DM 回覆中

### DM 範本

こんにちは。突然のご連絡失礼します。

外国人のお客様向けに、予約前にキャンセル・遅刻・支払い・施術前の注意事項を確認できるフォームを作っています。

貴店のように {service_type} など事前確認が大切なサロンでは、Instagram DM で毎回同じ説明をする負担を減らせるかもしれないと思い、ご連絡しました。

無料でサンプルを作成できます。外国人のお客様への予約案内に使えるか、一度見ていただけますか？

### DM 後續問題

回覆後確認：

- 外國客預約是否常透過 Instagram DM
- 是否有取消 / 遲到 / 認識違い
- 是否想事前收集照片
- 是否需要顧客確認 cancellation policy
- 是否願意把 link 放到實際 DM

## 廣告文案

### A：DM 負擔

外国人のお客様の予約対応、毎回DMで説明していませんか？

キャンセル・遅刻・支払い・施術前の注意事項を、予約前確認フォームでまとめて案内できます。

### B：no-show / 認識違い

外国人のお客様の無断キャンセルや認識違いを減らしたいサロンへ。

来店前にルール・支払い・希望スタイルを確認できるフォームを作成します。

### C：英語が話せない

英語が話せなくても、外国人のお客様に予約ルールを正しく伝える。

サロン向けの多言語予約前確認フォームを無料で作成。

## 成功標準

最低通過線：

- 10 家輸入真實店家資訊
- 5 家留下 Email
- 3 家下載 / 要求確認 link 或 sample
- 3 家明確表示願意放進 IG DM / LINE / 店內 / Google Maps / Hot Pepper 備註
- 1 家願意試用顧客回覆收集功能
- 或 1 家詢問價格、導入、代設定

強訊號：

- 有店家問「可以幫我設定嗎」
- 有店家提供 cancellation policy、付款方式、服務注意事項
- 有店家願意給真實外國客使用
- 有店家願意付 30,000 日圓以上 setup fee
- 店家關心 no-show、認識違い、事前確認、照片收集，而不是翻譯

失敗訊號：

- 只有點擊，沒有人填真實店家資料
- 使用者只把它當免費翻譯工具
- 沒有人願意留下 Email
- 沒有人願意把 link 放進實際流程
- DM 回覆多數是 Google Form / Hot Pepper / Google Translate / LINE 已足夠
- 商家真正想要的是集客或預約平台

## 定價測試

### Free

- 1 個英文確認頁 preview
- 有品牌標記
- 取得 link

### Setup

- 30,000-100,000 日圓一次性
- 代設定多語確認頁
- 整理 cancellation policy
- 建立 DM 模板
- 設定顧客回覆欄位

### Pro

- 9,800 日圓 / 月
- 顧客回覆收集
- 造型照片上傳
- policy checkbox
- allergy / contraindication 欄位
- 店員 checklist email

## 法務與信任

第一版限制：

- 不做醫療問診
- 不碰美容醫療 clinic
- 不提供醫療、適應症、安全判斷
- 最終服務可否執行由店家現場確認
- 過敏 / 禁忌只收集，不做判斷
- 需準備隱私政策、保存期間、用途、刪除方式
- checkbox 不包裝成完整法律免責或醫療同意書

## 14 天後決策

### 繼續

如果有 3 家以上願意實際使用，或至少 1 家願意付 setup / 試用 Pro，做第二版。

### 調整

如果有人填表但無導入意願，強化 no-show、policy、照片收集角度。

### 停止

如果完全沒人輸入真實資料或沒人願意放進流程，停止 salon，改測其他高風險預約服務。

