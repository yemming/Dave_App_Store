# 企業服務媒合平台 - Dave App Store

這是一個完整的企業服務媒合平台前端系統，使用 Next.js 14 + TypeScript + Tailwind CSS 建置，所有數據目前為 hardcode 狀態，方便與客戶討論流程與介面設計。

## 專案特色

- ✅ **完整前台系統**：首頁、服務市集、服務詳情、關於我們
- ✅ **完整會員中心**：儀表板、服務管理、訂單管理、評價管理、點數中心、訊息中心、帳號設定
- ✅ **完整後台管理**：服務審核、會員管理、數據分析、內容管理、系統設定
- ✅ **現代化設計**：參考 RoofPro 設計風格，使用橘色主題色
- ✅ **響應式設計**：支援桌面、平板、手機等各種裝置

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **圖標**: Lucide React
- **日期處理**: date-fns

## 專案結構

```
Dave_App_Store/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── services/          # 服務相關頁面
│   │   ├── page.tsx       # 服務市集
│   │   └── [id]/page.tsx  # 服務詳情
│   ├── about/             # 關於我們
│   ├── dashboard/         # 會員中心
│   │   ├── page.tsx       # 儀表板
│   │   ├── services/      # 我的服務
│   │   ├── orders/        # 訂單管理
│   │   ├── reviews/       # 評價管理
│   │   ├── points/        # 點數中心
│   │   ├── messages/      # 訊息中心
│   │   └── settings/      # 帳號設定
│   └── admin/             # 後台管理
│       ├── page.tsx       # 管理儀表板
│       ├── services/      # 服務審核
│       ├── users/         # 會員管理
│       ├── analytics/     # 數據分析
│       ├── content/       # 內容管理
│       └── settings/       # 系統設定
├── components/            # 共用組件
│   ├── Header.tsx        # 頁首導航
│   ├── Footer.tsx        # 頁尾
│   ├── ServiceCard.tsx   # 服務卡片
│   └── RatingStars.tsx   # 評分星星
├── data/                 # Hardcode 數據
│   └── mockData.ts       # Mock 數據定義
└── public/               # 靜態資源

```

## 安裝與執行

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

### 3. 開啟瀏覽器

訪問 [http://localhost:3000](http://localhost:3000)

## 頁面說明

### 前台頁面

#### 首頁 (`/`)
- Hero 區塊：平台介紹與 CTA
- 數據統計：註冊企業、服務提供者、平均評分等
- 熱門服務：展示 6 個熱門服務
- 平台特色：雙向評價、點數系統、會員等級
- 行動呼籲：引導註冊與探索服務

#### 服務市集 (`/services`)
- 服務搜尋與篩選
- 類別標籤切換
- 服務列表展示
- 分頁功能

#### 服務詳情 (`/services/[id]`)
- 服務詳細資訊
- 服務提供者資訊
- 客戶評價列表
- 立即下單與聯絡功能

#### 關於我們 (`/about`)
- 平台介紹
- 使命、願景、價值
- 平台特色說明

### 會員中心 (`/dashboard`)

#### 儀表板 (`/dashboard`)
- 數據統計卡片
- 最近訂單列表
- 最近點數交易

#### 我的服務 (`/dashboard/services`)
- 服務統計
- 服務列表（表格形式）
- 新增、編輯、刪除服務

#### 訂單管理 (`/dashboard/orders`)
- 訂單統計
- 訂單篩選
- 訂單列表與狀態管理

#### 評價管理 (`/dashboard/reviews`)
- 評價統計
- 待評價訂單
- 所有評價列表

#### 點數中心 (`/dashboard/points`)
- 點數統計
- 點數規則說明
- 點數交易記錄
- 快速兌換功能

#### 訊息中心 (`/dashboard/messages`)
- 對話列表
- 即時訊息介面
- 訊息搜尋

#### 帳號設定 (`/dashboard/settings`)
- 基本資料編輯
- 密碼變更
- 帳號資訊顯示

### 後台管理 (`/admin`)

#### 管理儀表板 (`/admin`)
- 系統總覽數據
- 最近活動
- 快速操作

#### 服務審核 (`/admin/services`)
- 服務統計
- 服務列表與審核
- 通過/拒絕功能

#### 會員管理 (`/admin/users`)
- 會員統計
- 會員列表
- 會員詳情查看

#### 數據分析 (`/admin/analytics`)
- 營運數據指標
- 熱門服務排行
- 成長趨勢圖表（預留）

#### 內容管理 (`/admin/content`)
- 首頁輪播圖管理
- 公告消息管理

#### 系統設定 (`/admin/settings`)
- 平台基本設定
- 點數系統設定
- 系統資訊

## 數據結構

所有數據定義在 `data/mockData.ts`，包含：

- `Service`: 服務資料
- `Order`: 訂單資料
- `Review`: 評價資料
- `User`: 會員資料
- `PointsTransaction`: 點數交易資料
- `Message`: 訊息資料
- `Notification`: 通知資料

## 設計風格

- **主色調**: 橘色 (#FF6B35)
- **次要色調**: 深灰 (#1A1A1A)
- **字體**: Inter (系統預設)
- **圓角**: 統一使用 rounded-lg (8px)
- **陰影**: shadow-md 用於卡片

## 下一步開發

當與客戶確認流程後，可以進行以下開發：

1. **Supabase 整合**
   - 建立資料庫 Schema
   - 設定 Row Level Security (RLS)
   - 整合 Supabase Auth

2. **API 開發**
   - Next.js API Routes
   - Supabase Edge Functions
   - 第三方服務整合

3. **功能完善**
   - 圖片上傳功能
   - 即時通知推送
   - 搜尋與篩選邏輯
   - 分頁功能

4. **優化**
   - 效能優化
   - SEO 優化
   - 錯誤處理
   - 載入狀態

## 注意事項

- 目前所有數據為 hardcode，僅供展示與討論使用
- 圖片使用 placeholder，實際部署時需替換
- 部分功能按鈕僅為 UI 展示，尚未實作實際功能
- 後續需根據客戶需求調整設計與功能

## 授權

此專案為客戶專案，版權歸客戶所有。

